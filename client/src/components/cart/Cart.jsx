import React from 'react'
import { Button, makeStyles, Box, Typography, Badge } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'

import { navData } from '../../constants/data'

const useStyles = makeStyles((theme) => ({
    component: {
        display: "flex",
        margin: "55px 130px 0 130px",
        justifyContent: "space-between"
    },
    container: {
        textAlign: "center",
        padding: "12px 8px"
    },
    image: {
        width: 64
    },
    text: {
        fontSize: 14,
        fontWeight: 600
    }
}))

const Cart = () => {
    const classes = useStyles();
    return (
        <Box className={classes.component}>
            {
                navData.map(data => (
                    <Box className={classes.container}>
                        <img src={data.url} className={classes.image} />
                        <Typography className={classes.text}>{data.text}</Typography>
                    </Box>
                ))
            }

        </Box>
    )
}
export default Cart;