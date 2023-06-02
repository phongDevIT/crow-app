import React from "react";
import CompAuthor from "./parts/CompAuthor";
import CompCategory from "./parts/CompCategory";
import CompDesc from "./parts/CompDesc";
import CompImage from "./parts/CompImage";
import CompMeta from "./parts/CompMeta";
import CompTitle from "./parts/CompTitle";

const CampaignItem = () => {
    return (
        <div>
            <CompImage></CompImage>
            <div className="px-5 py-4">
                <CompCategory></CompCategory>
                <CompTitle>Powered Kits Learning Boxes</CompTitle>
                <CompDesc>
                    Fun, durable and reusable boxes with eco-friendly options.
                </CompDesc>
                <div className="flex items-start justify-between gap-x-5 mb-5">
                    <CompMeta></CompMeta>
                    <CompMeta></CompMeta>
                </div>
                <CompAuthor></CompAuthor>
            </div>
        </div>
    );
};

export default CampaignItem;
