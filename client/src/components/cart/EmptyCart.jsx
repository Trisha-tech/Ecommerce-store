import React from "react";
import { Box, Button, makeStyles, Typography } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    component: {
        margin: "80px 140px",
        width: "80%",
        background: "#fff",
        height: "65vh",
        [theme.breakpoints.down('sm')]: {
            margin:"60px 50px !important"
        },
        [theme.breakpoints.down('md')]: {
            margin:"80px 90px"
        }
    },
    image: {
        width: "15%"
    },
    container: {
        padding: 70,
        textAlign: "center",
        '& > *': {
            marginTop: 10,
            fontSize: 14
        }
    },
    button: {
        marginTop: 20,
        padding: '12px 70px',
        borderRadius: 2,
        fontSize: 14,
        background: "#2874f0",
        color: "#fff"
    }
}));

const EmptyCart = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const emptycarturl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';

    const addItem = () => {
        navigate("/");
    }

    return (
        <Box className={classes.component}>
            <Box className={classes.container}>
                <img src={emptycarturl} className={classes.image} />
                <Typography>Your Cart is Empty</Typography>
                <Typography>Add items to it now</Typography>
                <Button className={classes.button} variant="contained" onClick={() => addItem()}>Shop now</Button>
            </Box>
        </Box>
    )
}
export default EmptyCart