import React from "react";
import CompCategory from "./parts/CompCategory";
import CompDesc from "./parts/CompDesc";
import CompImage from "./parts/CompImage";
import CompMeta from "./parts/CompMeta";
import CompTitle from "./parts/CompTitle";

const CampaignFeature = () => {
    return (
        <div className="flex items-center gap-x-8 w-full max-w-[1048px]">
            <CompImage className="h-[266px] flex-1"></CompImage>
            <div className="flex-1 max-w-[435px]">
                <CompCategory
                    text="Architecture"
                    className="text-sm"
                ></CompCategory>
                <CompTitle className="font-bold text-xl mb-4">
                    Remake - We Make architecture exhibition
                </CompTitle>
                <CompDesc className="mb-6 text-sm">
                    Remake - We Make: an exhibition about architecture's social
                    agency in the face of urbanisation
                </CompDesc>
                <div className="w-full rounded-full bg-[#EFEFEF] h-[5px] mb-6">
                    <div className="w-2/4 h-full rounded-full bg-primary"></div>
                </div>
                <div className="flex items-start justify-between">
                    <CompMeta size="big"></CompMeta>
                    <CompMeta size="big"></CompMeta>
                    <CompMeta size="big"></CompMeta>
                </div>
            </div>
        </div>
    );
};

export default CampaignFeature;
