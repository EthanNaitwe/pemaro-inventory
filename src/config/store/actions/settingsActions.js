export const SET_SELECTED_SIDEBAR_MENU = 'SET_SELECTED_SIDEBAR_MENU';
export const SET_IS_AUTHENTICATED = 'SET_IS_AUTHENTICATED';
export const SHOW_MOBILE_SIDEBAR = 'SHOW_MOBILE_SIDEBAR';
export const SET_PRODUCT_VED = 'SET_PRODUCT_VED';
export const SET_AUTH_ROUTE = 'SET_AUTH_ROUTE';
export const SET_SALE_VED = 'SET_SALE_VED';

export const setSelectedSidebarMenu = (payload) => ({ type: SET_SELECTED_SIDEBAR_MENU, payload });
export const setIsAuthenticated = (payload) => ({ type: SET_IS_AUTHENTICATED, payload });
export const showMobSideBar = (payload) => ({ type: SHOW_MOBILE_SIDEBAR, payload });
export const setProductVED = (payload) => ({ type: SET_PRODUCT_VED, payload });
export const setAuthRoute = (payload) => ({ type: SET_AUTH_ROUTE, payload });
export const setSaleVED = (payload) => ({ type: SET_SALE_VED, payload });
