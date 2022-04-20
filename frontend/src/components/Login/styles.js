import { makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles((theme) => ({
	// focus input
	root: {
		'& label.Mui-focused': {
			color: 'white',
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: 'white',
		},
		marginBottom:'20px',
	},
	container: {
		background: "#363636",
		width: '100%',
		minHeight: '100vh',
		display: 'flex',

	},
	form: {
		boxSizing: "border-box",
		padding: "20px 50px",
		margin: 'auto',
		borderRadius: 10,
		background: '#9bdbeb',
		width: 550,
		minHeight: 200,
	},
	inputform: {
		padding: "10px 20px",
	},
	// hobby style
	formControl: {
		minWidth: 300,
	},
	labelHobby: {
		fontSize: "1rem",
		marginTop: theme.spacing(2),
	},

	// button
	rootButton: {
		marginTop: theme.spacing(2),
		background: "#033e4b",
		'&:hover': {
			background: "#215d6a",
		}
	},
	// text title
	titlePage: {
		color: "#033e4b",
	},
	textLink: {
        fontSize: '1rem',
        color: '#fc544c',
		cursor:'pointer',
		textAlign:'center',
	}
}));