import React, { Component } from 'react';
import { useParams, withRouter } from 'react-router';
import ProductForm from './ProductForm';
import {connect} from 'react-redux';
import {updateProduct, fetchProduct} from '../../actions/productAction';

class EditProduct extends Component{

    state = {
        product : {}
    }

    constructor(props){
        super(props);
    }

    async componentDidMount(){
        const { id } = this.props.params;
        this.props.fetchProduct(id);
    }

    handleSubmit = product => {
        this.props.updateProduct(product);
        this.goBack();
    }

    goBack = () => {
        this.props.history.goBack();
    }

    render(){
        const {product}= this.props;
        return(
            <div class="columns">
                <div className="column is-10 is-offset-1">
                    <h2 className="subtitle is-3 has-text-centered">Actualizar Producto</h2>
                    <div>
                        <ProductForm title ="Actualizar Producto" product = {product} submit = {this.handleSubmit} back = {this.goBack}/>
                    </div>
                </div>
            </div>
        );
    };
}

// se usa para poder indicar que se estan recibiendo parametros por la 
// URL y se recuperan para ser posteriormente validados.

export default withRouter (
    (connect((state) => {
        return {
            product : state.products.item
        };
    }, {updateProduct, fetchProduct})
    
    )

    ((props) => (<EditProduct {...props} params={useParams()} />)));