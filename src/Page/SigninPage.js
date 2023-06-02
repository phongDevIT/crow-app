import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button, ButtonGoogle } from "../components/button";
import FromGroup from "../components/common/FromGroup";
import { Input } from "../components/input";
import { Label } from "../components/label";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IconEyeToggle } from "../components/icon";
import useToggleValue from "../hooks/useToggleValue";
import { useDispatch } from "react-redux";
import { authLogin } from "../store/auth/auth-slice";
const schema = yup.object({
    email: yup.string().email("").required("This email already registered "),
    password: yup
        .string()
        .required("This password already registered")
        .min(8, "Password must be 8 character "),
});
const SignInPage = () => {
    const {
        handleSubmit,
        control,
        formState: { isValid, isSubmitting, errors },
    } = useForm({ mode: "onSubmit", resolver: yupResolver(schema) });
    const { value: showPassword, handleToggleValue: handleTogglePassword } =
        useToggleValue();
    const dispatch = useDispatch();
    const handleSignIn = (values) => {
        dispatch(authLogin(values));
    };
    return (
        <LayoutAuthentication heading="Welcome Back!">
            <p className="text-center lg:text-sm text-xs font-normal text-text3 lg:mb-8 mb-6">
                Dont have an account? Sign up{" "}
                <Link
                    to="/register"
                    className="text-primary font-medium underline"
                >
                    Register
                </Link>
            </p>
            <ButtonGoogle text="Sign in with google"></ButtonGoogle>
            <form onSubmit={handleSubmit(handleSignIn)}>
                <FromGroup>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                        control={control}
                        name="email"
                        placeholder="example@gmail.com"
                        type="email"
                        error={errors.email?.message}
                    ></Input>
                </FromGroup>
                <FromGroup>
                    <Label htmlFor="password">Password *</Label>
                    <Input
                        control={control}
                        name="password"
                        placeholder="Enter Password"
                        type={`${showPassword ? "text" : "password"}`}
                        error={errors.password?.message}
                    >
                        <IconEyeToggle
                            open={showPassword}
                            onClick={handleTogglePassword}
                        ></IconEyeToggle>
                    </Input>
                </FromGroup>
                <FromGroup>
                    <div className="text-right">
                        <span className="text-primary font-medium text-sm inline-block">
                            Forgot password
                        </span>
                    </div>
                </FromGroup>
                <Button className="w-full" kind="primary" type="submit">
                    Sign in
                </Button>
            </form>
        </LayoutAuthentication>
    );
};

export default SignInPage;
