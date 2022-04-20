import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme)=>({
    contain:{
        marginTop:'60px',
    },
    banner:{
        height:'300px',
        backgroundColor:"#cccccc"
    },
    titlePage:{
        color:'white',
        paddingTop:'20px',
        height:700,
    },
    smalltitlePage:{
        color:'white',
        paddingTop:'50px',
        letterSpacing: '10px',
    },
    root: {
        width: "80%",
        margin: "20px",
    },
    media: {
        height:300,
        width:200,
    },
    title: {
        fontSize: '1rem',
    },
    avatar:{
        fontSize: '18rem',
    }
}))