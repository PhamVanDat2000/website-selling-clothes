import React from "react";
import { Button } from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useDispatch } from "react-redux";

import "./CartItem.scss";
import { PATH_IMG } from './../../../env';

function CartItem(props) {
    const dispatch = useDispatch()
    const { product } = props;
    const { id, title, price, images_url, qnt } = product;
    const onHandleModify = (type) => {
        dispatch({
            type:type,
            payload: product
        })
    };

    const onHandleRemove = () => {
        dispatch({
            type:"DELETE_ITEM",
            payload: product
        })
    };

    return (
        <div id={id} className="cart-item">
            <div className="cart-item__img">
                <img src={`${PATH_IMG}/${images_url[0]}`} alt="Cart product" />
            </div>

            <div className="cart-item__content">
                <div className="cart-item__name">{title}</div>
                <div className="cart-item__price">{price} VND</div>
                <div className="cart-item__handle">
                    <Button onClick={() => onHandleModify("DECREASE")}>
                        <RemoveIcon />
                    </Button>
                    <span className="cart-item__qnt">{qnt}</span>
                    <Button onClick={() => onHandleModify("INCREASE")}>
                        <AddIcon />
                    </Button>
                </div>
            </div>

            <Button
                onClick={() => onHandleRemove()}
                className="cart-item__rm"
            >
                <DeleteOutlineIcon />
            </Button>
        </div>
    );
}


export default CartItem;