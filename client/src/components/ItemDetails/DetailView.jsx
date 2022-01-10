import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProductDetails } from '../../redux/actions/productActions';
import { Box, makeStyles, Table, TableCell, TableRow, Typography, TableBody } from '@material-ui/core'
import { useParams } from 'react-router-dom';
import clsx from 'clsx';
import { LocalOffer } from '@material-ui/icons';
import { getProductById } from '../../service/api';

//components
import ActionItems from './ActionItems';

const useStyles = makeStyles({
    component: {
        marginTop: 55,
        background: "#F2F2F2"
    },
    container: {
        margin: "0 80px",
        background: "#FFFFFF",
        display: "flex"
    },
    rightContainer: {
        marginTop: 50,
        '& > *': {
            marginTop: 10
        }
    },
    smallText: {
        fontSize: 14,
        verticalAlign: "baseline",
        '& > *': {
            fontSize: 14,
            marginTop: 10
        }
    },
    price: {
        fontSize: 28
    },
    greyTextColor: {
        color: "#878787"
    },
    badge: {
        fontSize: 14,
        marginRight: 10,
        color: "#00CC00"
    }
})

const DetailView = () => {
    const classes = useStyles();
    const { id } = useParams();


    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const sellerURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    const { product } = useSelector(state => state.getProductDetails);
   

    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));

     const dispatch = useDispatch();
     
     useEffect(() => {
           
             dispatch(getProductDetails(id));
     }, [dispatch]);
 
    return (
        <Box className={classes.component}>
            {product && Object.keys(product).length &&
                <Box className={classes.container}>
                    <Box style={{ minWidth: "40%" }}>
                        <ActionItems product={product} />
                    </Box>
                    <Box className={classes.rightContainer}>
                        <Typography>{product.title.longTitle}</Typography>
                        <Typography className={clsx(classes.smallText, classes.greyTextColor)}>
                            8 ratings & 1 review
                            <span><img src={fassured} style={{ width: 77, marginLeft: 20 }} /></span>
                        </Typography>
                        <Typography>
                            <span className={classes.price}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp;
                            <span className={classes.greyTextColor}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span style={{ color: "#388E3C" }}>{product.price.discount} off</span>
                        </Typography>
                        <Typography style={{ marginTop: 20, fontWeight: 600 }}>Available offers</Typography>
                        <Box className={classes.smallText}>
                            <Typography><LocalOffer className={classes.badge} />Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100</Typography>
                            <Typography><LocalOffer className={classes.badge} />Partner OfferGet upto ₹500 off on Select Furniture</Typography>
                            <Typography><LocalOffer className={classes.badge} />Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card</Typography>
                        </Box>
                        <Table>
                            <TableBody>
                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.greyTextColor}>Delivery</TableCell>
                                    <TableCell style={{ fontWeight: 600 }}>{date.toDateString()} | ₹40</TableCell>
                                </TableRow>
                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.greyTextColor}>Warranty</TableCell>
                                    <TableCell>No Warranty</TableCell>
                                </TableRow>
                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.greyTextColor}>Seller</TableCell>
                                    <TableCell className={classes.smallText}>
                                        <span style={{ color: "#2874f0" }}>Super Commet</span>
                                        <Typography>GST invoice Available</Typography>
                                        <Typography>14 Days Return Policy</Typography>
                                        <Typography>View more sellers starting from ₹300</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2}><img src={sellerURL} style={{ width: 390 }} /></TableCell>
                                </TableRow>
                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.greyTextColor}>Description</TableCell>
                                    <TableCell>{product.description}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Box>
                </Box>
            }
        </Box>
    )
}

export default DetailView;