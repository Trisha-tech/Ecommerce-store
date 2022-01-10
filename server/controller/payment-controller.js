import paytmchecksum from '../paytm/PaytmChecksum.js';
import { paytmMerchantKey, paytmParams } from '../index.js';
import formidable from 'formidable'
import https from 'https'

export const addPaymentGateway = async (request, response) => {//paytmparams, merchantkey
    let paytmChecksum = await paytmchecksum.generateSignature(paytmParams, paytmMerchantKey);

    try {
        let params = {
            ...paytmParams, 'CHECKSUMHASH': paytmChecksum
        }
        response.json(params);
    } catch (error) {
        console.log(error);
    }
}

export const paymentResponse = async (request, response) => {//paytmparams, merchantkey
    const form = new formidable.IncomingForm();
    let paytmChecksum = request.body.CHECKSUMHASH;
    delete request.body.CHECKSUMHASH;
    let isVerifySignature = paytmchecksum.verifySignature(request.body, 'bKMfNxPPf_QdZppa', paytmChecksum);
    if (isVerifySignature) {
        paytmParams['MID'] = request.body.MID;
        paytmParams['ORDERID'] = request.body.ORDERID;

        paytmchecksum.generateSignature(paytmParams, 'bKMfNxPPf_QdZppa').then(function (checksum) {
            paytmParams['CHECKSUMHASH'] = checksum;

            let post_data = JSON.stringify(paytmParams);

            let options = {
                hostname: 'securegw-stage.paytm.in',
                port: 443,
                path: '/order/process',
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': post_data.length
                }
            }


            let res = ''

            let post_req = https.request(options, function (post_res) {
                post_res.on('data', function (chunk) {
                    res += chunk;
                })

                post_res.on('end', function () {
               //   let result=  JSON.parse(res);
                    response.redirect('http://localhost:8000/')
                })
            });
            post_req.write(post_data);
            post_req.end();

        });
    } else {
        console.log('Checksum Mismatched');
    }
    console.log('//////////////end')
}