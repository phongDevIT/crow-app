import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/common/ErrorComponent";
const LayoutAuthentication = (props) => {
    const { children, heading = "" } = props;
    return (
        <div className="w-full min-h-screen bg-lite dark:bg-darkbg p-10 relative isolate">
            <img
                src="/ellipse.png"
                alt=""
                className="hidden lg:block absolute bottom-0 right-0 left-0 pointer-events-none z-[-1]"
            />
            <Link to="/" className="inline-block mb-5 lg:mb-16">
                <img srcSet="/Logo.png 2x" alt="crow-app" />
            </Link>
            <div className="w-full max-w-[556px] bg-white dark:bg-darkSecondary rounded-xl px-5 py-8 lg:px-16 lg:py-12 mx-auto">
                <h1 className="font-semibold text-lg mb-1 text-text1 text-center lg:mb-3 lg:text-xl dark:text-white">
                    {heading}
                </h1>
                {children}
            </div>
        </div>
    );
};
LayoutAuthentication.propTypes = {
    heading: PropTypes.string,
    children: PropTypes.node,
};
export default withErrorBoundary(LayoutAuthentication, {
    FallbackComponent: ErrorComponent,
});
