import { fork } from 'redux-saga/effects'
import logIn from './Auth';
import user from './User';


export default function* rootSaga() {
    yield fork(user)
    yield fork(logIn)
}