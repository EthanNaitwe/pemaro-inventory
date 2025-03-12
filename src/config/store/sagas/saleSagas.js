import { call, put, takeLatest } from "redux-saga/effects";
import { addNewSaleApi, getSalesApi } from "../../api";
import { GET_PRODUCTS_REQUEST } from "../actions/productActions";
import { ADD_NEW_SALE_FAILURE, ADD_NEW_SALE_REQUEST, ADD_NEW_SALE_SUCCESS, GET_SALES_FAILURE, GET_SALES_REQUEST, GET_SALES_SUCCESS } from "../actions/saleActions";

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

// Worker Saga: Create Product
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

// Watcher Saga: Watches for actions
export function* saleSaga() {
  yield takeLatest(GET_SALES_REQUEST, getSalesRequest);
  yield takeLatest(ADD_NEW_SALE_REQUEST, addNewSaleRequest);
}
