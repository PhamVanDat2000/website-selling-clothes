import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: "column",
        flexWrap: 'wrap',
        paddingTop: '100px',
        paddingBottom: '100px',
        marginTop:'100px',
    },
    icon: {
        
        transform: 'scale(3.8)',
        color: "#52df89",
        margin: 'auto',
        marginBottom:"50px",
        animation: 'showShadow 0.75s ease-out forwards 0.75s'
    },
    text: {
        textAlign:'center',
        animation: 'leftToRight 0.75s ease 1.65s forwards',
    }
}))