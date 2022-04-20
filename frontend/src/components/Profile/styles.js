import { makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles((theme) => ({
    titlePage: {
        color: "#033e4b",
    }, 
    form: {
        boxSizing: "border-box",
        padding: "20px 50px",
        margin: 'auto',
        marginTop: '50px',
        marginBottom: '150px',
        borderRadius: 10,
        background: '#fff',
        width: 500,
        minHeight: 350,
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    },
    formHis: {
        boxSizing: "border-box",
        padding: "20px 50px",
        margin: 'auto',
        marginTop: '50px',
        marginBottom: '150px',
        borderRadius: 10,
        background: '#fff',
        width: 300,
        minHeight: 300,
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    },
    hidden:{
        display:'none',
    }
}))