import { call, put, takeLatest } from "redux-saga/effects";
import { addNewSaleApi, addNewSalesApi, getSalesApi } from "../../api";
import { GET_PRODUCTS_REQUEST, SET_CLICK_COUNTS } from "../actions/productActions";
import { ADD_NEW_SALE_FAILURE, ADD_NEW_SALE_REQUEST, ADD_NEW_SALE_SUCCESS, ADD_NEW_SALES_REQUEST, ADD_NEW_SALES_SUCCESS, GET_SALES_FAILURE, GET_SALES_REQUEST, GET_SALES_SUCCESS, SET_SHOW_PAY_MODAL, SET_SHOW_SALES_GRID } from "../actions/saleActions";

// Worker Saga: Get Sales
function* getSalesRequest() {
  try {
    const { sales: payload } = yield call(getSalesApi);
    yield put({ type: GET_SALES_SUCCESS, payload });
  } catch (error) {
    const payload = error.response?.data?.message || "Failed to Fetch User";
    yield put({ type: GET_SALES_FAILURE, payload });
  }
}

// Worker Saga: Create a New Sale
function* addNewSaleRequest(action) {
  try {
    const payload = yield call(addNewSaleApi, action.productId, action.payload);
    yield put({ type: ADD_NEW_SALE_SUCCESS, payload });
    yield put({ type: GET_SALES_REQUEST });
    yield put({ type: GET_PRODUCTS_REQUEST });
  } catch (error) {
    const payload = error.response?.data?.message || "Failed to Create Product";
    yield put({ type: ADD_NEW_SALE_FAILURE, payload });
  }
}

// Worker Saga: Create New Sales
function* addNewSalesRequest(action) {
  try {
    const payload = yield call(addNewSalesApi, action.payload);
    yield put({ type: ADD_NEW_SALES_SUCCESS, payload });
    yield put({ type: SET_SHOW_PAY_MODAL, payload: false });
    yield put({ type: SET_SHOW_SALES_GRID, payload: false });
    yield put({ type: SET_CLICK_COUNTS, payload: {} });
    yield put({ type: GET_SALES_REQUEST });
    yield put({ type: GET_PRODUCTS_REQUEST });
  } catch (error) {
    const payload = error.response?.data?.message || "Failed to Create Product";
    yield put({ type: ADD_NEW_SALE_FAILURE, payload });
  }
}

// Watcher Saga: Watches for actions
export function* saleSaga() {
  yield takeLatest(GET_SALES_REQUEST, getSalesRequest);
  yield takeLatest(ADD_NEW_SALE_REQUEST, addNewSaleRequest);
  yield takeLatest(ADD_NEW_SALES_REQUEST, addNewSalesRequest);
}
