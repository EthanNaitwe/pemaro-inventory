export const GET_SALES_REQUEST = "GET_SALES_REQUEST";
export const GET_SALES_SUCCESS = "GET_SALES_SUCCESS";
export const GET_SALES_FAILURE = "GET_SALES_FAILURE";

export const ADD_NEW_SALE_REQUEST = "ADD_NEW_SALE_REQUEST";
export const ADD_NEW_SALE_SUCCESS = "ADD_NEW_SALE_SUCCESS";
export const ADD_NEW_SALE_FAILURE = "ADD_NEW_SALE_FAILURE";

export const ADD_NEW_SALES_REQUEST = "ADD_NEW_SALES_REQUEST";
export const ADD_NEW_SALES_SUCCESS = "ADD_NEW_SALES_SUCCESS";
export const ADD_NEW_SALES_FAILURE = "ADD_NEW_SALES_FAILURE";

export const SET_SALES_PAGE_NO = "SET_SALES_PAGE_NO";
export const SET_SHOW_SALES_GRID = "SET_SHOW_SALES_GRID";
export const SET_SHOW_PAY_MODAL = "SET_SHOW_PAY_MODAL";
export const SET_SALES_TO_DISPLAY = "SET_SALES_TO_DISPLAY";

export const getSalesRequest = () => ({ type: GET_SALES_REQUEST });
export const addNewSaleRequest = (productId, payload) => ({ type: ADD_NEW_SALE_REQUEST, productId, payload });
export const addNewSalesRequest = (payload) => ({ type: ADD_NEW_SALES_REQUEST, payload });
export const setSalesPageNo = (payload) => ({ type: SET_SALES_PAGE_NO, payload });
export const setShowSalesGrid = (payload) => ({ type: SET_SHOW_SALES_GRID, payload });
export const setShowPayModal = (payload) => ({ type: SET_SHOW_PAY_MODAL, payload });
export const setSalesToDisplay = (payload) => ({ type: SET_SALES_TO_DISPLAY, payload });
