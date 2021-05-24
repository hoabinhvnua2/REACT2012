import { call, delay, fork, put, takeLatest } from "@redux-saga/core/effects";
// import userApi from "../../services/user-service";
import { authApi } from "../../services/authService";
import { authAction } from "../actions/Auth";

export function* signIn(params) {
//   delay(3000);
  try {
    const res = yield call(authApi.signIn, params.payload);
    yield put({
      type: authAction.SIGN_IN_SUCCESS,
      payload: res,
    });
  } catch (error) {
    yield put({
        type: authAction.SIGN_IN_ERR,
        payload: error,
      });
  }
}

export function* watchSignIn() {
  yield takeLatest(authAction.SIGN_IN, signIn);
}

export default function* reward() {
    yield fork(watchSignIn);
}
