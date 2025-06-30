export const GET_SETTINGS_REQUEST = "GET_SETTINGS_REQUEST";
export const GET_SETTINGS_SUCCESS = "GET_SETTINGS_SUCCESS";
export const GET_SETTINGS_FAILURE = "GET_SETTINGS_FAILURE";

export const SET_SELECTED_SIDEBAR_MENU = 'SET_SELECTED_SIDEBAR_MENU';
export const SET_IS_AUTHENTICATED = 'SET_IS_AUTHENTICATED';
export const SHOW_MOBILE_SIDEBAR = 'SHOW_MOBILE_SIDEBAR';
export const SET_SOW_ADD_PRODUCT = "SET_SOW_ADD_PRODUCT";
export const SET_SALE_BTN_TEXT = "SET_SALE_BTN_TEXT";
export const SET_SALE_FORM_NO = "SET_SALE_FORM_NO";
export const SET_PRODUCT_VED = 'SET_PRODUCT_VED';
export const SET_AUTH_ROUTE = 'SET_AUTH_ROUTE';
export const SET_SALE_VED = 'SET_SALE_VED';
export const LOGOUT_USER = "LOGOUT_USER";

export const getSettings = () => ({ type: GET_SETTINGS_REQUEST });

export const setSelectedSidebarMenu = (payload) => ({ type: SET_SELECTED_SIDEBAR_MENU, payload });
export const setIsAuthenticated = (payload) => ({ type: SET_IS_AUTHENTICATED, payload });
export const setShowAddProduct = (payload) => ({ type: SET_SOW_ADD_PRODUCT, payload });
export const setSaleBtnText = (payload) => ({ type: SET_SALE_BTN_TEXT, payload });
export const setSaleFormNo = (payload) => ({ type: SET_SALE_FORM_NO, payload });
export const showMobSideBar = (payload) => ({ type: SHOW_MOBILE_SIDEBAR, payload });
export const setProductVED = (payload) => ({ type: SET_PRODUCT_VED, payload });
export const setAuthRoute = (payload) => ({ type: SET_AUTH_ROUTE, payload });
export const setSaleVED = (payload) => ({ type: SET_SALE_VED, payload });
export const logoutUser = () => ({ type: LOGOUT_USER });
