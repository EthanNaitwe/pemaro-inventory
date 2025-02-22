import { SET_SELECTED_SIDEBAR_MENU, SET_PRODUCT_VED } from "../actions/settingsActions";

const initialState = {
    selectedSidebarMenu: 'index',
    productVED: '',
};

export const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_SIDEBAR_MENU:
            return { ...state, selectedSidebarMenu: action.payload };
        case SET_PRODUCT_VED:
            return { ...state, productVED: action.payload };
        default:
            return state;
    }
};
