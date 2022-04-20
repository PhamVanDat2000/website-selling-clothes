import React, { useContext, useEffect, useState } from 'react';
import './styles.scss';
import CartItem from './cartProduct';
import { useSelector } from 'react-redux';
import CartHandle from './CartHandle/index';
function Cart(props) {
  const { showCart, setShowCart } = props
  const closeCart = () => {
    const action = setShowCart(false);
  };
  var cartProducts = useSelector((state) => state.Cart)

  return (
    <div className={showCart ? 'cart active' : 'cart'}>
      <div onClick={closeCart} className='cart__overlay'></div>
      <div className='cart__container'>
        <div>
          <div className='cart__heading'>
            <h2 className='cart__title'>Shopping Cart</h2>
            <div
              onClick={closeCart}
              className={!showCart ? 'cart__close active' : 'cart__close'}>
            </div>
          </div>
          {cartProducts.length > 0 ?
            <div className='cart-items'>
              {cartProducts.map((product) => (
                <CartItem product={product} key={product.id} />
              ))}
            </div>
            :
            <h1>No Product</h1>
          }
        </div>
        <CartHandle />
      </div>
    </div>
  );
}

export default Cart;
