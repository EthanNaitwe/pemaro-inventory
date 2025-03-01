import { call, put, takeLatest } from "redux-saga/effects";
import { getProductsApi } from "../../api";
import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "../actions/productActions";

// Worker Saga: Create User
function* getProductsRequest() {
  try {
    const payload = yield call(getProductsApi);
    yield put({ type: GET_PRODUCTS_SUCCESS, payload });
  } catch (error) {
    const payload = error.response?.data?.message || "Failed to create User";
    yield put({ type: GET_PRODUCTS_FAILURE, payload });
  }
}

// Watcher Saga: Watches for actions
export function* productSaga() {
  yield takeLatest(GET_PRODUCTS_REQUEST, getProductsRequest);
}
