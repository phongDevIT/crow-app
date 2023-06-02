import React from "react";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Label } from "../components/label";
import { Input } from "../components/input";
import FromGroup from "../components/common/FromGroup";
import { Button } from "../components/button";
import { Checkbox } from "../checkbox";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IconEyeToggle } from "../components/icon";
import useToggleValue from "../hooks/useToggleValue";
import { useDispatch } from "react-redux";
import { authRegister } from "../store/auth/auth-slice";
const schema = yup.object({
    name: yup.string().required("This full name already registered "),
    email: yup
        .string()
        .email("Invalid email address")
        .required("This email already registered "),
    password: yup
        .string()
        .required("This password already registered")
        .min(8, "Password must be 8 character "),
});

const SignupPage = () => {
    const {
        handleSubmit,
        control,
        reset,
        formState: { isValid, isSubmitting, errors },
    } = useForm({ mode: "onSubmit", resolver: yupResolver(schema) });
    const dispatch = useDispatch();
    const handleSignUp = async (values) => {
        try {
            dispatch(authRegister(values));
            reset({});
        } catch (error) {
            console.log(error);
        }
    };
    const { value: acceptTerm, handleToggleValue: handleToggleTerm } =
        useToggleValue();
    const { value: showPassword, handleToggleValue: handleTogglePassword } =
        useToggleValue();
    // tái sử dụng lại ở bên hooks useToggleValue
    // const [acceptTerm, setAcceptTerm] = useState(false);
    // const [showPassword, setShowPassword] = useState(false);
    // const handleToggleTerm = () => {
    //     setAcceptTerm(!acceptTerm);
    // };
    // const handleTogglePassword = () => {
    //     setShowPassword(!showPassword);
    // };
    return (
        <LayoutAuthentication heading="SignUp">
            <p className="text-center lg:text-sm text-xs font-normal text-text3 lg:mb-8 mb-6">
                Already have an account?{" "}
                <Link
                    to="/login"
                    className="text-primary font-medium underline"
                >
                    Login
                </Link>
            </p>
            <button className="flex items-center justify-center py-3 gap-x-3 w-full border border-strock rounded-xl text-text2 text-base font-semibold mb-5 dark:text-white dark:border-darkSoft">
                <img srcSet="/icon-google.png" alt="icon-google" className="" />
                <span>Sign up with google</span>
            </button>
            <p className="text-center text-xs lg:text-sm font-normal mb-4 lg:mb-8 text-text2 dark:text-white">
                Or sign up with email
            </p>
            <form onSubmit={handleSubmit(handleSignUp)}>
                <FromGroup>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                        control={control}
                        name="name"
                        placeholder="Jhon Doe"
                        error={errors.name?.message}
                    ></Input>
                </FromGroup>
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
                        placeholder="Create a password"
                        type={`${showPassword ? "text" : "password"}`}
                        error={errors.password?.message}
                    >
                        <IconEyeToggle
                            open={showPassword}
                            onClick={handleTogglePassword}
                        ></IconEyeToggle>
                    </Input>
                </FromGroup>
                <div className="flex justify-start gap-x-5 mb-5">
                    <Checkbox
                        name="term"
                        checked={acceptTerm}
                        onClick={handleToggleTerm}
                    >
                        <p className=" text-xs lg:text-sm text-text2 flex-1 dark:text-text3">
                            I agree to the{" "}
                            <span className="text-secondary underline">
                                Terms of Use
                            </span>{" "}
                            and have read and understand the{" "}
                            <span className="text-secondary underline">
                                Privacy policy.
                            </span>
                        </p>
                    </Checkbox>
                </div>
                <Button className=" w-full" kind="primary" type="submit">
                    Create my account
                </Button>
            </form>
        </LayoutAuthentication>
    );
};

export default SignupPage;
