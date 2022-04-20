import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import { useAlert } from "react-alert";
import { useHistory } from 'react-router';
import { PATH_IMG } from './../../../../../env';
const useStyles = makeStyles({
    root: {
        width: "20%",
        margin: "20px",
    },
    media: {
        height:300,
    },
    title: {
        fontSize: '1rem',
    },
    price: {
        fontSize: '1.5rem',
        color: '#fc544c',
    }
});

export default function ShowProduct(props) {
    const { item } = props
    const classes = useStyles();
    const dispatch = useDispatch()
    const handleAddCard = (item) => {
        dispatch({
            type: "ADD_ITEM",
            payload: {
                id: item.id,
                title: item.title,
                price: item.price,
                images_url: item.images_url,
                qnt: 1
            }
        })
    }
    const history = useHistory()
    const alert = useAlert()
    const dispath = useDispatch()
    const toProductPage = () => {
        dispatch({
            type: "PRODUCT_SHOW",
            payload: item.id
        })
        history.push('/Product')
    }
    return (
        <Card className={classes.root}>
            <CardActionArea onClick={toProductPage}>
                <CardMedia
                    className={classes.media}
                    image={`${PATH_IMG}/${item.images_url[0]}`}
                    title={item.title}
                />
                <CardContent style={{height:"100px"}}>
                    <Typography className={classes.title} gutterBottom variant="h5" component="h5" align="center">
                        {item.title}
                    </Typography>
                    <Typography className={classes.price} gutterBottom variant="h6" component="h6" align="center">
                        {item.price} VND
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions style={{ justifyContent: "center" }}>
                <Button variant="contained" color="secondary" onClick={() => {
                    handleAddCard(item)
                    alert.success("Thêm sản phẩm thành công!");
                }}>
                    Add to Cart
                </Button>
            </CardActions>
        </Card>
    );
}