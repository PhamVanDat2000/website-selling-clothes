import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: '20px',
        marginTop: '50px',
    },
    title: {
        fontSize: '1.4rem',
        textTransform: 'capitalize',
        marginBottom: '15px',
        height: '3.5rem',
    },
    price: {

        fontWeight: 'bold',
        fontSize: '1.2rem',
        margin: '8px 0 9px',
        color: '#ff514e',
    },
    wrapbtn: {
        marginTop: "30px",
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: '20px',
        borderTop: '1px solid rgba(0, 0, 0, 0.08)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
    },
    modifyBtns: {
        display: 'flex',
        alignItems: 'center',
        minWidth: '12rem',
    },
    btnIncrease: {
        minWidth: '3.5rem',
        height: '3.5rem',
        borderRadius: '50%',
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
    },
    qnt: {
        fontSize: '1.4rem',
        minWidth: '3.5rem',
        textAlign: 'center',
    },
    addStoreBtn: {
        flex: 1,
        margin: '25px 18px 25px 15px',
        borderRadius: 20,
        width: '100%',
    },
    wrapcommit:{
        marginTop:'80px',
        display:'flex',
        flexDirection:'column'
    },
    commit: {
        marginTop:'20px',
        fontSize: '1.4rem',
        marginBottom: '15px',
        display: 'flex',
        alignItems: 'center',
        padding: '4px 7px',
        borderLeft: '3.8px solid red',
    },
    iconCommit: {
        fontSize: '2.2rem',
        marginRight: "8px",

        fill: 'red',
    }
}))