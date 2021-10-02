import {
    ADD_PRODUCT_SUCCESS,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCTS_SUCCESS,
    FILTER_PRODUCTS,
    REMOVE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_SUCCESS
} from '../constants/action-types';

import {ProductService} from '../modules/services/ProductService';

export const createProduct = product => {
    return dispatch => {ProductService.createProduct(product)
        .then(response => {
            dispatch({type: ADD_PRODUCT_SUCCESS, payload:response.data});
        }); 
    };
};

export const fetchProduct = (id) => {
    return dispatch => {
        const response = ProductService.getProduct(id);
        dispatch({type: FETCH_PRODUCT_SUCCESS, payload:response.data});
    }
}

export const removeProduct = (id) => {
    return dispatch => {
        const response = ProductService.removeProduct(id);
        dispatch({type: REMOVE_PRODUCT_SUCCESS, payload:response.data});
    }
}

export const updateProduct = product => {
    return dispatch => {ProductService.updateProduct(product)
        .then(response => {
            dispatch({type: UPDATE_PRODUCT_SUCCESS, payload:response.data});
        }); 
    };
};

export const fetchProducts = () => {
    return dispatch => {
        const response = ProductService.getProducts();
        dispatch({type: FETCH_PRODUCTS_SUCCESS, payload:response.data});
    }
}

export const filterProducts = (searchValue) => ({
    type: FILTER_PRODUCTS, 
    payload: searchValue
});