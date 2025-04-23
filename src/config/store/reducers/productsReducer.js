import { ADD_PRODUCT_CATEGORY_FAILURE, ADD_PRODUCT_CATEGORY_REQUEST, ADD_PRODUCT_CATEGORY_SUCCESS, CREATE_PRODUCT_FAILURE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, SET_CLICK_COUNTS, SET_DISPLAY_SALE_CATEGORY, SET_PRODUCTS_PAGE_NO, SET_SELECTED_SALE_CATEGORY, SET_SINGLE_PRODUCT } from '../actions/productActions';

const initialState = {
    allProducts: [],
    loading: false,
    error: null,

    creating: false,
    createError: null,
    createSuccess: {},

    addingCategory: false,
    addCategorySuccess: {},
    addCategoryError: {},

    productsPageNo: 1,
    selectedSaleCategory: "all-items",
    clickCounts: {},
    displaySaleCategory: [],
    singleProduct: {},
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

        case ADD_PRODUCT_CATEGORY_REQUEST:
            return { ...state, addingCategory: true };
        case ADD_PRODUCT_CATEGORY_SUCCESS:
            return { ...state, addingCategory: false, addCategorySuccess: action.payload };
        case ADD_PRODUCT_CATEGORY_FAILURE:
            return { ...state, addingCategory: false, addCategoryError: action.payload };

        case SET_PRODUCTS_PAGE_NO:
            return { ...state, productsPageNo: action.payload };

        case SET_SELECTED_SALE_CATEGORY:
            return { ...state, selectedSaleCategory: action.payload };

        case SET_CLICK_COUNTS:
            return { ...state, clickCounts: action.payload };

        case SET_DISPLAY_SALE_CATEGORY:
            return { ...state, displaySaleCategory: action.payload };

        case SET_SINGLE_PRODUCT:
            return { ...state, singleProduct: action.payload };

        default:
            return state;
    }
};
