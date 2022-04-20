import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useStyles } from './styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';
export default function CheckoutSuccess() {
    const classes = useStyles()
    const history = useHistory()
    const toHomePage =()=>{
        history.push("/home")
    }
    return (
        
        <div  className={classes.root}>
            <CheckCircleIcon className={classes.icon} />
            <h2 variant="h6" className={classes.text}>
            Successful purchase
            </h2>
            <Button variant="outlined" color="secondary"
                onClick={toHomePage}>
                Back to Home page
            </Button>
        </div>
    )
}
