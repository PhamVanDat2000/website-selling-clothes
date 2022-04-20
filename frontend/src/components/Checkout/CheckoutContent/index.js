import React from 'react'
import TextField from '@mui/material/TextField';
import { Grid, Button } from '@mui/material';
import { useStyles } from './styels';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector, useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography'

import { PATH_IMG } from './../../../env';
import { useHistory } from 'react-router';
import orderApi from './../../../api/orderApi';

export default function CheckoutContent(props) {
    const { setSuccess } = props
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()
    const cart = useSelector(state => state.Cart)
    const totalCash = cart.reduce((total, current) => {
        return total + current.price * current.qnt
    }, 0)
    const products = cart.map((element) => {
        return {
            "product_id": element.id,
            "quantity": element.qnt
        }
    })
    const handleFinish = () => {
        const dataLogin = JSON.parse(localStorage.getItem('login'))

        if (dataLogin) {
            if(totalCash>0){
            const data = {
                "customer_id": dataLogin.Info.id,
                "auth_token": dataLogin.auth_token.auth_token,
                "amount": totalCash,
                "products": products
            }
            const postOrder = async () => {
                try {
                    const res = await orderApi.PostOrder(data);
                    console.log('Fetch products successfully: ', res);
                } catch (error) {
                    console.log('Failed to fetch product list: ', error);
                }
            }
            postOrder();
            setSuccess(true)
        }else{
            alert("You don't have any product in your cart")
        }
        }
        else {
            history.push("/login")
        }
    }
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>

                <Grid item xs={12}>
                    <div className={classes.form}>
                        <Typography className={classes.titleCart} variant="h4" align="center" >Cart</Typography>
                        {cart.length > 0 ?
                            <div>
                                {cart.map(({ id, title, price, images_url, qnt }) => (
                                    <div key={id} className={classes.cartItems}>
                                        <div className={classes.wrapitemImg}>
                                            <img className={classes.itemImg} src={`${PATH_IMG}/${images_url[0]}`} alt="Cart product" />
                                        </div>

                                        <div className="cart-item__content">
                                            <div className={classes.name}>Product Name: {title}</div>
                                            <div className={classes.price}>Price :{price} VND</div>
                                            <div className={classes.name}>Quatity: {qnt}</div>
                                        </div>

                                    </div>
                                ))}
                                <div className={classes.price}>Total: {totalCash}</div>

                            </div>
                            :
                            <h1>No Product</h1>
                        }
                        <Button variant="contained" color="secondary" type="submit"
                            onClick={handleFinish}
                            style={{
                                display: "block",
                                margin: 'auto',
                                marginTop: "30px",
                                borderRadius: 35,
                                backgroundColor: "#21b6ae",
                                padding: "18px 36px",
                                fontSize: "18px"
                            }}>
                            <ShoppingCartIcon />
                            <span>Checkout</span>
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}