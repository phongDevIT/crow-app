import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../common/ErrorComponent";

const Input = (props) => {
    const { control, name, type } = props;
    const { field } = useController({
        control,
        name,
        defaultValue: "",
    });
    return (
        <div className="relative">
            <input
                type={type}
                className="w-full py-4 px-6 border border-strock rounded-xl text-sm font-medium text-text1 placeholder:text-text4"
                {...field}
            />
        </div>
    );
};
Input.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    control: PropTypes.any.isRequired,
};
export default withErrorBoundary(Input, {
    FallbackComponent: ErrorComponent,
});
