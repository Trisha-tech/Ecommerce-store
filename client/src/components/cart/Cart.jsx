import React from 'react'
import { Button, makeStyles, Box, Typography, Badge } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'

import { navData } from '../../constants/data'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
//import DetailView from '../product/DetailView'
import { removeFromCart } from '../../redux/actions/cartActions'

import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/paytm';

import CartItem from './CartItem'
import EmptyCart from './EmptyCart'
import TotalView from './TotalView'

const useStyles = makeStyles((theme) => ({
    component: {
        marginTop: 55,
        padding: "30px 135px",
        display: "flex",

    },
    leftComponent: {
        width: "67%"
    },
    header: {
        padding: "15px 24px",
        background: "#"
    },
    placeOrder: {
        background: "#fb641b",
        color: "#fff",
        borderRadius: 2,
        width: 250,
        height: 50,
        display: "flex",
        marginLeft: "auto"
    },
    bottom: {
        padding: "16px 22px",
        background: "#fff",
        borderTop: "1px solid #f0f0f0",
        boxShadow: '0 -2px 10px 0 rgb(0 0 0 /10%)'
    }
}))

const Cart = () => {
    const classes = useStyles();

    const { cartItems } = useSelector(state => state.cart);

    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(removeFromCart(id));
    })

    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id));
    }

    const buyNow = async () => {
        let response = await payUsingPaytm({ amount: 500, email: "trisha2000sahu@gmail.com" });

        let information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response
        }
        post(information);
    }

    return (
        <>
            {
                cartItems.length ?
                    <Box className={classes.component}>
                        <Box className={classes.leftComponent}>
                            <Box className={classes.header}>
                                <Typography style={{ fontWeight: 600, fontSize: 18 }}>My Cart ({cartItems.length})</Typography>
                            </Box>
                            {
                                cartItems.map(item => (
                                    <CartItem item={item} removeItemFromCart={removeItemFromCart} />
                                ))
                            }
                            <Box className={classes.bottom}>
                                <Button  className={classes.placeOrder} variant="contained">Place Order</Button>
                            </Box>
                        </Box>
                        <TotalView cartItems={cartItems} />
                    </Box>
                    : <EmptyCart />
            }
        </>
    )
}
export default Cart;