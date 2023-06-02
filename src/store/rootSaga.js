import authSaga from "./auth/auth-saga";
import {} from "redux-saga";
import { all, fork } from "redux-saga/effects";
export default function* rootSaga() {
    yield all([fork(authSaga)]);
}
