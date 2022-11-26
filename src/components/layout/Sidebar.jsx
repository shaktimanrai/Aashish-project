import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { MdPermDataSetting } from "react-icons/md";
import { Link } from "react-router-dom";
import { BsBorderWidth } from "react-icons/bs";
import { CgTerminal } from "react-icons/cg";
import { MdPrivacyTip, MdOutlineInfo } from "react-icons/md";
import { BiSupport, BiUser, BiRestaurant, BiDish } from "react-icons/bi";
import { TbJewishStar } from "react-icons/tb";
import { GiKnightBanner } from "react-icons/gi";
import image from "../../../src/components/Assets/Logo.png";
import { BiLogOutCircle, BiPaperclip, BiMoney } from "react-icons/bi";
import { AiFillProfile } from "react-icons/ai";

import {
  MdDashboardCustomize,
  MdOutlineProductionQuantityLimits,
  MdOutlineCategory,
  MdOutlineNotifications,
  MdHistory,
} from "react-icons/md";

const Sidebar = ({ hamb, setHamb }) => {
  const nav = [
  
    {
      icon: (
        <BiUser className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/student",
      name: "Student CRM Panel",
    },
    {
      icon: (
        <BiUser className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/study",
      name: "Study Preferences",
    },
    {
      icon: (
        <BiUser className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/aboutus",
      name: "About Us",
    },
    {
      icon: (
        <BiUser className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/privacyPolicy",
      name: "Privacy Policy",
    },
    {
      icon: (
        <BiUser className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/feedback",
      name: "Feedback",
    },
    {
      icon: (
        <BiUser className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/trainers",
      name: "Trainers",
    },
    {
      icon: (
        <BiUser className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/university",
      name: "University",
    },
    {
      icon: (
        <BiUser className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/courses",
      name: "Courses",
    },
    {
      icon: (
        <BiUser className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/comments",
      name: "Comments",
    },
    {
      icon: (
        <BiUser className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/appointments",
      name: "Appointments",
    },
    {
      icon: (
        <MdDashboardCustomize className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/counsellor",
      name: "Counsellor",
    },
    {
      icon: (
        <MdDashboardCustomize className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/services",
      name: "Services From Vendor",
    },
    {
      icon: (
        <MdDashboardCustomize className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/channel",
      name: "Channel Partners",
    },
   
    {
      icon: (
        <MdOutlineProductionQuantityLimits className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/admin",
      name: "Admin Panel",
    },
   
  ];
  return (
    <>
      <aside className="p-4">
        {/* Top */}
        <div className="w-full md:hidden relative  p-2 mb-4">
          <RiCloseLine
            onClick={() => setHamb(!hamb)}
            className="text-3xl  absolute top-2 sm:hover:rotate-[228deg] transition-transform font-bold right-2 sm:hover:text-[22px] text-[rgb(241,146,46)] cursor-pointer"
          />
        </div>
        {/* Logo */}
        <figure className="flex  flex-col items-center">
          <span className="font-bold text-[rgb(241,146,46)]">
            <img src={image} className="h-24" />
          </span>
        </figure>
        {/* Nav-menu */}
        <nav className="py-6">
          {nav.map((nav) => {
            return (
              <Link to={nav.link} key={nav.name} className="">
                <span className="flex my-3 items-center cursor-pointer text-gray-900    tracking-wider p-2 rounded-sm">
                  {nav.icon} {nav.name}
                </span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
