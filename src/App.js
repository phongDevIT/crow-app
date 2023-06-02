import React, { Suspense } from "react";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Modal from "react-modal";
import LayoutDashboard from "./layout/LayoutDashboard.js";
import CampaignView from "./modules/campaign/CampaignView.js";
import LayoutPayment from "./layout/LayoutPayment.js";
import CheckoutPage from "./Page/CheckoutPage.js";
import ShippingPage from "./Page/ShippingPage.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { authRefreshToken, authUpdateUser } from "./store/auth/auth-slice.js";
import { getToken } from "./config/auth.js";
const SignupPage = lazy(() => import("./Page/SignupPage.js"));
const SigninPage = lazy(() => import("./Page/SigninPage.js"));
const DashboardPage = lazy(() => import("./Page/DashboardPage.js"));
const CampaignPage = lazy(() => import("./Page/CampaignPage.js"));
const StartCampaignPage = lazy(() => import("./Page/StartCampaignPage.js"));
const PaymentPage = lazy(() => import("./Page/PaymentPage.js"));

const customStyles = {
    content: {},
};

Modal.setAppElement("#root");
Modal.defaultStyles = {};
function App() {
    const { user } = useSelector((state) => state.auth);
    console.log("userToken: ", user);
    const dispatch = useDispatch();
    useEffect(() => {
        if (user && user.id) {
            const { access_token } = getToken();
            dispatch(
                authUpdateUser({
                    user: user,
                    accessToken: access_token,
                })
            );
        } else {
            const { refresh_token } = getToken();
            if (refresh_token) {
                dispatch(authRefreshToken(refresh_token));
            } else {
                dispatch(authUpdateUser({}));
            }
        }
    }, [dispatch, user]);
    return (
        <Suspense>
            <Routes>
                <Route element={<LayoutDashboard></LayoutDashboard>}>
                    <Route
                        path="/"
                        element={<DashboardPage></DashboardPage>}
                    ></Route>
                    <Route
                        path="/campaign"
                        element={<CampaignPage></CampaignPage>}
                    ></Route>
                    <Route
                        path="/start-campaign"
                        element={<StartCampaignPage></StartCampaignPage>}
                    ></Route>
                    <Route
                        path="/campaign/:slug"
                        element={<CampaignView></CampaignView>}
                    ></Route>
                </Route>
                <Route element={<LayoutPayment></LayoutPayment>}>
                    <Route
                        path="/checkout"
                        element={<CheckoutPage></CheckoutPage>}
                    ></Route>
                    <Route
                        path="/shipping-address"
                        element={<ShippingPage></ShippingPage>}
                    ></Route>
                    <Route
                        path="/payment"
                        element={<PaymentPage></PaymentPage>}
                    ></Route>
                </Route>
                <Route
                    path="/register"
                    element={<SignupPage></SignupPage>}
                ></Route>
                <Route
                    path="/login"
                    element={<SigninPage></SigninPage>}
                ></Route>
            </Routes>
        </Suspense>
    );
}

export default App;
