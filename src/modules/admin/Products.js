import React, { Component } from 'react';
import SearchProduct from './SearchProduct';
import Product from './Product';
import { Link, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {removeProduct, filterProducts, fetchProducts} from '../../actions/productAction';

class Products extends Component {

    constructor(props){
        super(props);
        this.state = {
            titles : ['#', 'Nombre', 'Detalle', 'Precio', 'Stock', 'Acciones']
        }
    }

    componentDidMount (){
        this.props.getProducts();
    }

    handleDelete = id => {
        this.props.removeProduct(id);
    }

    handleSearchProduct = searchValue => {
        this.props.filterProducts(searchValue);
    }

    render(){

        const {titles} = this.state;
        const products = this.props.products;
        const filteredProducts = this.props.filtered.length ? this.props.filtered : products;

        return (
            <div className="columns" style={{marginTop:'20px'}}>
                <div className="column is-10 is-offset-1">
                    <div className="level">
                        <div className="level-left">
                            <h2 className="subtitle is-3">
                                Lista de Productos
                            </h2>
                        </div>
                        <div className="level-right">
                            <Link to="/admin/products/new" className="button is-link">Nuevo Producto</Link>
                        </div>
                    </div>

                    { filteredProducts.length > 0 ? (
                        <>

                            <SearchProduct handleSearchProduct = {this.handleSearchProduct}/>

                            <table className="table is-striped is-hoverable is-bordered is-fullwidth">
                                <thead>
                                    <tr>
                                        {
                                            titles.map((title, index) => (
                                                <th key={index}>
                                                    {title}
                                                </th>
                                            ))
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        filteredProducts.map((product, index) => (
                                            <Product product = {product} key={product.id} index={index} handleDelete={this.handleDelete} />
                                        ))
                                    }
                                </tbody>
                            </table>
                        </>
                    ) : <p className="has-next-centered">NO HAY PRODUCTOS, PROCEDA A CREAR UNO</p>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        product : state.products.items,
        filtered : state.products.filtered
    }
}

const mapsDispatchToProps = dispatch => {
    return {
        getProducts : () => {dispatch(fetchProducts());},
        removeProduct : (id) => {dispatch(removeProduct(id));},
        filterProducts : (searchValue) => {dispatch(filterProducts(searchValue));}
    }
}

export default withRouter(connect(mapStateToProps, mapsDispatchToProps) (Products));