import React, { useState, useEffect } from 'react'
import profileApi from '../../api/profileApi'
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';
import Header from './../contain/Header/index';
import Footer from './../contain/Footer/index';
import Button from '@material-ui/core/Button';
import historyOrderApi from '../../api/historyOrderApi';
export default function Profile() {
    const classes = useStyles()
    const [profile, setProfile] = useState(null)
    const [historyCart, setHistoryCart] = useState(null)
    const [show, setShow] = useState(false)

    console.log(profile)
    useEffect(() => {
        const dataLogin = JSON.parse(localStorage.getItem('login'))
        const getProfile = async () => {
            try {
                const params = { account_id: dataLogin.Info.id, auth_token: dataLogin.auth_token.auth_token }
                const res = await profileApi.getProfile(params);
                console.log('Fetch profile successfully: ', res);
                setProfile({
                    name: res.Info.name,
                    email: res.Info.email,
                    country: res.Info.country,
                    city: res.Info.city,
                    phone: res.Info.phone,
                    address: res.Info.address,
                })
            } catch (error) {
                console.log('Failed to fetch profile: ', error);
            }
        }
        const getHistory = async () => {
            try {
                const params = { customer_id: dataLogin.Info.id, auth_token: dataLogin.auth_token.auth_token }
                const res = await historyOrderApi.getHistoryOrder(params);
                console.log('Fetch profile successfully: ', res);
                setHistoryCart(res)
            } catch (error) {
                console.log('Failed to fetch profile: ', error);
            }
        }
        getHistory()
        getProfile();
    }, [])
    const handleHistory = () => {
        setShow(!show)
    }
    return (
        <div>
            <Header />

            <div style={{ marginTop: '110px' }}>
                {
                    profile &&
                    <div className={classes.form}>
                        <Typography className={classes.titlePage} variant="h4" align='center'>Profile</Typography>
                        <Typography className={classes.titlePage} variant="h6">Name:{profile.name}</Typography>
                        <Typography className={classes.titlePage} variant="h6">Email:{profile.email}</Typography>
                        <Typography className={classes.titlePage} variant="h6">Phone:{profile.phone}</Typography>
                        <Typography className={classes.titlePage} variant="h6">Country:{profile.country}</Typography>
                        <Typography className={classes.titlePage} variant="h6">City:{profile.city}</Typography>
                        <Typography className={classes.titlePage} variant="h6">Address:{profile.address}</Typography>
                        <Button variant="outlined"
                            onClick={handleHistory}
                        >Transaction history</Button>
                    </div>
                }
                {
                    historyCart &&
                    <div className={show ? classes.contain : classes.hidden}>
                        {historyCart.map(({ order_id, product_id, quantity, status, order_date, total_amount }) => (
                            <div className={classes.formHis} key={order_id}>
                                <Typography className={classes.titlePage} variant="h6">Order ID:{order_id}</Typography>
                                <Typography className={classes.titlePage} variant="h6">Product ID:{product_id}</Typography>
                                <Typography className={classes.titlePage} variant="h6">Quantity:{quantity}</Typography>
                                <Typography className={classes.titlePage} variant="h6">Status:{status}</Typography>
                                <Typography className={classes.titlePage} variant="h6">Order:{order_date}</Typography>
                                <Typography className={classes.titlePage} variant="h6">Total amount:{total_amount}</Typography>

                            </div>
                        ))
                        }

                    </div>
                }
            </div>
            <Footer />
        </div>
    )
}
