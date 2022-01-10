import React, { useState } from "react";
import { Button, ButtonGroup, makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
    component: {
        marginTop: 30
    },
    button: {
        borderRadius: "50%"
    }
})

const GroupButton = () => {
    const classes = useStyles();
    const [counter, setCounter] = useState(1);

    const handleIncrement = () => {
        setCounter(counter => counter + 1);
    }

    const handleDecrement = () => {
        setCounter(counter => counter - 1);
    }

    return (
        <ButtonGroup className={classes.component}>
            <Button onClick={() => handleDecrement()} disabled={counter==1} className={classes.button}>-</Button>
            <Button>{counter}</Button>
            <Button onClick={() => handleIncrement()} className={classes.button}>+</Button>
        </ButtonGroup>
    )
}
export default GroupButton