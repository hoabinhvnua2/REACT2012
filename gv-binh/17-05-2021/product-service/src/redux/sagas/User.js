import { call, delay, fork, put, takeLatest } from "@redux-saga/core/effects";
// import userApi from "../../services/user-service";
import { authApi } from "../../services/authService";
import { userAction } from "../actions/User";

// export function* getUsers() {
//   try {
//     const resp = yield call(userApi.getUser, {});
//     yield put({
//       type: userAction.GET_USER_SUCCESS,
//       payload: resp,
//     });
//   } catch (error) {
//     yield put({
//       type: userAction.GET_USER_ERR,
//       payload: error,
//     });
//   }
// }

export function* registerUser(params) {
//   delay(3000);
  try {
    const res = yield call(authApi.signUp, params.payload);
    yield put({
      type: userAction.REGISTER_USER_SUCCESS,
      payload: res,
    });
  } catch (error) {
    yield put({
        type: userAction.REGISTER_USER_ERR,
        payload: error,
      });
  }
}

// export function* watchGetUsers() {
//   yield takeLatest(userAction.GET_USER, getUsers);
// }

export function* watchRegistorUser() {
  yield takeLatest(userAction.REGISTER_USER, registerUser);
}

export default function* reward() {
  //   yield fork(watchGetUsers);
    yield fork(watchRegistorUser);
}
