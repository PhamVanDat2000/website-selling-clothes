import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import TextField from '@material-ui/core/TextField'
import { Button, } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
// validate - yup
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useStyles } from './styles'
import Password from './Password'

import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import registerApi from '../../api/registerAPI'


export default function Register(props) {
    const classes = useStyles()
    const history = useHistory()
    // form validate
    const validationnForm = Yup.object().shape({
        firstName: Yup.string()
            .required("Chưa điền thông tin"),
        email: Yup.string()
            .required('Chưa điền thông tin')
            .matches(/^[a-zA-Z][a-zA-Z0-9._-]+@gmail.com$/, 'email is invalid'),
        phoneNumber: Yup.string()
            .required('Chưa điền thông tin')
            .matches(/^[0-9]+$/, 'phone number must be a number'),
        address: Yup.string()
            .required("Chưa điền thông tin"),
        city: Yup.string()
            .required("Chưa điền thông tin"),
        country: Yup.string()
            .required("Chưa điền thông tin"),
        password: Yup.string()
            .required('Chưa điền thông tin'),
        confirmPassword: Yup.string()
            .required('Chưa điền thông tin')
            .test('password match', 'Confirm Password must be same as password', function (value) {
                return this.parent.password === value
            })
        // .oneOf([Yup.ref('password')], 'Confirm Password must be same as password')
    });

    const formOptions = { resolver: yupResolver(validationnForm) }
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm(formOptions)


    const onSubmit = () => {
        const postRegister = async () => {
            try {
                const data = await registerApi.PostAll(datasubmit);
                console.log('Fetch categories successfully: ', data);
            } catch (error) {
                console.log('Failed to fetch categories list: ', error);
            }
        }
        if (Object.keys(errors).length === 0) {
            postRegister()
            alert("Sign up success. Go to login")
            history.push('/login')
        }
    }

    const watchAllFields = watch();
    const datasubmit = {
        'name': watchAllFields.firstName,
        'city': watchAllFields.city,
        'country': watchAllFields.country,
        'email': watchAllFields.email,
        'phone': watchAllFields.phoneNumber,
        'address': watchAllFields.address,
        'password': watchAllFields.password,
    }
    return (
        <div className={classes.container}>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <Typography className={classes.titlePage} variant="h4" align="center">Sign Up</Typography>

                <TextField classes={{ root: classes.root }} id="standard-basic" label="Name" fullWidth {...register("firstName")} />
                <Typography variant="body1" color="error">{errors.firstName?.message}</Typography>


                <TextField classes={{ root: classes.root }} id="standard-basic" label="Phone Number" fullWidth {...register("phoneNumber")} />
                <Typography variant="body1" color="error">{errors.phoneNumber?.message}</Typography>


                <TextField classes={{ root: classes.root }} id="standard-basic" label="Email" fullWidth {...register("email")} />
                <Typography variant="body1" color="error">{errors.email?.message}</Typography>

                <TextField classes={{ root: classes.root }} id="standard-basic" label="City" fullWidth {...register("city")} />
                <Typography variant="body1" color="error">{errors.city?.message}</Typography>

                <TextField classes={{ root: classes.root }} id="standard-basic" label="Country" fullWidth {...register("country")} />
                <Typography variant="body1" color="error">{errors.country?.message}</Typography>

                <TextField classes={{ root: classes.root }} id="standard-basic" label="Address" fullWidth {...register("address")} />
                <Typography variant="body1" color="error">{errors.address?.message}</Typography>


                <Password register={register} errors={errors.password} mes="password" name="Password" />
                <Password register={register} errors={errors.confirmPassword} mes="confirmPassword" name="Confirm Password" />
                <Button classes={{ root: classes.rootButton }} type="submit" variant="contained" color="primary" fullWidth
                    >
                    Sign Up
                </Button>
                <Link className={classes.textLink} to="/login">I already have an account</Link>
            </form>
        </div>
    );
}
