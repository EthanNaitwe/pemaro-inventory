export const GET_EXPENSES_REQUEST = "GET_EXPENSES_REQUEST";
export const GET_EXPENSES_SUCCESS = "GET_EXPENSES_SUCCESS";
export const GET_EXPENSES_FAILURE = "GET_EXPENSES_FAILURE";

export const ADD_NEW_EXPENSE_REQUEST = "ADD_NEW_EXPENSE_REQUEST";
export const ADD_NEW_EXPENSE_SUCCESS = "ADD_NEW_EXPENSE_SUCCESS";
export const ADD_NEW_EXPENSE_FAILURE = "ADD_NEW_EXPENSE_FAILURE";

export const SET_SALES_PAGE_NO = "SET_SALES_PAGE_NO";
export const SET_SHOW_CREATE_FORM = "SET_SHOW_CREATE_FORM";
export const SET_EXPENSES_TO_DISPLAY = "SET_EXPENSES_TO_DISPLAY";

export const getAllExpenses = () => ({ type: GET_EXPENSES_REQUEST });
export const addExpenseRequest = (payload) => ({ type: ADD_NEW_EXPENSE_REQUEST, payload });

export const setSalesPageNo = (payload) => ({ type: SET_SALES_PAGE_NO, payload });
export const setShowCreateForm = (payload) => ({ type: SET_SHOW_CREATE_FORM, payload });
export const setExpensesToDisplay = (payload) => ({ type: SET_EXPENSES_TO_DISPLAY, payload });
