import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_USER_REQUEST, fetchUserSuccess, fetchUserFailure } from '../actions/userActions';

function fetchUserApi() {
  return fetch('https://jsonplaceholder.typicode.com/users/2').then((res) => res.json());
}

function* fetchUserSaga() {
  try {
    const user = yield call(fetchUserApi);
    yield put(fetchUserSuccess(user));
  } catch (error) {
    yield put(fetchUserFailure(error.message));
  }
}

export function* userSaga() {
  yield takeLatest(FETCH_USER_REQUEST, fetchUserSaga);
}
