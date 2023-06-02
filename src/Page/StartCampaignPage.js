import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import CampaignAddNew from "../modules/campaign/CampaignAddNew";

const StartCampaignPage = () => {
    const { user } = useSelector((state) => state.auth);
    // console.log("user: ", user);
    const navigate = useNavigate();
    useEffect(() => {
        if (!user || !user.email) {
            navigate("/login");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);
    return (
        <Fragment>
            <CampaignAddNew></CampaignAddNew>
        </Fragment>
    );
};

export default StartCampaignPage;
