import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import TextField from '@material-ui/core/TextField'
import { Button, } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
// validate - yup
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useStyles } from './styles'

import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Password from '../Register/Password';
import loginApi from '../../api/loginApi'


export default function Login(props) {
	const classes = useStyles()
	// form validate
	const validationnForm = Yup.object().shape({
		email: Yup.string()
			.required('Chưa điền thông tin')
			.matches(/^[a-zA-Z][a-zA-Z0-9._-]+@gmail.com$/, 'email is invalid'),

		password: Yup.string()
			.required('Chưa điền thông tin'),
	});

	const formOptions = { resolver: yupResolver(validationnForm) }
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm(formOptions)

	const dispatch = useDispatch()
	const history = useHistory()

	const onSubmit = () => {
		if (Object.keys(errors).length === 0) {
			const postRegister = async () => {
				try {
					const data = await loginApi.PostAll(datasubmit);
					console.log('Fetch categories successfully: ', data);
					if (data.Status == "Success") {
						if (localStorage) {
							console.log(data)
							localStorage.setItem('login', JSON.stringify(data));
						}
						history.push('/home')
					} else {
						alert('Password or username is incorrect')
					}

				} catch (error) {
					console.log('Failed to fetch categories list: ', error);
				}
			}
			postRegister()
		}
	}
	const handleSubmitRes = () => {

		// if (Object.keys(errors).length === 0) {
		// const postRegister = async () => {
		// 	try {
		// 		const data = await loginApi.PostAll(datasubmit);
		// 		console.log('Fetch categories successfully: ', data);
		// 		if(data.Status == "Success"){
		// 			if(localStorage){
		// 				console.log(data)
		// 				localStorage.setItem('login', JSON.stringify(data));
		// 			}
		// 			history.push('/home')
		// 		}else{
		// 			alert('Password or username is incorrect')
		// 		}

		// 	} catch (error) {
		// 		console.log('Failed to fetch categories list: ', error);
		// 	}
		// }
		// postRegister()
		// }
	}

	const watchAllFields = watch();
	const datasubmit = {
		'email': watchAllFields.email,
		'password': watchAllFields.password,
	}
	return (
		<div className={classes.container}>
			<form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
				<Typography className={classes.titlePage} variant="h4" align="center">Login</Typography>

				<TextField classes={{ root: classes.root }} id="standard-basic" label="Email" fullWidth {...register("email")} />
				<Typography variant="body1" color="error">{errors.email?.message}</Typography>


				<Password register={register} errors={errors.password} mes="password" name="Password" />
				<Button classes={{ root: classes.rootButton }} type="submit" variant="contained" color="primary" fullWidth
					onClick={handleSubmitRes}>
					Login
				</Button>
				<Link className={classes.textLink} to="/register">I don't have an account</Link>
			</form>
		</div>
	);
}
