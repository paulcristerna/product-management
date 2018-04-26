import React, { Component } from 'react';
import FormProduct from './formProduct';
import { products } from '../../products.json';

class Products extends Component {
    constructor() {
        super();
        this.state = {
            products
        }

        this.handleAddProduct = this.handleAddProduct.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
    }

    handleAddProduct(product) {
        this.setState({
            products: [...this.state.products, product]
        })
    }

    removeProduct(index) {
        if(window.confirm('Are you sure you mant to delete it?')) {

            this.setState({
                products: this.state.products.filter((e, i) => {
                    return i != index
                })
            })
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
                                                    <a className="waves-effect waves-light btn red" onClick={this.removeProduct.bind(this, i)}><i className="material-icons">delete</i></a>
                                                </td>
                                            </tr>
                                        )
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <a className="btn-floating btn-large waves-effect waves-light indigo right modal-trigger" href="#modalFormProduct"><i className="material-icons">add</i></a>

                </div>

                <FormProduct title="Add Product" onAddProduct={this.handleAddProduct} />
                
            </div>
        );
    }
}

export default Products;
