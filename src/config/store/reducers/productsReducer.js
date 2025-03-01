import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from '../actions/productActions';

const initialState = {
    allProducts: [],
    loading: false,
    error: null,
};

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS_REQUEST:
            return { ...state, loading: true };
        case GET_PRODUCTS_SUCCESS:
            return { ...state, loading: false, allProducts: action.payload };
        case GET_PRODUCTS_FAILURE:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};
