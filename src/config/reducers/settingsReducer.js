import { SET_SELECTED_SIDEBAR_MENU } from "../actions/settingsActions";

const initialState = {
    selectedSidebarMenu: 'index'
};

export const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_SIDEBAR_MENU:
            return { ...state, selectedSidebarMenu: action.payload };;
        default:
            return state;
    }
};
