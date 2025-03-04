import { call, put, takeLatest } from "redux-saga/effects";
import { createProductApi, getProductsApi } from "../../api";
import { CREATE_PRODUCT_FAILURE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "../actions/productActions";

// Worker Saga: Create Product
function* createProductRequest(action) {
  try {
    const payload = yield call(createProductApi, action.payload);
    yield put({ type: CREATE_PRODUCT_SUCCESS, payload });
    yield put({ type: GET_PRODUCTS_REQUEST });
  } catch (error) {
    const payload = error.response?.data?.message || "Failed to Create Product";
    yield put({ type: CREATE_PRODUCT_FAILURE, payload });
  }
}

// Worker Saga: Get Products
function* getProductsRequest() {
  try {
    const payload = yield call(getProductsApi);
    yield put({ type: GET_PRODUCTS_SUCCESS, payload });
  } catch (error) {
    const payload = error.response?.data?.message || "Failed to Fetch User";
    yield put({ type: GET_PRODUCTS_FAILURE, payload });
  }
}

// Watcher Saga: Watches for actions
export function* productSaga() {
  yield takeLatest(CREATE_PRODUCT_REQUEST, createProductRequest);
  yield takeLatest(GET_PRODUCTS_REQUEST, getProductsRequest);
}
