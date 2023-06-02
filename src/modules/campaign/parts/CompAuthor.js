import React from "react";

const CompAuthor = ({ author = "Mahfuzul Nabil" }) => {
    return (
        <div className="flex items-center gap-x-3">
            <img
                src="/author.png"
                alt=""
                className="rounded-full object-cover w-8 h-8"
            />
            <p className="text-text3 text-sx">
                by{" "}
                <span className="text-text2 text-sx font-semibold">
                    {author}
                </span>
            </p>
        </div>
    );
};

export default CompAuthor;
