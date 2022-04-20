import React, { useState } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import StoreMallDirectoryIcon from "@material-ui/icons/StoreMallDirectory";
import "./styles.scss";
import { Button } from '@material-ui/core';
import { useHistory } from "react-router";
import { useSelector, useDispatch } from 'react-redux';

function CartHandle() {
  const cart = useSelector(state => state.Cart)
  const totalCash = cart.reduce((total, current) => {
    return total + current.price * current.qnt
  }, 0)
  const dispatch = useDispatch()
  const history = useHistory()
  const handleCheckout = () => {
    const isLogin = localStorage.getItem('login')
    if (isLogin) {
      history.push("/checkout")
    }
    else {
      history.push("/checkout")
    }
  }
  const handleContinue = () => {
    dispatch({
      type: "DELETE_CART",
      payload: {}
    })
  }
  return (
    <div className="cart-handle">
      <div className="cart-handle__total">
        <span className="cart-handle__txt">Total</span>
        <span className="cart-handle__price">{totalCash} VND</span>
      </div>

      <div className="cart-handle__btns">
        <Button variant="contained" color="secondary" className="cart-handle__btn"
          onClick={handleCheckout}>
          <ShoppingCartIcon />
          <span>Checkout</span>
        </Button>
        <Button variant="contained" className="cart-handle__btn"
          onClick={handleContinue}>
          <StoreMallDirectoryIcon />
          <span>Cancel</span>
        </Button>
      </div>
    </div >
  );
}
export default CartHandle;
