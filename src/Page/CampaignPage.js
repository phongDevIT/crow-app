import React, { Fragment } from "react";
import Heading from "../components/common/Heading.js";
import CampaignGrid from "../modules/campaign/CampaignGrid.js";
import CampaignFeature from "../modules/campaign/CampaignFeature.js";
import Button from "../components/button/Button.js";
const CampaignPage = () => {
    return (
        <Fragment>
            <div className="mb-10 bg-white rounded-3xl flex items-center justify-between py-8 px-10">
                <div className="flex items-start gap-x-6">
                    <div className="w-[54px] h-[54px] rounded-full bg-secondaryOP flex items-center justify-center">
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 5V19"
                                stroke="white"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M5 12H19"
                                stroke="white"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <div className="flex-1">
                        <h1 className="mb-2 text-text1 font-semibold text-2xl">
                            Create Your Campaign
                        </h1>
                        <p className="inline-block mb-2 text-text3 text-sm">
                            Jump right into our editor and create your first
                            Virtue campaign!
                        </p>
                        <a href="/" className="text-primary text-sm block">
                            Need any help? Learn More...
                        </a>
                    </div>
                </div>
                <Button
                    kind="ghost"
                    type="button"
                    className="px-8 py-3"
                    href="/start-campaign"
                >
                    Create campaign
                </Button>
            </div>
            <Heading number={4}>Your Campaign</Heading>
            <CampaignGrid type="secondary">
                <CampaignFeature></CampaignFeature>
                <CampaignFeature></CampaignFeature>
                <CampaignFeature></CampaignFeature>
                <CampaignFeature></CampaignFeature>
            </CampaignGrid>
            <div className="mt-10 text-center"></div>
            <Button kind="ghost" className="mx-auto">
                <span className="px-8">See more+</span>
            </Button>
        </Fragment>
    );
};

export default CampaignPage;
