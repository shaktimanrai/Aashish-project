import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { BsBorderWidth } from "react-icons/bs";
import { CgTerminal } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";
import { MdPrivacyTip } from "react-icons/md";
import {
  BiLogOutCircle,
  BiSupport,
  BiHistory,
  BiWalletAlt,
} from "react-icons/bi";
import { TbJewishStar } from "react-icons/tb";
import { GiKnightBanner } from "react-icons/gi";
import image from "../../../vendorPanel/components/Assets/Logo.png";

import {
  MdDashboardCustomize,
  MdOutlineProductionQuantityLimits,
  MdOutlineCategory,
  MdOutlineNotifications,
  MdPermDataSetting,
} from "react-icons/md";

const Sidebar = ({ hamb, setHamb }) => {
  const nav = [
    {
      icon: (
        <MdDashboardCustomize className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/vendorDashboard",
      name: "Dashboard",
    },
    {
      icon: (
        <CgProfile className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/vendorProducts",
      name: "Product Details",
    },
    {
      icon: (
        <CgProfile className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/vendorService-registration",
      name: "Service Registration",
    },
    {
      icon: (
        <CgProfile className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/vendorCoupons",
      name: "Coupons Discount",
    },
    {
      icon: (
        <CgProfile className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/vendorAllotment",
      name: "Allotment Of Tasks ",
    },
    {
      icon: (
        <CgProfile className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/vendorTask-performed",
      name: "Task Performed Details ",
    },
    {
      icon: (
        <CgProfile className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/vendorRequest",
      name: "Request/Appointments ",
    },
    {
      icon: (
        <CgProfile className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/vendorManages",
      name: "Manages Products/Services ",
    },
    {
      icon: (
        <CgProfile className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/vendorManage-partner",
      name: "Manage Partner Merchant",
    },
    {
        icon: (
           <MdOutlineCategory className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
         ),
         link: "/vendorCategories",
         name: "Categories Details manages",
       },
       {
        icon: (
           <MdOutlineCategory className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
         ),
         link: "/vendorAdd-to-cart",
         name: "Add To Cart",
       },
       {
        icon: (
           <MdOutlineCategory className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
         ),
         link: "/vendorPaid-ads-feature",
         name: "Paid Ads Feature",
       },
       {
      icon: (
        <GiKnightBanner className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/vendorUsers-comment",
      name: "Users Comment",
    },
    {
      icon: (
        <GiKnightBanner className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/vendorRating-and-reviews",
      name: "Rating And Reviews",
    },
    {
      icon: (
        <CgProfile className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/vendorOrders",
      name: "Orders",
    },
 {
      icon: (
        <TbJewishStar className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/vendorCommission",
      name: "Commission",
    },
    {
      icon: (
        <MdPermDataSetting className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/vendorSetting",
      name: "Setting",
    },
    {
      icon: (
        <MdPermDataSetting className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/vendorPayment",
      name: "Payment",
    },
    {
      icon: (
        <MdPermDataSetting className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/vendorReport",
      name: "Report/Statistics",
    },
    {
      icon: (
        <BsBorderWidth className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/vendorTransactions",
      name: "Check Out Transactions",
    },
     {
      icon: (
        <CgTerminal className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/vendorFavorites",
      name: "Favorites",
    },
    {
      icon: (
        <MdOutlineCategory className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/vendorCategory-details",
      name: "Category Details",
    },
    {
      icon: (
        <BiSupport className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/vendorSupport",
      name: "Support",
    },
     {
      icon: (
        <TbJewishStar className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/vendorComplaint",
      name: "Complaint",
    },

    // {
    //   icon: (
    //     <MdOutlineCategory className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
    //   ),
    //   link: "/vendorCategory-details",
    //   name: "Category Details",
    // },
    // {
    //   icon: (
    //     <GiKnightBanner className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
    //   ),
    //   link: "/vendorUsers",
    //   name: "Users",
    // },
    // {
    //   icon: (
    //     <GiKnightBanner className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
    //   ),
    //   link: "/vendorOrders",
    //   name: "View Orders",
    // },
    // {
    //   icon: (
    //     <BsBorderWidth className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
    //   ),
    //   link: "/vendorTransactions",
    //   name: "Transactions",
    // },
    // {
    //   icon: (
    //     <CgTerminal className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
    //   ),
    //   link: "/vendorFavorites",
    //   name: "Favorites",
    // },

    // // {
    // //   icon: <MdPrivacyTip className="text-xl mr-3" />,
    // //   link: "/vendorPrivacy",
    // //   name: "Privacy Policy",
    // // },
    // {
    //   icon: (
    //     <BiSupport className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
    //   ),
    //   link: "/vendorSupport",
    //   name: "Help and Support ",
    // },
    // {
    //   icon: (
    //     <TbJewishStar className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
    //   ),
    //   link: "/vendorComplaints",
    //   name: "Complaint",
    // },
    // {
    //   icon: (
    //     <TbJewishStar className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
    //   ),
    //   link: "/vendorReports",
    //   name: "View Earning Report",
    // },
    // {
    //   icon: (
    //     <TbJewishStar className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
    //   ),
    //   link: "/vendorCoupons",
    //   name: "Coupons",
    // },
    // {
    //   icon: (
    //     <TbJewishStar className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
    //   ),
    //   link: "/vendorCommission",
    //   name: "Commission",
    // },
    // {
    //   icon: (
    //     <BiWalletAlt className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
    //   ),
    //   link: "/wallet",
    //   name: "Wallet",
    // },
    // {
    //   icon: (
    //     <BiHistory className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
    //   ),
    //   link: "/History",
    //   name: "History",
    // },
    {
      icon: (
        <BiLogOutCircle className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/vendorLogin",
      name: "Logout",
    },
  ];
  return (
    <>
      <aside className="p-4 h-auto">
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
