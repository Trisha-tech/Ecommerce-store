import React, { useState } from "react";
import { Dialog, DialogContent, makeStyles, Box, Typography, TextField, Button } from '@material-ui/core'
import { authenticateSignup,authenticateLogin } from "../../service/api";

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
    },
    error:{
        fontSize:11,
        color:"#ff6161",
        marginTop:10,
        lineHeight:0,
        fontWeight: 600
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

const signupInitialValue = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    phone: ""
}

const loginInitialValue = {
    username: "",
    password: ""
}

const Login = ({ open, setOpen, setAccount }) => {

    const classes = useStyles();
    const [account, setMyAccount] = useState(initialValue.login);

    const [signup, setSignup] = useState(signupInitialValue);
    const [login, setLogin] = useState(loginInitialValue);

    const [error,setError]=useState(false);

    const handleClose = () => {
        setOpen(false);
        setMyAccount(initialValue.login);
    }

    const toogleAccount = () => {
        setMyAccount(initialValue.signup);
    }

    const signupUser = async () => {
        let response = await authenticateSignup(signup);
        if (!response) return;
        handleClose();
        setAccount(signup.username);
    }

    const loginUser = async () => {
        let response = await authenticateLogin(login);
        if (!response) {
            setError(true);
            return;
        }
        handleClose();
        setAccount(login.username);
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
        console.log(signup);
    }

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
        console.log(login);
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
                                <TextField onChange={(e) => onValueChange(e)} name="username" label="Enter Email/Mobile number" />
                                <TextField onChange={(e) => onValueChange(e)} name="password" label="Enter Password" />
                              {error && <Typography className={classes.error}>Invalid username or password</Typography>}
                                <Typography className={classes.text}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                                <Button variant="contained" onClick={() => loginUser()} className={classes.loginBtn}>Login</Button>
                                <Typography className={classes.text} style={{ textAlign: "center" }}>OR</Typography>
                                <Button variant="contained" className={classes.requestBtn}>Request OTP</Button>
                                <Typography onClick={() => toogleAccount()} className={classes.createText}>New to Flipkart? Create an account</Typography>
                            </Box>
                            :
                            <Box className={classes.login}>
                                <TextField onChange={(e) => onInputChange(e)} name="firstname" label="Enter Firstname" />
                                <TextField onChange={(e) => onInputChange(e)} name="lastname" label="Enter Lastname" />
                                <TextField onChange={(e) => onInputChange(e)} name="username" label="Enter Username" />
                                <TextField onChange={(e) => onInputChange(e)} name="email" label="Enter Email" />
                                <TextField onChange={(e) => onInputChange(e)} name="password" label="Enter Password" />
                                <TextField onChange={(e) => onInputChange(e)} name="phone" label="Enter Phone Number" />
                                <Button variant="contained" onClick={() => signupUser()} className={classes.loginBtn}>Signup</Button>
                            </Box>
                    }

                </Box>
            </DialogContent>
        </Dialog>
    )
}
export default Login;