import React, { useState, useContext } from 'react'
import { Button, makeStyles, Box, Typography, Badge } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import { Link } from 'react-router-dom'

//components
import Login from '../login/Login'
import { LoginContext } from '../../context/ContextProvider'
import Profile from './Profile'
import { useSelector } from 'react-redux'

const useStyles = makeStyles(theme => ({
    login: {
        background: "#FFFFFF",
        color: "#2874f0 !important",
        textTransform: "none",
        fontWeight: 600,
        borderRadius: 2,
        padding: "5px 40px",
        height: 32,
        boxShadow: "none",
        [theme.breakpoints.down('sm')]: {
            background: '#2874f0',
            color: '#FFFFFF !important'
        }
    },
    wrapper: {
        margin: "0 5% 0 auto",
        display: "flex",
        "& > *": {
            marginRight: 50,
            alignItems: "center",
            textDecoration: 'none',
            color: '#FFFFFF',
            fontSize: 12,
            [theme.breakpoints.down('sm')]: {
                color: '#2874f0',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                marginTop: 10
            }
        },
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    container: {
        display: "flex",
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    }
}))

const HeaderButtons = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const { account, setAccount } = useContext(LoginContext);

    const { cartItems } = useSelector(state => state.cart);

    const openLoginDialog = () => {
        setOpen(true);
    }

    return (
        <Box className={classes.wrapper}>
            {
                account ?
                    <Profile account={account} setAccount={setAccount} />
                    :

                    <Button variant="contained" onClick={() => openLoginDialog()} className={classes.login}>Login</Button>

            }

            <Typography style={{ marginTop: 5 }}>More</Typography>

            <Link to="/cart" className={classes.container}>
                <Badge badgeContent={cartItems.length} color="secondary">
                    <ShoppingCart />
                </Badge>
                <Typography style={{ marginLeft: 10 }}>Cart</Typography>
            </Link>
            <Login open={open} setOpen={setOpen} setAccount={setAccount} />
        </Box>
    )
}
export default HeaderButtons