import React from "react";
import { Link } from "react-router-dom";
import { IconFolder } from "../../../components/icon";

const CompCategory = ({ text = "Education", className = "text-xs" }) => {
    return (
        <Link
            to="/"
            className={`flex items-baseline mb-4 gap-x-3 ${className}`}
        >
            <IconFolder></IconFolder>
            <span className="font-medium text-text3">{text}</span>
        </Link>
    );
};

export default CompCategory;
