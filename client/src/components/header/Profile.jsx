import React, { useState } from "react"
import { Typography, Menu, MenuItem, makeStyles } from '@material-ui/core'
import { PowerSettingsNew } from '@material-ui/icons'

const useStyles = makeStyles({
    component: {
        marginTop: 40
    },
    logout: {
        marginLeft: 20,
        fontSize: 14
    }
})

const Profile = ({ account, setAccount }) => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }

    const logout = () => {
        setAccount('');
    }

    return (
        <>
            <Typography onClick={handleClick} style={{ marginTop: 4 }}>{account}</Typography>
            <Menu
                id="simple-menu"
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
                className={classes.component}
            >
                <MenuItem onClick={() => { handleClose(); logout(); }}>
                    <PowerSettingsNew fontSize="small" color="primary" />
                    <Typography className={classes.logout}>Logout</Typography>
                </MenuItem>
            </Menu>
        </>
    )
}
export default Profile