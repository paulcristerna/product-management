import React, { Component } from 'react';

import firebase from 'firebase';
import { DB_CONFIG } from '../../config/config';
import 'firebase/database';

import FormProduct from './formProduct.jsx';

class Products extends Component {
    constructor() {
        super();
        this.state = {products: []}

        this.handleAddProduct = this.handleAddProduct.bind(this);
        this.removeProduct = this.removeProduct.bind(this);

        this.app = firebase.initializeApp(DB_CONFIG);
        this.db = this.app.database().ref().child('products')
    }

    componentDidMount() {
        const { products } = this.state;
        this.db.on('child_added', snap => {
            products.push({
                id: snap.key,
                code: snap.val().code,
                description: snap.val().description,
                price: snap.val().price,
                quantity: snap.val().quantity
            })
            this.setState({products});
        });

        this.db.on('child_removed', snap => {
            for(let i = 0; i < products.length; i++) {
                if(products[i].id == snap.key) {
                    products.splice(i, 1);
                }
            }
            this.setState({products});
        });
    }

    handleAddProduct(product) {
        this.db.push().set({
            code: product.code, 
            description: product.description, 
            price: product.price, 
            quantity: product.quantity
        });
    }

    removeProduct(index) {
        if(window.confirm('Are you sure you mant to delete it?')) {
            this.db.child(index).remove();
        }
    }

    render() {
        return (
            <div className="products">
                <div className="container">
                    <div className="section">
                        <div className="row">
                            <div className="col s12 m12">
                                <h4>{this.props.title}</h4>
                                <table className="highlight">
                                    <thead>
                                        <tr>
                                        <th>Code</th>
                                        <th>Description</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        this.state.products && this.state.products.map((item, i) => 
                                            <tr key={i}>
                                                <td>{item.code}</td>
                                                <td>{item.description}</td>
                                                <td>${parseFloat(item.price).toFixed(2)}</td>
                                                <td>{parseFloat(item.quantity).toFixed(2)}</td>
                                                <td>
                                                    <a className="waves-effect waves-light btn red" onClick={this.removeProduct.bind(this, item.id)}><i className="material-icons">delete</i></a>
                                                </td>
                                            </tr>
                                        )
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <a className="btn-floating btn-large waves-effect waves-light indigo modal-trigger" href="#modalFormProduct"><i className="material-icons">add</i></a>

                    <FormProduct title="Add Product" onAddProduct={this.handleAddProduct} />
                    
                </div>
            </div>
        );
    }
}

export default Products;
