import React, { useEffect, useState } from 'react'
import { useStyles } from './styles'
import Grid from '@mui/material/Grid';

import productApi from '../../../../api/productsApi';
import categoriesApi from './../../../../api/categoriesApi';
import ShowProducts from '../ShowProducts';
import { useDispatch, useSelector } from 'react-redux'


export default function ShopFilters() {
    const [productList, setProductList] = useState([])
    const [categoriesList, setCategoriesList] = useState([])
    const dispatch = useDispatch()
    const classes = useStyles()
    const [nameActive, setNameActive] = useState(null);
    useEffect(() => {
        setNameActive(1)
        const fetchProductList = async () => {
            try {
                const params = { cat_id: 2 };
                const data = await productApi.getAll(params);
                console.log('Fetch products successfully: ', data);
                setProductList(data)
            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
        }

        const fetchCategoriesList = async () => {
            try {
                const data = await categoriesApi.getAll();
                console.log('Fetch categories successfully: ', data);
                setCategoriesList(data)
            } catch (error) {
                console.log('Failed to fetch categories list: ', error);
            }
        }

        fetchProductList();
        fetchCategoriesList();

    }, [])
    const handleshowProduct = (id) => {

        setNameActive(id)
        const fetchProductList = async () => {
            try {
                const params = { cat_id: id };
                const data = await productApi.getAll(params);
                console.log('Fetch products successfully: ', data);
                setProductList(data)
            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
        }
        fetchProductList();
    };
    return (
        <>
            <Grid container spacing={2} className={classes.slide}>
                <Grid item xs={2}>
                    <div className={classes.shopFilters}>
                        <h5 className={classes.shopFiltersTitle}>Categories</h5>
                        <ul className={classes.shopFiltersList}>
                            {categoriesList.length > 0 && categoriesList.map(({ id, title }) => (
                                <li key={id}
                                    onClick={() => handleshowProduct(id)}
                                    className={
                                        id === nameActive
                                            ? (classes.shopFiltersItem, classes.active)
                                            : classes.shopFiltersItem
                                    }>

                                    <span className={classes.itemName} >{title}</span>
                                </li>

                            ))
                            }
                        </ul>
                    </ div>


                </Grid>
                <Grid item xs={10}>
                    {
                        productList.length > 0 ?
                            <ShowProducts productList={productList} /> :
                            <h1>No Product</h1>
                    }
                </Grid>
            </Grid>

        </>
    )
}
