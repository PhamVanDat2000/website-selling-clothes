import React from 'react'
import Header from './../contain/Header/index';
import Footer from './../contain/Footer/index';
import { useState } from 'react';
import CheckoutContent from './CheckoutContent/index';
import CheckoutSuccess from './CheckoutSuccess/index';
export default function Checkout() {
    const [success, setSuccess] = useState(false)
    return (
        <div>
            <Header />
            <div style={{marginTop:'64px'}}>
            {
                success?
                <CheckoutSuccess/>:
                <CheckoutContent  setSuccess={setSuccess} />
            }
            </div>
            <Footer />
        </div>
    )
}
