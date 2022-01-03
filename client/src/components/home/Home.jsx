import React from 'react'
import { Button, makeStyles, Box, Typography, Badge } from '@material-ui/core'


//components
import Navbar from './Navbar'
import Banner from './Banner'


const useStyles = makeStyles((theme)=>({
    component:{
        padding:10,
        background:"#F2F2F2"
    }
}))

const Home=()=>{
    const classes = useStyles();
    return(
       <div>
            <Navbar/>
            <Box className={classes.component}>
            <Banner/>
        </Box>
        </div>
    )
}
export default Home;