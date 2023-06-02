import React from "react";

const CompImage = ({ className = "h-[158px]" }) => {
    return (
        <div className={`${className}`}>
            <img
                src="/compaign.png"
                alt=""
                className="w-full h-full object-cover rounded-2xl"
            />
        </div>
    );
};

export default CompImage;
