import React, { useState } from "react";
import { Dialog, DialogContent, makeStyles, Box, Typography, TextField, Button } from '@material-ui/core'

const useStyles = makeStyles({
    component: {
        height: "70vh",
        width: "90vh",
        maxWidth: 'unset !important'
    },
    image: {
        backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        height: "70vh",
        backgroundRepeat: "no-repeat",
        background: "#2874f0",
        width: "40%",
        backgroundPosition: "center 85%",
        padding: "45px 35px",
        "& > *": {
            color: "#FFFFFF",
            fontWeight: 600
        }
    },
    login: {
        padding: "25px 35px",
        display: "flex",
        flex: 1,
        flexDirection: "column",
        "& > *": {
            marginTop: 7
        }
    },
    text: {
        color: "#878787",
        fontSize: 12
    },
    loginBtn: {
        textTransform: "none",
        background: "#FB641B",
        color: "#FFFFFF",
        height: 48,
        borderRadius: 2
    },
    requestBtn: {
        textTransform: "none",
        background: "#FFFFFF",
        color: "#2874f0",
        height: 48,
        borderRadius: 2,
        boxShadow: "0 2px 4px 0 rgb(0 0 0 / 20%)"
    },
    createText: {
        margin: 'auto 0 5px 0',
        textAlign: 'center',
        color: '#2874f0',
        fontWeight: 600,
        fontSize: 14,
        cursor: 'pointer'
    }
})

const initialValue = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: 'Looks like you are new here',
        subHeading: 'Sign up with your mobile number to get started'
    }
}

const Login = ({ open, setOpen }) => {

    const classes = useStyles();
    const [account, setAccount] = useState(initialValue.login)

    const handleClose = () => {
        setOpen(false);
        setAccount(initialValue.login);
    }

    const toogleAccount = () => {
        setAccount(initialValue.signup);
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent className={classes.component}>
                <Box style={{ display: "flex" }}>
                    <Box className={classes.image}>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{ marginTop: 20 }}>{account.subHeading}</Typography>
                    </Box>
                    {
                        account.view === "login" ?
                            <Box className={classes.login}>
                                <TextField name="username" label="Enter Email/Mobile number" />
                                <TextField name="password" label="Enter Password" />
                                <Typography className={classes.text}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                                <Button variant="contained" className={classes.loginBtn}>Login</Button>
                                <Typography className={classes.text} style={{ textAlign: "center" }}>OR</Typography>
                                <Button variant="contained" className={classes.requestBtn}>Request OTP</Button>
                                <Typography onClick={() => toogleAccount()} className={classes.createText}>New to Flipkart? Create an account</Typography>
                            </Box>
                            :
                            <Box className={classes.login}>
                                <TextField name="firstname" label="Enter Firstname" />
                                <TextField name="lastname" label="Enter Lastname" />
                                <TextField name="username" label="Enter Username" />
                                <TextField name="email" label="Enter Email" />
                                <TextField name="password" label="Enter Password" />
                                <TextField name="phone" label="Enter Phone Number" />
                                <Button variant="contained" className={classes.loginBtn}>Signup</Button>
                            </Box>
                    }

                </Box>
            </DialogContent>
        </Dialog>
    )
}
export default Login;