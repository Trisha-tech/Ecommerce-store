import React, { useEffect } from 'react'
import { Button, makeStyles, Box, Typography, Badge } from '@material-ui/core'


//components
import Navbar from './Navbar'
import Banner from './Banner'
import Slide from './Slide'
import MidSection from './MidSection'

//import { products } from '../../constants/data'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts as listProducts } from '../../redux/actions/productActions'

const useStyles = makeStyles((theme) => ({
    component: {
        padding: 10,
        background: "#F2F2F2"
    },
    rightWrapper: {
        background: "#FFFFFF",
        padding: 5,
        margin: "12px 0 0 10px"
    }
}))

const Home = () => {
    const classes = useStyles();
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

    const { products } = useSelector(state => state.getProducts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch])

    return (
        <div>
            <Navbar />
            <Box className={classes.component}>
                <Banner />
                <Box style={{ display: "flex" }}>
                    <Box style={{ width: "81%" }}>
                        <Slide timer={true} title="Deal of the Day" products={products} />
                    </Box>
                    <Box className={classes.rightWrapper}>
                        <img src={adURL} style={{ width: 230 }} />
                    </Box>
                </Box>
                <MidSection />
                <Slide timer={false} title="Discounts for You" products={products} />
                <Slide timer={false} title="Suggested Items" products={products} />
                <Slide timer={false} title="Top Selection" products={products} />
                <Slide timer={false} title="Recommended Items" products={products} />
                <Slide timer={false} title="Best Sellers" products={products} />

            </Box>

        </div>
    )
}
export default Home;