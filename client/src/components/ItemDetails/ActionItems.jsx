import React from 'react';
import { Box, Button, makeStyles } from '@material-ui/core'
import { ShoppingCart, FlashOn } from '@material-ui/icons'
import clsx from 'clsx';
import { addToCart } from '../../redux/actions/cartActions'
import { useSelector, useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'

const useStyles = makeStyles({
    leftContainer: {
        padding: "40px 0 0 80px"
    },
    image: {
        padding: "15px 20px",
        border: "1px solid #f0f0f0",
        width: "95%"
    },
    button: {
        height: 50,
        width: '40%',
        borderRadius: 2
    },
    addToCart: {
        background: "#f99f00",
        marginRight: 10,
        color: "#ffffff"
    },
    buyNow: {
        background: "#fb641b",
        color: "#ffffff"
    }
})

const ActionItems = ({ product }) => {
    const classes = useStyles();
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const addItemToCart = () => {
        dispatch(addToCart(product.id));
        navigate('/cart');
    }

    return (
        <Box className={classes.leftContainer}>
            <img src={product.detailUrl} className={classes.image} /><br/>
            <Button onClick={() => addItemToCart()} variant='contained' className={clsx(classes.button, classes.addToCart)}><ShoppingCart />Add to Cart</Button>
            <Button variant='contained' className={clsx(classes.button, classes.buyNow)}><FlashOn />Buy Now</Button>
        </Box>

    )
}
export default ActionItems;