import React from 'react'
import { Button, makeStyles, Box, Typography, Badge } from '@material-ui/core'


//components
import Navbar from './Navbar'
import Banner from './Banner'
import Slide from './Slide'
import MidSection from './MidSection'


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
    return (
        <div>
            <Navbar />
            <Box className={classes.component}>
                <Banner />
                <Box style={{ display: "flex" }}>
                    <Box style={{ width: "81%" }}>
                        <Slide timer={true} title="Deal of the Day" />
                    </Box>
                    <Box className={classes.rightWrapper}>
                        <img src={adURL} style={{ width: 230 }} />
                    </Box>
                </Box>
                <MidSection />
                <Slide timer={false} title="Discounts for You" />
                <Slide timer={false} title="Suggested Items" />
                <Slide timer={false} title="Top Selection" />
                <Slide timer={false} title="Recommended Items" />
                <Slide timer={false} title="Best Sellers" />

            </Box>

        </div>
    )
}
export default Home;