import React, { useState } from 'react'
import { AppBar, Toolbar, makeStyles, withStyles, Typography, Box, IconButton, Drawer, ListItem, List } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { Menu } from '@material-ui/icons'
//components
import SearchBar from './SearchBar'
import HeaderButtons from './HeaderButtons'


const useStyles = makeStyles(theme => ({
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
    },
    list: {
        width: 250
    },
    menuButton: {
        display: "none",
        [theme.breakpoints.down('sm')]: {
            display: "block"
        }
    },
    headerButtons: {
        margin: '0 5% 0 auto',
        [theme.breakpoints.down('sm')]: {
            display: "none"
        }
    }
}));

const ToolBar = withStyles({
    root: {
        minHeight: 55
    },
})(Toolbar);

const Header = () => {
    const classes = useStyles();
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const list = () => {
        return (
            <Box className={classes.list} onClick={handleClose}>
                <List>
                    <ListItem button>
                        <HeaderButtons />
                    </ListItem>
                </List>
            </Box>
        )
    }

    return (
        <AppBar className={classes.header} position="fixed">

            <ToolBar>
                <IconButton
                    color="inherit"
                    className={classes.menuButton}
                    onClick={handleOpen}
                >
                    <Menu />
                </IconButton>
                <Drawer open={open} onClose={handleClose} >
                    {list()}
                </Drawer>
                <Link to='/' className={classes.component}>
                    <img src={logoURL} className={classes.logo} />
                    <Box className={classes.container}>
                        <Typography className={classes.subHeading}>Explore <Box component="span" style={{ color: "#FFE500" }}>Plus</Box></Typography>
                        <img src={subURL} className={classes.subUrl} />
                    </Box>
                </Link>
                <SearchBar />
                <span className={classes.headerButtons}> <HeaderButtons /></span>
            </ToolBar>
        </AppBar>
    )
}

export default Header