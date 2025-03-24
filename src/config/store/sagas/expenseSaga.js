import { call, put, takeLatest } from "redux-saga/effects";
import { addExpensessApi, getExpensessApi } from "../../api";
import { ADD_NEW_EXPENSE_FAILURE, ADD_NEW_EXPENSE_REQUEST, ADD_NEW_EXPENSE_SUCCESS, GET_EXPENSES_FAILURE, GET_EXPENSES_REQUEST, GET_EXPENSES_SUCCESS, SET_SHOW_CREATE_FORM } from "../actions/expenseActions";

// Worker Saga: Get Expenses
function* getExpensesRequest() {
  try {
    const { data: payload } = yield call(getExpensessApi);
    yield put({ type: GET_EXPENSES_SUCCESS, payload });
  } catch (error) {
    const payload = error.response?.data?.message || "Failed to Fetch User";
    yield put({ type: GET_EXPENSES_FAILURE, payload });
  }
}

// Worker Saga: Add New Expense
function* addExpensesRequest(action) {
  try {
    const { data: payload } = yield call(addExpensessApi, action.payload);
    yield put({ type: ADD_NEW_EXPENSE_SUCCESS, payload });
    yield put({ type: GET_EXPENSES_REQUEST });
    yield put({ type: SET_SHOW_CREATE_FORM, payload: false });
  } catch (error) {
    const payload = error.response?.data?.message || "Failed to Fetch User";
    yield put({ type: ADD_NEW_EXPENSE_FAILURE, payload });
  }
}

// Watcher Saga: Watches for actions
export function* expenseSaga() {
  yield takeLatest(GET_EXPENSES_REQUEST, getExpensesRequest);
  yield takeLatest(ADD_NEW_EXPENSE_REQUEST, addExpensesRequest);
}
