import React from "react";

const FromGroup = ({ children }) => {
    return (
        <div className="flex flex-col gap-y-2 ld:gap-y-3 mb-4 lg:mb-6">
            {children}
        </div>
    );
};

export default FromGroup;
