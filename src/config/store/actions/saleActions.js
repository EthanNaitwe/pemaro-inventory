export const GET_SALES_REQUEST = "GET_SALES_REQUEST";
export const GET_SALES_SUCCESS = "GET_SALES_SUCCESS";
export const GET_SALES_FAILURE = "GET_SALES_FAILURE";

export const ADD_NEW_SALE_REQUEST = "ADD_NEW_SALE_REQUEST";
export const ADD_NEW_SALE_SUCCESS = "ADD_NEW_SALE_SUCCESS";
export const ADD_NEW_SALE_FAILURE = "ADD_NEW_SALE_FAILURE";

export const SET_SALES_PAGE_NO = "SET_SALES_PAGE_NO";

export const getSalesRequest = () => ({ type: GET_SALES_REQUEST });
export const addNewSaleRequest = (productId, payload) => ({ type: ADD_NEW_SALE_REQUEST, productId, payload });

export const setSalesPageNo = (payload) => ({ type: SET_SALES_PAGE_NO, payload });
