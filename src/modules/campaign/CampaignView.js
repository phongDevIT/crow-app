import React, { Fragment } from "react";
import { Button } from "../../components/button";
import CampaignGrid from "./CampaignGrid";
import CampaignItem from "./CampaignItem";
import CampaignPerk from "./CampaignPerk";
import CampaignSport from "./CampaignSport";
import CompCategory from "./parts/CompCategory";
import CompDesc from "./parts/CompDesc";
import CompImage from "./parts/CompImage";
import CompMeta from "./parts/CompMeta";
import CompTitle from "./parts/CompTitle";
import CompViewAuthor from "./parts/CompViewAuthor";

const CampaignView = () => {
    return (
        <Fragment>
            <div
                className="h-[140px] rounded-3xl bg-cover bg-no-repeat bg-center bg-opacity-40 flex items-center justify-center text-white object-cover mb-10"
                style={{
                    backgroundImage: `linear-gradient(179.14deg, rgba(32, 18, 63, 0)  -7.14%, #000000 87.01%), url(/placeHolder.png)`,
                }}
            >
                <h1 className="font-bold text-4xl">Education</h1>
            </div>
            <div className="flex items-start gap-x-10 w-full max-w-[1066px]">
                <div className="flex-1 ">
                    <CompImage className="h-[398px] mb-8"></CompImage>
                    <div className="flex justify-center gap-x-5">
                        {Array(4)
                            .fill(0)
                            .map((item, index) => (
                                <img
                                    src="/camera.png"
                                    alt=""
                                    className="object-cover h-[89px] w-[70px] rounded-lg"
                                />
                            ))}
                    </div>
                </div>
                <div className="flex-1 max-w-[443px]">
                    <CompCategory
                        text="Architecture"
                        className="text-sm"
                    ></CompCategory>
                    <CompTitle className="font-bold text-xl mb-4">
                        Remake - We Make architecture exhibition
                    </CompTitle>
                    <CompDesc className="mb-6 text-sm">
                        Remake - We Make: an exhibition about architecture's
                        social agency in the face of urbanisation
                    </CompDesc>
                    <CompViewAuthor></CompViewAuthor>
                    <div className="w-full rounded-full bg-[#EFEFEF] h-[5px] mb-10">
                        <div className="w-2/4 h-full rounded-full bg-primary"></div>
                    </div>
                    <div className="flex items-start justify-between mb-4">
                        <CompMeta size="big"></CompMeta>
                        <CompMeta size="big"></CompMeta>
                        <CompMeta size="big"></CompMeta>
                    </div>
                    <div className="flex justify-center items-center">
                        <Button className="text-white bg-primary w-full text-base font-semibold">
                            Back this project
                        </Button>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center mt-[100px] bg-white p-5 shadow-sm rounded-lg mb-6">
                <div className="flex items-center gap-x-[60px] text-sm font-medium text-text3 cursor-pointer">
                    <span className="text-secondary">Campgain</span>
                    <span>Risks</span>
                    <span>FAQ</span>
                    <span>Updates</span>
                    <span>Comments</span>
                </div>
                <Button className="text-white bg-primary">
                    Back this project
                </Button>
            </div>
            <div className="grid grid-cols-[1.3fr,1.5fr] gap-x-[124px] mb-[70px]">
                <div>
                    <h2 className="text-text1 text-lg font-semibold">Story</h2>
                    <div className="bg-white w-full mb-5"></div>
                </div>
                <div>
                    <CampaignSport></CampaignSport>
                    <div className="mb-[60px]"></div>
                    <div className="flex flex-col gap-y-[30px]">
                        <CampaignPerk></CampaignPerk>
                        <CampaignPerk></CampaignPerk>
                        <CampaignPerk></CampaignPerk>
                    </div>
                </div>
            </div>
            <h2 className="mb-10 text-text1 text-xl font-bold">
                You also may be interested in
            </h2>
            <CampaignGrid>
                <CampaignItem></CampaignItem>
                <CampaignItem></CampaignItem>
                <CampaignItem></CampaignItem>
                <CampaignItem></CampaignItem>
            </CampaignGrid>
        </Fragment>
    );
};

export default CampaignView;
