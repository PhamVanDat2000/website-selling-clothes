import React, { useEffect, useState } from 'react'
import Header from './../contain/Header/index';
import Footer from './../contain/Footer/index';
import { useSelector } from 'react-redux';
import productApi from './../../api/productsApi';
import Grid from '@mui/material/Grid';
import { Container } from '@material-ui/core';
import ImageProduct from './component/imageProduct/index';
import DetailInfo from './component/detailInfo/index';
import Typography from '@material-ui/core/Typography';

export default function Product() {
    const [productItem, setProductItem] = useState({})
    const { id } = useSelector(state => state.Product)
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const params = { id: id };
                const data = await productApi.getAll(params);
                console.log('Fetch product successfully: ', data);
                setProductItem(data)
            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
        }
        fetchProduct()
    }, [id])


    return (
        <div>
            <Header />
            <div style={{ display: "block", marginTop: '100px' }}>
                <Container>
                    <section className='detail__container'>
                        <Grid container spacing={6}>
                            <Grid item xs={12} md={6}>
                                <ImageProduct productItem={productItem} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <DetailInfo productItem={productItem} />
                            </Grid>
                        </Grid>
                    </section>
                </Container>
                <div style={{padding:'20px 140px 20px'}}>
                    <Typography variant="h6" gutterBottom component="div">
                        Description: {productItem.description}
                    </Typography>

                </div>
            </div>
            <Footer />
        </div>
    )
}
