import React, { Component } from 'react';
import { useParams, withRouter } from 'react-router';
import ProductForm from './ProductForm';
import {createProduct} from '../../actions/productAction';
import {connect} from 'react-redux';

class NewProduct extends Component{

    constructor(props){
        super(props);
    }

    handleSubmit = product => {
        this.props.createProduct(product);
        this.goBack();
    }

    goBack = () => {
        this.props.history.goBack();
    }

    render(){

        const product = {name: '', detail: '', price: '', stock: ''};
        //{JSON.stringify(product, null, 2)}
        return (
            <div class="columns">
                <div className="column is-10 is-offset-1">
                    <h2 className="subtitle is-3 has-text-centered">Crear Producto</h2>
                    <div>
                        <ProductForm title ="Crear Producto" product = {product} submit = {this.handleSubmit} back = {this.goBack}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter (
    connect(null, {createProduct})
    ((props) => (<NewProduct {...props} params={useParams()} />)));