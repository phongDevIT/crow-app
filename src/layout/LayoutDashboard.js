import React from "react";
import { useForm } from "react-hook-form";
import ReactModal from "react-modal";
import { Outlet } from "react-router-dom";
import { Button } from "../components/button";
import Overlay from "../components/common/Overlay";
import { Input } from "../components/input";
import { Label } from "../components/label";
import DashboardSidebar from "../modules/dashboard/DashboardSidebar";
import DashboardTopbar from "../modules/dashboard/DashboardTopbar";
import CampaignPerk from "../modules/campaign/CampaignPerk";
const LayoutDashboard = ({ children }) => {
    const { control } = useForm();

    return (
        <div className="p-10 bg-lite min-h-screen">
            <ReactModal
                isOpen={false}
                overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center"
                className="modal-content w-full max-w-[521px] bg-white rounded-2xl outline-none p-10 relative max-h-[90vh] overflow-y-auto scroll-hidden"
            >
                <button className="absolute z-10 right-5 top-5 text-text4">
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
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <h2 className="text-1 font-bold text-2xl mb-10 flex items-center justify-center">
                    Back this project
                </h2>
                <Label className="mb-2">Enter the contribute amount</Label>
                <Input
                    control={control}
                    name="amount"
                    placeholder="$10"
                ></Input>
                <div className="mt-3">
                    <span className="text-sm text-text3">
                        Contribution are not associatied with perks
                    </span>
                </div>
                <div className="mt-3">
                    <Button className="bg-primary text-white">Continue</Button>
                </div>
                <div className="mt-[60px]"></div>
                <CampaignPerk></CampaignPerk>
                <CampaignPerk></CampaignPerk>
                <CampaignPerk></CampaignPerk>
            </ReactModal>
            <Overlay></Overlay>
            <DashboardTopbar></DashboardTopbar>
            <div className="flex gap-x-10 items-start">
                <DashboardSidebar></DashboardSidebar>
                <div className="flex-1">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default LayoutDashboard;
