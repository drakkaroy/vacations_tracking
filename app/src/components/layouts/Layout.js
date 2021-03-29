import React, { useEffect } from 'react';
import Header from './../header/Header';
import Home from './home/Home';
import Footer from './../footer/Footer';
import Checklist from '../checklist/checklist';

const Layout = () => {

    return(
        <>
            <Header />
            <div className="container">
                <Checklist />
            </div>
            <Footer />
        </>
    );
}

export default Layout;