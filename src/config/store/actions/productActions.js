export const CREATE_PRODUCT_REQUEST = "CREATE_PRODUCT_REQUEST";
export const CREATE_PRODUCT_SUCCESS = "CREATE_PRODUCT_SUCCESS";
export const CREATE_PRODUCT_FAILURE = "CREATE_PRODUCT_FAILURE";

export const GET_PRODUCTS_REQUEST = "GET_PRODUCTS_REQUEST";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_FAILURE = "GET_PRODUCTS_FAILURE";

export const ADD_PRODUCT_CATEGORY_REQUEST = "ADD_PRODUCT_CATEGORY_REQUEST";
export const ADD_PRODUCT_CATEGORY_SUCCESS = "ADD_PRODUCT_CATEGORY_SUCCESS";
export const ADD_PRODUCT_CATEGORY_FAILURE = "ADD_PRODUCT_CATEGORY_FAILURE";

export const SET_PRODUCTS_PAGE_NO = 'SET_PRODUCTS_PAGE_NO';
export const SET_SELECTED_SALE_CATEGORY = 'SET_SELECTED_SALE_CATEGORY';
export const SET_DISPLAY_SALE_CATEGORY = 'SET_DISPLAY_SALE_CATEGORY';
export const SET_CLICK_COUNTS = 'SET_CLICK_COUNTS';
export const SET_SINGLE_PRODUCT = 'SET_SINGLE_PRODUCT';

export const createProductRequest = (payload) => ({ type: CREATE_PRODUCT_REQUEST, payload });
export const addProductCategoryRequest = (productId, payload) => ({ type: ADD_PRODUCT_CATEGORY_REQUEST, productId, payload });
export const getProductsRequest = () => ({ type: GET_PRODUCTS_REQUEST });
export const setSingleProduct = (payload) => ({ type: SET_SINGLE_PRODUCT, payload });

export const setProductsPageNo = (payload) => ({ type: SET_PRODUCTS_PAGE_NO, payload });
export const setSelectedSaleCategory = (payload) => ({ type: SET_SELECTED_SALE_CATEGORY, payload });
export const setDisplaySaleCategory = (payload) => ({ type: SET_DISPLAY_SALE_CATEGORY, payload });
export const setClickCounts = (payload) => ({ type: SET_CLICK_COUNTS, payload });
export const clearCreateError = () => ({ type: CREATE_PRODUCT_FAILURE, payload: null });