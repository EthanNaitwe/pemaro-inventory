import { SET_SELECTED_SIDEBAR_MENU, SET_PRODUCT_VED, SET_SALE_VED, SHOW_MOBILE_SIDEBAR } from "../actions/settingsActions";

const initialState = {
    selectedSidebarMenu: 'index',
    mobSideBar: false,
    productVED: '',
    saleVED: '',
};

export const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_SIDEBAR_MENU:
            return { ...state, selectedSidebarMenu: action.payload, mobSideBar: false };
        case SHOW_MOBILE_SIDEBAR:
            return { ...state, mobSideBar: action.payload };
        case SET_PRODUCT_VED:
            return { ...state, productVED: action.payload };
        case SET_SALE_VED:
            return { ...state, saleVED: action.payload };
        default:
            return state;
    }
};
