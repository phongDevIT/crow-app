import React from "react";
import { NavLink } from "react-router-dom";
import { IconCompaign, IconDashboard } from "../../components/icon";
import IconLightDark from "../../components/icon/IconLightDark";
import IconPayment from "../../components/icon/IconPayment";
import IconProfile from "../../components/icon/IconProfile";
import IconWithDraw from "../../components/icon/IconWithDraw";
import IconLogout from "../../components/icon/IconLogout";
const sideBarLink = [
    {
        icon: <IconDashboard></IconDashboard>,
        title: "Dashboard",
        url: "/",
    },
    {
        icon: <IconCompaign></IconCompaign>,
        title: "Campaign",
        url: "/campaign",
    },
    {
        icon: <IconPayment></IconPayment>,
        title: "Payment",
        url: "/payment",
    },
    {
        icon: <IconWithDraw></IconWithDraw>,
        title: "WithDraw",
        url: "/withDraw",
    },
    {
        icon: <IconProfile></IconProfile>,
        title: "Profile",
        url: "/profile",
    },
    {
        icon: <IconLogout></IconLogout>,
        title: "Logout",
        url: "/logout",
        onclick: () => {},
    },
    {
        icon: <IconLightDark></IconLightDark>,
        title: "Light/Dark",
        url: "/darkmore",
        onclick: () => {},
    },
];
const DashboardSidebar = () => {
    const navLinkClass =
        "flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-lg md:mb-8 last:mt-auto last:bg-white last:shadow-sdprimary";
    return (
        <div
            className={`w-full md:w-[76px] rounded-3xl bg-white shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] px-[14px] py-10 flex flex-col flex-shrink-0`}
        >
            {sideBarLink.map((link) => (
                <NavLink
                    to={link.url}
                    key={link.title}
                    className={({ isActive }) =>
                        isActive
                            ? `${navLinkClass} text-primary bg-primary bg-opacity-20`
                            : `${navLinkClass} text-text4`
                    }
                >
                    <span>{link.icon}</span>
                    <span className="md:hidden">{link.title}</span>
                </NavLink>
            ))}
        </div>
    );
};

export default DashboardSidebar;
