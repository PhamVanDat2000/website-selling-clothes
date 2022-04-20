import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({

    root: {
        // '& label.Mui-focused': {
        //     color: 'white',
        // },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#087464',
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: '#087464',
                color: '#fff',
            },
        },
    },
    form: {
        boxSizing: "border-box",
        padding: "20px 50px",
        margin: 'auto',
        marginTop: '50px',
        marginBottom: '150px',
        borderRadius: 10,
        background: '#fff',
        width: 600,
        minHeight: 500,
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    },
    wrapContent: {
        display: 'block',
        color: 'white',
        marginTop: "30px",
    },
    titlePage: {
        display: 'block',
    },

    titleCart: {
        display: 'block',
        marginBottom: '30px',
    },
    cartItems: {
        display: 'flex',
        alignItems: "center",
        marginBottom: '15px',
    },
    wrapitemImg: {
        maxWidth: '7.5rem',
        marginRight: '15px'
    },
    itemImg: {
        width: '100%',
        height: '7.5rem',
        objectFit: 'cover',
    },
    content: {
        flex: 1,
    },

    name: {
        fontSize: '1rem',
        fontWeight: 'bold',
        overflow: 'hidden',
        display: 'block',
        display: '-webkit-box',
        webkitBoxOrient: 'vertical',
        webkitLineClamp: 2,
    },

    price: {
        fontWeight: 'bold',
        fontSize: '1.2rem',
        margin: '8px 0 9px',

        color: 'red',
    }


}))