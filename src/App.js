import React from "react";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
const SignupPage = lazy(() => import("./Page/SignupPage.js"));
const SigninPage = lazy(() => import("./Page/SigninPage.js"));
function App() {
    return (
        <Routes>
            <Route path="/sign-up" element={<SignupPage></SignupPage>}></Route>
            <Route path="/sign-in" element={<SigninPage></SigninPage>}></Route>
        </Routes>
    );
}

export default App;
