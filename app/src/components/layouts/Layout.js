import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  import Header from './../header/Header';
  import Home from './home/Home';
  import Footer from './../footer/Footer';

const Layout = () => {

    return(
        <Router>
            <Header />
            <div className="container">
                content here ...
                <Home />
            </div>
            <Footer />
        </Router>
    );
}

export default Layout;