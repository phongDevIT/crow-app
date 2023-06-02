import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/button";
import DashboardFunc from "./DashboardFunc";
import DashboardSearch from "./DashboardSearch";

const DashboardTopbar = () => {
    return (
        <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-x-10 flex-1">
                <Link to="/" className="inline-block">
                    <img srcSet="/logo.png 2x" alt="crow app" />
                </Link>
                <div className="w-full max-w-[458px]">
                    <DashboardSearch></DashboardSearch>
                </div>
            </div>
            <div className="flex items-center gap-x-10 flex-1 justify-end">
                <span className="text-text5">
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
                            d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                        />
                    </svg>
                </span>
                <DashboardFunc></DashboardFunc>
                <Button
                    className="px-7"
                    type="button"
                    href="/start-campaign"
                    kind="secondary"
                >
                    Start a campaign
                </Button>
                <img
                    srcSet="/logo.png 2x"
                    alt="crow app"
                    className="rounded-full object-cover"
                />
            </div>
        </div>
    );
};

export default DashboardTopbar;
