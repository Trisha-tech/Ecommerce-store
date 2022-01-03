import React from 'react'
import { AppBar, Toolbar, makeStyles,withStyles, Typography,Box } from '@material-ui/core'
import { Link } from 'react-router-dom'
//components
import SearchBar from './SearchBar'
import HeaderButtons from './HeaderButtons'


const useStyles = makeStyles({
    header: {
        background: "#2874f0",
        height: 55
    },
    logo: {
        width: 75
    },
    subUrl: {
        width: 10,
        height: 10,
        marginLeft: 4
    },
    container: {
        display: "flex"
    },
    component: {
        marginLeft: "12%",
        lineHeight: 0,
        color: '#FFFFFF',
        textDecoration: 'none'
    },
    subHeading: {
        fontSize: 10,
        fontStyle: "italic"
    }
})

const ToolBar=withStyles({
    root: {
        minHeight: 55
      },
})(Toolbar);

const Header = () => {
    const classes = useStyles();
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return (
        <AppBar className={classes.header} position="fixed">

            <ToolBar>
                <Box className={classes.component}>
                    <img src={logoURL} className={classes.logo} />
                    <Box className={classes.container}>
                        <Typography className={classes.subHeading}>Explore <Box component="span" style={{color:"#FFE500"}}>Plus</Box></Typography>
                        <img src={subURL} className={classes.subUrl} />
                    </Box>
                </Box>
                <SearchBar/>
                <HeaderButtons/>
            </ToolBar>
        </AppBar>
    )
}

export default Header