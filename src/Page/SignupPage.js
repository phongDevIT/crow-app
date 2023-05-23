import React from "react";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Label } from "../components/label";
import { Input } from "../components/input";

const SignupPage = () => {
    const { handleSubmit, control } = useForm({});
    return (
        <LayoutAuthentication heading="SignUp">
            <p className="text-center lg:text-sm text-xs font-normal text-text3 lg:mb-8 mb-6">
                Already have an account?{" "}
                <Link
                    to="/sign-in"
                    className="text-primary font-medium underline"
                >
                    Sign in
                </Link>
            </p>
            <button className="flex items-center justify-center py-3 gap-x-3 w-full border border-strock rounded-xl text-text2 text-base font-semibold mb-5">
                <img srcSet="/icon-google.png" alt="icon-google" className="" />
                <span className="text-">Sign up with google</span>
            </button>
            <p className="text-center text-xs lg:text-sm font-normal mb-4 lg:mb-8 text-text2">
                Or sign up with email
            </p>
            <form className="flex flex-col gap-y-3">
                <Label>Full Name</Label>
                <Input control={control} name="name"></Input>
            </form>
        </LayoutAuthentication>
    );
};

export default SignupPage;
