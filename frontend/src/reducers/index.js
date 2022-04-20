// src/reducers/index.js
 
import {combineReducers} from 'redux'
import Cart from './Cart'
import Product from './Product';
 
//Ở đay chúng ta có thể gộp nhiều reducers
// Ở ví dụ này mình chỉ có 1 reducers là noteReducers
export default combineReducers({
    Cart: Cart,
    Product:Product,
})