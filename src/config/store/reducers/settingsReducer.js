import { LOGOUT_USER, SET_AUTH_ROUTE, SET_IS_AUTHENTICATED, SET_PRODUCT_VED, SET_SALE_VED, SET_SELECTED_SIDEBAR_MENU, SHOW_MOBILE_SIDEBAR } from '../actions/settingsActions';

const initialState = {
    selectedSidebarMenu: 'product-list',
    mobSideBar: false,
    productVED: '',
    saleVED: '',
    authRoute: 'login',
    isAuthenticated: false,
};

export const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_SIDEBAR_MENU:
            return { ...state, selectedSidebarMenu: action.payload, mobSideBar: false };
        case SET_IS_AUTHENTICATED:
            return { ...state, isAuthenticated: action.payload };
        case SHOW_MOBILE_SIDEBAR:
            return { ...state, mobSideBar: action.payload };
        case SET_PRODUCT_VED:
            return { ...state, productVED: action.payload };
        case SET_AUTH_ROUTE:
            return { ...state, authRoute: action.payload };
        case SET_SALE_VED:
            return { ...state, saleVED: action.payload };
        case LOGOUT_USER:
            localStorage.removeItem("token");
            return { ...state, isAuthenticated: false, authRoute: 'login' };
        default:
            return state;
    }
};
