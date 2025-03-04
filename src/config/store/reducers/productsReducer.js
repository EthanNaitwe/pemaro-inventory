import { CREATE_PRODUCT_FAILURE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from '../actions/productActions';

const initialState = {
    allProducts: [],
    loading: false,
    error: null,

    creating: false,
    createError: null,
    createSuccess: {},
};

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS_REQUEST:
            return { ...state, loading: true };
        case GET_PRODUCTS_SUCCESS:
            return { ...state, loading: false, allProducts: action.payload };
        case GET_PRODUCTS_FAILURE:
            return { ...state, loading: false, error: action.payload };

        case CREATE_PRODUCT_REQUEST:
            return { ...state, creating: true };
        case CREATE_PRODUCT_SUCCESS:
            return { ...state, creating: false, createSuccess: action.payload };
        case CREATE_PRODUCT_FAILURE:
            return { ...state, creating: false, createError: action.payload };

        default:
            return state;
    }
};
