import React, { Component } from 'react';

class FormProduct extends Component {
  constructor() {
    super();
    this.state = {
        code: '',
        description: '',
        price: '',
        quantity: ''
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    const { value, name } = e.target;

    this.setState({
        [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.onAddProduct(this.state);
    this.code.value = '';
    this.description.value = '';
    this.price.value = '';
    this.quantity.value = '';
    this.code.focus();
  }

  render() {
    return (
        <div id="modalFormProduct" className="modal">
            <form className="col s12" onSubmit={this.handleSubmit}>
                <div className="modal-content">
                
                    <h5>{this.props.title}</h5>

                    <div className="row">
                        <div className="row">
                            <div className="input-field col s6">
                                <i className="material-icons prefix">assignment</i>
                                <input id="code" name="code" ref={code => {this.code = code;}} type="text" className="validate" onChange={this.handleInput} />
                                <label htmlFor="code">Code</label>
                            </div>

                            <div className="input-field col s6">
                                <i className="material-icons prefix">mode_edit</i>
                                <textarea id="description" name="description" ref={description => {this.description = description;}} className="materialize-textarea validate" onChange={this.handleInput}></textarea>
                                <label htmlFor="description">Description</label>
                            </div>

                            <div className="input-field col s6">
                                <i className="material-icons prefix">attach_money</i>
                                <input id="price" name="price" ref={price => {this.price = price;}} type="number" className="validate" onChange={this.handleInput} />
                                <label htmlFor="price">Price</label>
                            </div>

                            <div className="input-field col s6">
                                <i className="material-icons prefix">widgets</i>
                                <input id="quantity" name="quantity" ref={quantity => {this.quantity = quantity;}} type="number" className="validate" onChange={this.handleInput} />
                                <label htmlFor="quantity">Quantity</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat red-text left">Cancelar</a>
                    <button type="submit" className="waves-effect waves-green btn-flat indigo-text">Guardar</button>
                </div>
            </form>
        </div>
    );
  }
}

export default FormProduct;
