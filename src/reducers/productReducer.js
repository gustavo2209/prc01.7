import {
    ADD_PRODUCT_SUCCESS,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCTS_SUCCESS,
    FILTER_PRODUCTS,
    REMOVE_PRODUCT_SUCCESS
} from '../constants/action-types';

const initialState = {
    items : [],
    item : {},
    filtered : []
};

export default (state = initialState, {type, payload}) => {
    switch(type){
        case ADD_PRODUCT_SUCCESS:
            return {...state, items: [...state.items, payload]};
        case FETCH_PRODUCT_SUCCESS:
            return {...state, items: payload};
        case FETCH_PRODUCTS_SUCCESS:
            return {...state, items: payload, item: {}, filtered:[]};
        case FILTER_PRODUCTS:
            const value = payload.toLowerCase();
            return {...state, filtered: state.items.filter(({name}) => {
                return name.toLowerCase().includes(value);
            })};
        case REMOVE_PRODUCT_SUCCESS:
            return {...state, items: state.items.filter(product => product.id !== payload)};
        default:
            return state;
    };
};