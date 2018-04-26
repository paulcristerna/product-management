import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './modules/navigation/';
import Products from './modules/products/';

ReactDOM.render(
    <div className="main">
        <Navigation title="Product Management" /> 
        <Products title="List of Products" />
    </div>,
    document.getElementById('root')
);
