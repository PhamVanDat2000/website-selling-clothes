
import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundColor:"#000",
    },
    paging: {
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    Products: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    ProductItem: {
        margin:'30px',
    },
}));