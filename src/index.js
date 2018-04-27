import React from 'react';
import ReactDOM from 'react-dom';
import Header from './modules/header/header.jsx';
import Footer from './modules/footer/footer.jsx';
import Products from './modules/content/products/products.jsx';

ReactDOM.render(
    <div className="main">
        <Header title="Product Management" /> 
        <Products title="List of Products" />
        <Footer title="Product Management" link="https://github.com/paulcristerna/product-management" />
    </div>,
    document.getElementById('root')
);
