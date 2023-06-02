import React from "react";

const IconEyeToggle = ({ open = false, onClick = () => {} }) => {
    if (open)
        return (
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={onClick}
            >
                <path
                    d="M3 12C3 12 6.27273 5 12 5C17.7273 5 21 12 21 12C21 12 17.7273 19 12 19C6.27273 19 3 12 3 12Z"
                    stroke="#A2A2A8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                    stroke="#A2A2A8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        );
    return (
        <svg
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClick}
        >
            <path
                d="M11.7345 9.85501C11.5098 10.1129 11.2388 10.3198 10.9378 10.4632C10.6367 10.6067 10.3116 10.6839 9.98207 10.6901C9.6525 10.6963 9.32513 10.6315 9.0195 10.4994C8.71387 10.3674 8.43623 10.1709 8.20315 9.92164C7.97007 9.67238 7.78632 9.37546 7.66287 9.0486C7.53942 8.72174 7.47879 8.37164 7.48461 8.01918C7.49042 7.66672 7.56256 7.31913 7.69672 6.99713C7.83087 6.67513 8.0243 6.38533 8.26545 6.14501M14.86 13.1975C13.4614 14.3376 11.7584 14.9693 10 15C4.27273 15 1 8.00001 1 8.00001C2.01773 5.97167 3.42929 4.19955 5.14 2.80252L14.86 13.1975ZM8.28182 1.21002C8.845 1.06904 9.4216 0.998568 10 1.00002C15.7273 1.00002 19 8.00001 19 8.00001C18.5033 8.99367 17.911 9.92915 17.2327 10.7913L8.28182 1.21002Z"
                stroke="#A2A2A8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default IconEyeToggle;
