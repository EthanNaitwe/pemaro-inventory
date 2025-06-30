import { call, put, takeLatest } from "redux-saga/effects";
import { getSettingsApi } from "../../api";
import { GET_SETTINGS_FAILURE, GET_SETTINGS_REQUEST, GET_SETTINGS_SUCCESS } from "../actions/settingsActions";

// Worker Saga: Get All Settings
function* getSettingsRequest() {
  try {
    const { settings: payload } = yield call(getSettingsApi);
    yield put({ type: GET_SETTINGS_SUCCESS, payload });
  } catch (error) {
    const payload = error.response?.data?.message || "Failed to Fetch Settings";
    yield put({ type: GET_SETTINGS_FAILURE, payload });
  }
}

// Watcher Saga: Watches for actions
export function* settingSagas() {
  yield takeLatest(GET_SETTINGS_REQUEST, getSettingsRequest);
}
