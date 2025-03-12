import { ADD_NEW_SALE_FAILURE, ADD_NEW_SALE_REQUEST, ADD_NEW_SALE_SUCCESS, GET_SALES_FAILURE, GET_SALES_REQUEST, GET_SALES_SUCCESS, SET_SALES_PAGE_NO } from '../actions/saleActions';

const initialState = {
    allSales: [],
    loading: false,
    error: null,

    newSaleRes: {},
    creating: false,
    createError: null,

    salesPageNo: 1,
    paginatedData: [],
};

export const salesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SALES_REQUEST:
            return { ...state, loading: true };
        case GET_SALES_SUCCESS:
            return { ...state, loading: false, allSales: action.payload };
        case GET_SALES_FAILURE:
            return { ...state, loading: false, error: action.payload };

        case ADD_NEW_SALE_REQUEST:
            return { ...state, creating: true };
        case ADD_NEW_SALE_SUCCESS:
            return { ...state, creating: false, newSaleRes: action.payload };
        case ADD_NEW_SALE_FAILURE:
            return { ...state, creating: false, createError: action.payload };

        case SET_SALES_PAGE_NO:
            return { ...state, salesPageNo: action.payload };

        default:
            return state;
    }
};
