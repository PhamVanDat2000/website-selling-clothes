import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
	root: {
		'& label.Mui-focused': {
			color: 'white',
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: 'white',
		},

		display: 'flex',
		flexWrap: 'wrap',
	},
	withoutLabel: {
		marginTop: theme.spacing(3),
	},
	textField: {
		width: 450,
	},
}));
export default function Password(props) {
	const { register, errors, mes, name } = props
	const classes = useStyles();
	const [values, setValues] = React.useState({
		password: '',
	});

	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};
	return (
		<div className={classes.root}>
			<div>
				<FormControl className={clsx(classes.margin, classes.textField)}>
					<InputLabel htmlFor="standard-adornment-password">{name}</InputLabel>
					<Input
						id="standard-adornment-password"
						type={values.showPassword ? 'text' : 'password'}
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
								>
									{values.showPassword ? <Visibility /> : <VisibilityOff />}
								</IconButton>
							</InputAdornment>
						}
						{...register(mes)}
					/>
				</FormControl>
				<Typography variant="body1" color="error">{errors?.message}</Typography>

			</div>
		</div>
	);
}
