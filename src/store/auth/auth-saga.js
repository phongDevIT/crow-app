import { takeLatest } from "redux-saga/effects";
import requestAuthRegister, {
    handleAuthLogin,
    handleAuthReFreshToken,
} from "./auth-handle";
import { authLogin, authRefreshToken, authRegister } from "./auth-slice";

export default function* authSaga(action) {
    yield takeLatest(authRegister.type, requestAuthRegister);
    yield takeLatest(authLogin.type, handleAuthLogin);
    yield takeLatest(authRefreshToken.type, handleAuthReFreshToken);
}
