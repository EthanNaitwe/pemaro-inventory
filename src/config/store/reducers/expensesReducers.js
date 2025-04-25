import { ADD_NEW_EXPENSE_FAILURE, ADD_NEW_EXPENSE_REQUEST, ADD_NEW_EXPENSE_SUCCESS, GET_EXPENSES_FAILURE, GET_EXPENSES_REQUEST, GET_EXPENSES_SUCCESS, SET_EXPENSES_TO_DISPLAY, SET_SHOW_CREATE_FORM } from '../actions/expenseActions';

const initialState = {
    allExpenses: [],
    loading: false,
    fetchError: null,

    creating: false,
    createError: null,

    showCreateForm: false,
    expensesToDisplay: [],
};

export const expensesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EXPENSES_REQUEST:
            return { ...state, loading: true };
        case GET_EXPENSES_SUCCESS:
            return { ...state, loading: false, allExpenses: action.payload };
        case GET_EXPENSES_FAILURE:
            return { ...state, loading: false, error: action.payload };

        case ADD_NEW_EXPENSE_REQUEST:
            return { ...state, creating: true };
        case ADD_NEW_EXPENSE_SUCCESS:
            return { ...state, creating: false };
        case ADD_NEW_EXPENSE_FAILURE:
            return { ...state, creating: false, error: action.payload };

        case SET_SHOW_CREATE_FORM:
            return { ...state, showCreateForm: action.payload };

        case SET_EXPENSES_TO_DISPLAY:
            return { ...state, expensesToDisplay: action.payload };

        default:
            return state;
    }
};
