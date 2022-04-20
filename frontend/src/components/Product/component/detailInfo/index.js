import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';
import Button from '@material-ui/core/Button';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { useDispatch } from 'react-redux';
export default function DetailInfo(props) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [qnt, setQnt] = useState(1)
    const { productItem } = props
    const { title, price, status, description } = productItem
    const handleIncreaseQnt = () => {
        setQnt(qnt + 1)
    }
    const handleDecreaseQnt = () => {
        if (qnt > 1) {
            setQnt(qnt - 1)
        }
    }
    const onHandleAddToStore = () => {
        dispatch({
            type: "ADD_MUL_ITEMS",
            payload: { ...productItem, qnt: qnt }
        })
    }
    return (
        <div className={classes.container}>
            <Typography className={classes.title} variant="h4" >Product Name: {title}</Typography>
            <Typography className={classes.price} variant="h4" >Price: {price} VND</Typography>
            {status == 'stocking' ?
                <span>Status: stocking</span> :
                <span>Status: stocking</span>
            }

            <div className={classes.wrapbtn}>
                <div className={classes.modifyBtns}>
                    <Button
                        onClick={handleDecreaseQnt}
                        className={classes.btnIncrease}>
                        <RemoveIcon />
                    </Button>

                    <span className={classes.qnt}>{qnt}</span>
                    <Button
                        onClick={handleIncreaseQnt}
                        className={classes.btnIncrease}>
                        <AddIcon />
                    </Button>
                </div>

                <div>
                    <Button variant="contained" color="secondary" className={classes.addStoreBtn}
                        onClick={() => onHandleAddToStore()}
                    >
                        <AddShoppingCartOutlinedIcon />
                        <span>Add to cart</span>
                    </Button>
                </div>
            </div>
            <div className={classes.wrapcommit}>
                <div className={classes.commit}>
                    <LocalShippingIcon className={classes.iconCommit} />
                    <span>Free ship nội thành TP Hồ Chí Minh</span>
                </div>
                <div className={classes.commit}>
                    <ScheduleIcon className={classes.iconCommit} />
                    <span>Tới tay người dùng trong vòng 24 tiếng</span>
                </div>
            </div>
        </div>
    )
}
