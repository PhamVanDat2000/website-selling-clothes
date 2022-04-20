import React, { useState, useEffect } from 'react'
import Pagination from "@material-ui/lab/Pagination";
import { useStyles } from './styles';
import ShowProduct from './ShowProduct';

import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from "react-alert-template-snackbar-material-ui";
const options = {
    position: positions.TOP_RIGHT,
    timeout: 4000,
    offset: '30px',
    transition: transitions.SCALE
}
export default function ShowProducts(props) {
    const classes = useStyles();
    const [page, setPage] = useState(1);
    const { productList } = props

    const totalRecords = productList.length
    const itemsOnPage = 8
    const pageNum = Math.ceil(totalRecords / itemsOnPage)

    const [productPage, setProductPage] = useState([])
    useEffect(() => {
        setProductPage(productList.slice(0, itemsOnPage))
    }, [productList])
    const handleChange = (event, value) => {
        setPage(value);
        const idx = value
        const pageOfItems = productList.slice((idx - 1) * itemsOnPage, idx * itemsOnPage)
        setProductPage(pageOfItems)
    };

    return (

        <AlertProvider template={AlertTemplate} {...options}>
            <div className={classes.root}>
                <div className={classes.Products} >
                    {
                        productPage.map((item, index) => (
                            <ShowProduct item={item} key={item.id} />
                        ))
                    }
                </div>
                {totalRecords > 8 &&
                    <div className={classes.paging}>
                        <Pagination count={pageNum} page={page} onChange={handleChange} />
                    </div>
                }
            </div>

        </AlertProvider >
    )
}
