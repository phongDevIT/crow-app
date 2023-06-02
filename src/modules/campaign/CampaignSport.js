import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../components/button";
import { Input } from "../../components/input";

const CampaignSport = () => {
    const { control } = useForm();
    return (
        <div>
            <h2 className="text-lg font-semibold text-text1 mb-5">Support</h2>
            <div className="w-full bg-white shadow-1 py-7 px-6 flex flex-col rounded-lg mt-5">
                <p className="text-xl text-text3 font-medium text-center mb-8">
                    Pledge without reward
                </p>
                <Input
                    control={control}
                    name="price"
                    placeholder="$10"
                    // className="text-lg font-medium px-5 py-2 w-full rounded-lg border-strock"
                ></Input>
                <div className="p-5 bg-gray-300 rounded-lg mt-5">
                    <span className="text-text2 mt-5 font-semibold text-sm">
                        Back it because you believe in it.
                    </span>
                    <p className="text-text3 text-sm !mt-5">
                        Support the project for no reward, just because it
                        speaks to you.
                    </p>
                </div>
                <Button className="bg-secondary text-white mt-5 w-full">
                    Continue
                </Button>
            </div>
        </div>
    );
};

export default CampaignSport;
