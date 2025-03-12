import { all } from 'redux-saga/effects';
import { userSaga } from './userSaga';
import { productSaga } from './productSaga';
import { saleSaga } from './saleSagas';

export default function* rootSaga() {
    yield all([userSaga(), productSaga(), saleSaga()]);
}
