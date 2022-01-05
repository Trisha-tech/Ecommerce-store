import React, { useState, useContext } from 'react'
import { Button, makeStyles, Box, Typography, Badge } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import { Link } from 'react-router-dom'

//components
import Login from '../login/Login'
import { LoginContext } from '../../context/ContextProvider'
import Profile from './Profile'

const useStyles = makeStyles({
    login: {
        background: "#FFFFFF",
        color: "#2874f0",
        textTransform: "none",
        fontWeight: 600,
        borderRadius: 2,
        padding: "5px 40px",
        boxShadow: "none"
    },
    wrapper: {
        margin: "0 7% 0 auto",
        display: "flex",
        "& > *": {
            marginRight: 50,
            alignItems: "center",

        }
    },
    container: {
        display: "flex"
    }
})

const HeaderButtons = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const { account, setAccount } = useContext(LoginContext);

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
            <Box className={classes.container}>
                <Badge badgeContent={2} color="secondary">
                    <ShoppingCart />
                </Badge>
                <Typography style={{ marginLeft: 10 }}>Cart</Typography>
            </Box>
            <Login open={open} setOpen={setOpen} setAccount={setAccount} />
        </Box>
    )
}
export default HeaderButtons