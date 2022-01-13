import React, { useEffect } from 'react'
import { Button, makeStyles, Box, Typography, Badge } from '@material-ui/core'


//components
import Navbar from './home/Navbar'
import Banner from './home/Banner'
import Slide from './home/Slide'
import MidSection from './home/MidSection'
import MidSlide from './home/MidSlide'

//import { products } from '../../constants/data'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts as listProducts } from '../redux/actions/productActions'

const useStyles = makeStyles((theme) => ({
    component: {
        padding: 10,
        background: "#F2F2F2"
    },
   /* rightWrapper: {
        background: "#FFFFFF",
        padding: 5,
        margin: "12px 0 0 10px"
    }*/
}))

const Home = () => {
    const classes = useStyles();
   // const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

    const { products } = useSelector(state => state.getProducts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch])

    return (
        <>
            <Navbar />
            <Box className={classes.component}>
                <Banner />
                <MidSlide products={products} />
                <MidSection />
                
                
                <Slide timer={false} title="Discounts for You" data={products} multi={true}  />
                <Slide timer={false} title="Suggested Items" data={products} multi={true}  />
                <Slide timer={false} title="Top Selection" data={products} multi={true}  />
                <Slide timer={false} title="Recommended Items" data={products} multi={true}  />
                <Slide timer={false} title="Best Sellers" data={products} multi={true}  />

            </Box>

        </>
    )
}
export default Home;