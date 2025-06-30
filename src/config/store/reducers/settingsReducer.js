import { GET_SETTINGS_FAILURE, GET_SETTINGS_REQUEST, GET_SETTINGS_SUCCESS, LOGOUT_USER, SET_AUTH_ROUTE, SET_IS_AUTHENTICATED, SET_PRODUCT_VED, SET_SALE_BTN_TEXT, SET_SALE_FORM_NO, SET_SALE_VED, SET_SELECTED_SIDEBAR_MENU, SET_SOW_ADD_PRODUCT, SHOW_MOBILE_SIDEBAR } from '../actions/settingsActions';

const initialState = {
    selectedSidebarMenu: 'product-list',
    mobSideBar: false,
    productVED: '',
    saleVED: '',
    authRoute: 'login',
    isAuthenticated: false,

    fetching: false,
    systemSettings: {},
    sysError: null,

    saleBtnText: 'Next',
    saleFormNo: 'form-one',
};

export const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SETTINGS_REQUEST:
            return { ...state, fetching: true };
        case GET_SETTINGS_SUCCESS:
            return { ...state, fetching: false, systemSettings: action.payload };
        case GET_SETTINGS_FAILURE:
            return { ...state, fetching: false, sysError: action.payload };

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
        case SET_SOW_ADD_PRODUCT:
            return { ...state, showAddProduct: action.payload };
        case SET_SALE_BTN_TEXT:
            return { ...state, saleBtnText: action.payload };
        case SET_SALE_FORM_NO:
            return { ...state, saleFormNo: action.payload };
        case SET_SALE_VED:
            return { ...state, saleVED: action.payload };
        case LOGOUT_USER:
            localStorage.removeItem('token');
            return { ...initialState };
        default:
            return state;
    }
};
