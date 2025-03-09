import { call, put, takeLatest } from "redux-saga/effects";
import { createUserApi, getProfileApi, loginUserApi } from "../../api";
import { CREATE_USER_FAILURE, CREATE_USER_REQUEST, CREATE_USER_SUCCESS, GET_PROFILE_FAILURE, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, LOGIN_USER_FAILURE, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS } from "../actions/userActions";
import { SET_IS_AUTHENTICATED } from "../actions/settingsActions";

// Worker Saga: Create User
function* createUserSaga(action) {
  try {
    const newUser = yield call(createUserApi, action.payload);
    yield put({ type: CREATE_USER_SUCCESS, payload: newUser });
  } catch (error) {
    const payload = error.response?.data?.message || "Failed to create User";
    yield put({ type: CREATE_USER_FAILURE, payload });
  }
}

// Worker Saga: Login User
function* loginUserRequest(action) {
  try {
    const tokenData = yield call(loginUserApi, action.payload);
    yield put({ type: LOGIN_USER_SUCCESS, payload: tokenData });
    yield put({ type: SET_IS_AUTHENTICATED, payload: true });
  } catch (error) {
    const payload = error.response?.data?.message || "Failed to Login User";
    yield put({ type: LOGIN_USER_FAILURE, payload });
  }
}

// Worker Saga: Get Profile
function* getProfile() {
  try {
    const { authUser } = yield call(getProfileApi);
    yield put({ type: GET_PROFILE_SUCCESS, payload: authUser });
  } catch (error) {
    const payload = error.response?.data?.message || "Failed to fetch User Profile";
    yield put({ type: GET_PROFILE_FAILURE, payload });
  }
}

// Watcher Saga: Watches for actions
export function* userSaga() {
  yield takeLatest(CREATE_USER_REQUEST, createUserSaga);
  yield takeLatest(LOGIN_USER_REQUEST, loginUserRequest);
  yield takeLatest(GET_PROFILE_REQUEST, getProfile);
}
