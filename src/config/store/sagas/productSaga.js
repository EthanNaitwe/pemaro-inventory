import { call, put, takeLatest } from "redux-saga/effects";
import { addCategoryApi, addProductApi_, createProductApi, getProductsApi } from "../../api";
import { ADD_PRODUCT_CATEGORY_FAILURE, ADD_PRODUCT_CATEGORY_REQUEST, ADD_PRODUCT_CATEGORY_SUCCESS, CREATE_PRODUCT_FAILURE, CREATE_PRODUCT_FAILURE_, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_REQUEST_, CREATE_PRODUCT_SUCCESS, CREATE_PRODUCT_SUCCESS_, GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "../actions/productActions";
import { SET_PRODUCT_VED } from "../actions/settingsActions";
// import { SET_PRODUCT_VED } from "../actions/settingsActions";

// Worker Saga: Create Product
function* createProductRequest(action) {
  try {
    const payload = yield call(createProductApi, action.payload);
    yield put({ type: CREATE_PRODUCT_SUCCESS, payload });
    yield put({ type: GET_PRODUCTS_REQUEST });
    // yield put({ type: SET_PRODUCT_VED, payload: '' });
  } catch (error) {
    const payload = error.response?.data?.message || "Failed to Create Product";
    yield put({ type: CREATE_PRODUCT_FAILURE, payload });
  }
}

// New
// Worker Saga: Add Product
function* addProductRequest(action) {
  try {
    const { products: payload } = yield call(addProductApi_, action.payload);
    yield put({ type: CREATE_PRODUCT_SUCCESS_, payload });
    yield put({ type: SET_PRODUCT_VED, payload: "" });
  } catch (error) {
    const payload = error.response?.data?.message || "Failed to Fetch User";
    yield put({ type: CREATE_PRODUCT_FAILURE_, payload });
  }
}

// Worker Saga: Get Products
function* getProductsRequest() {
  try {
    const { products: payload } = yield call(getProductsApi);
    yield put({ type: GET_PRODUCTS_SUCCESS, payload });
  } catch (error) {
    const payload = error.response?.data?.message || "Failed to Fetch User";
    yield put({ type: GET_PRODUCTS_FAILURE, payload });
  }
}

// Worker Saga: Get Products
function* addCategoryRequest(action) {
  try {
    const payload = yield call(addCategoryApi, action.productId, action.payload);
    yield put({ type: ADD_PRODUCT_CATEGORY_SUCCESS, payload });
    yield put({ type: GET_PRODUCTS_REQUEST });
  } catch (error) {
    const payload = error.response?.data?.message || "Failed to Fetch User";
    yield put({ type: ADD_PRODUCT_CATEGORY_FAILURE, payload });
  }
}

// Watcher Saga: Watches for actions
export function* productSaga() {
  yield takeLatest(CREATE_PRODUCT_REQUEST, createProductRequest);
  yield takeLatest(GET_PRODUCTS_REQUEST, getProductsRequest);
  yield takeLatest(CREATE_PRODUCT_REQUEST_, addProductRequest);
  yield takeLatest(ADD_PRODUCT_CATEGORY_REQUEST, addCategoryRequest);
}
