import React, { useState } from "react";

const DashboardSearch = () => {
    const [showSearch, setShowSearch] = useState(false);
    return (
        <div className="relative z-50">
            <div className="bg-white rounded-full shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] p-2 w-full flex items-center">
                <div className="flex-1 px-10">
                    <input
                        type="text"
                        placeholder="Do fundrise now"
                        className="w-full bg-transparent text-sm placeholder:text-text4 text-text1"
                    />
                </div>
                <button className="w-[72px] h-10 bg-primary rounded-3xl text-white items-center justify-center flex flex-shrink-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                    </svg>
                </button>
                {showSearch && (
                    <div className="search-results w-full lg:w-[843px] bg-white absolute top-full left-0 translate-y-5 pb-6 rounded-3xl z-50">
                        <div className="flex justify-between items-center p-3 bg-graySoft rounded-3xl">
                            <h4 className="font-medium text-sm pl-4 underline">
                                See all 10,124 fundraisier
                            </h4>
                            <button className="flex justify-center items-center w-[72px] h-[50px] rounded-lg bg-refSoft text-error">
                                <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0_2323_5749)">
                                        <path
                                            d="M20 5.61143L18.3886 4L12 10.3886L5.61143 4L4 5.61143L10.3886 12L4 18.3886L5.61143 20L12 13.6114L18.3886 20L20 18.3886L13.6114 12L20 5.61143Z"
                                            fill="currentColor"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2323_5749">
                                            <rect
                                                width={24}
                                                height={24}
                                                fill="white"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                        </div>
                        <div className="p-6">
                            <div className="flex-col flex gap-x-5 mb-6">
                                <div className="flex items-center gap-x-5 mb-6">
                                    <img
                                        src="/authorsearch.png"
                                        alt=""
                                        className="w-[50px] h-[50px] object-cover rounded-lg"
                                    />
                                    <div className="flex-1">
                                        <h3 className="text-sm mb-1">
                                            <strong>Education</strong> fund for
                                            Durgham Family
                                        </h3>
                                        <span className="text-sm text-text3">
                                            By Durgham Family
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-x-5 mb-5">
                                    <img
                                        src="/authorsearch2.png"
                                        alt=""
                                        className="w-[50px] h-[50px] object-cover rounded-lg"
                                    />
                                    <div className="flex-1">
                                        <h3 className="text-sm mb-1">
                                            Helping the Leblanc family who lost
                                            their father
                                        </h3>
                                        <span className="text-sm text-text3">
                                            By Rakesh Mahmud
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-x-5 mb-5">
                                    <img
                                        src="/authorsearch3.png"
                                        alt=""
                                        className="w-[50px] h-[50px] object-cover rounded-lg"
                                    />
                                    <div className="flex-1">
                                        <h3 className="text-sm mb-1">
                                            Rylee McCollum's Child{" "}
                                            <strong>Education</strong> Fund
                                        </h3>
                                        <span className="text-sm text-text3">
                                            By Rylee McCollum
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-x-5 mb-5">
                                    <img
                                        src="/authorsearch4.png"
                                        alt=""
                                        className="w-[50px] h-[50px] object-cover rounded-lg"
                                    />
                                    <div className="flex-1">
                                        <h3 className="text-sm mb-1">
                                            Honoring Dr. Nabil Keith Mix Legacy
                                            Fund
                                        </h3>
                                        <span className="text-sm text-text3">
                                            By Dr. Nabil
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-x-5 mb-5">
                                    <img
                                        src="/authorsearch5.png"
                                        alt=""
                                        className="w-[50px] h-[50px] object-cover rounded-lg"
                                    />
                                    <div className="flex-1">
                                        <h3 className="text-sm mb-1">
                                            Mahfuzul Islam Memorial Scholarship
                                            Fund
                                        </h3>
                                        <span className="text-sm text-text3">
                                            By Mahfuzul Islam
                                        </span>
                                    </div>
                                </div>
                                <h3 className="text-sm font-semibold text-text1 mb-5">
                                    Related search
                                </h3>
                                <div className="inline-block mb-2">
                                    <strong>education</strong>
                                    <span className="text-text2 text-sm">
                                        fund
                                    </span>
                                </div>
                                <span className="text-text2 text-sm mb-5">
                                    schoralship fund
                                </span>
                                <div className="inline-block mb-2">
                                    <strong>education</strong>{" "}
                                    <span className="text-text2 text-sm">
                                        and schools fund
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DashboardSearch;
