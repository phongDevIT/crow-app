import React from "react";
import { Button } from "../../components/button";

const CampaignPerk = ({ showButton = false }) => {
    return (
        <div>
            <div className="bg-white shadow-1 rounded-lg">
                <img
                    src="/camera1.png"
                    alt=""
                    className="w-full object-cover mb-5"
                />
                <div className="pl-5 pt-5">
                    <span className="rounded-md text-white text-xs font-medium p-2 bg-secondary">
                        Featured
                    </span>
                </div>
                <div className="pl-5 pt-5 mb-3">
                    <p className="text-text1 font-semibold text-xl">
                        Special One Camera
                    </p>
                    <div className="flex items-center gap-x-2">
                        <span className="text-text1 font-semibold text-xl">
                            $2,724 USD{" "}
                        </span>{" "}
                        <span className="text-error font-medium text-sm line-through">
                            $1,504 USD
                        </span>{" "}
                        <span className="text-sm font-medium text-error">
                            {" "}
                            (12% OFF)
                        </span>
                    </div>
                </div>
                <div className="pl-5 pt-5 mb-3">
                    <span className="font-medium text-base text-text1">
                        Estimated Shipping
                    </span>
                    <span className="text-text2 text-sm block">
                        October 2022
                    </span>
                </div>
                <div className="pl-5 pt-5 mb-3">
                    <div className="mb-2">
                        <strong className="text-sm text-text1 font-medium">
                            05
                        </strong>
                        <span className="text-text2 text-sm"> claimed</span>
                    </div>
                    <span className="text-text2 text-sm block pb-3">
                        Ships worldwide
                    </span>
                </div>
            </div>
            {showButton && (
                <div className="mt-6">
                    <Button className="bg-secondary w-full text-white">
                        Get this perk
                    </Button>
                </div>
            )}
        </div>
    );
};

export default CampaignPerk;
