import React from "react";
import HOC from "../../../components/layout/HOC";
import { MdDashboardCustomize, MdOutlineLibraryBooks } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { BiSupport, BiLogOutCircle } from "react-icons/bi";

export const dash = (data) => {
  // console.log(data, "dsjkfhjkashfjk");
  return data;
};
const Services = () => {
  const navigate= useNavigate();
  const Go = (redirectionUrl)=>{
    navigate(redirectionUrl);
  };
  const card = [
    // {
    //   progress: "bg-blue-400",
    //   title: "Test Prep Services",
    //   number: "10",
    //   icon: <FaUserFriends className="text-2xl text-[rgb(240,72,88)]" />,
    //   redirectionUrl: "/testPrepServices",
    // },
    {
      progress: "bg-green-400",
      title: "Visa And University Process Related",
      number: "100",
      icon: (
        <MdOutlineLibraryBooks className="text-2xl text-[rgb(240,72,88)]" />
        
      ),
      redirectionUrl: "/visaAndUniversity",
    },
    {
      progress: "bg-yellow-400",
      title: "Profile Building Programs",
      number: "150",
      icon: <MdDashboardCustomize className="text-2xl text-[rgb(240,72,88)]" />,
      redirectionUrl: "/profileBuildingPrograms",
    },
    {
      progress: "bg-yellow-400",
      title: "Loan",
      number: "150",
      icon: <MdDashboardCustomize className="text-2xl text-[rgb(240,72,88)]" />,
      redirectionUrl: "/loan",
    },
    {
      progress: "bg-yellow-400",
      title: "Tricketing And Forex",
      number: "150",
      icon: <MdDashboardCustomize className="text-2xl text-[rgb(240,72,88)]" />,
      redirectionUrl: "/tricketingAndForex",
    },
   // {
    //   progress: "bg-yellow-400",
    //   title: "Rate Us",
    //   number: "150",
    //   icon: <MdDashboardCustomize className="text-2xl text-[rgb(240,72,88)]" />,
    //   redirectionUrl: "/rateUs",
    // },
    // {
    //   progress: "bg-yellow-400",
    //   title: "Logout",
    //   icon: <BiLogOutCircle className="text-2xl text-[rgb(240,72,88)]" />,
    //   redirectionUrl: "/login",
    // },
    // {
    //   progress: "bg-yellow-400",
    //   title: "New Users",
    //   number: "150",
    //   icon: <MdDashboardCustomize className="text-2xl text-[rgb(240,72,88)]" />,
    //   redirectionUrl: "/newUsers",
    // },
  ];
  return (
    <>
      <section className="grid md:grid-cols-3 grid-cols-2 gap-y-6 gap-x-4">
        {/* Card */}
        {card.map((card) => {
          return (
            <div className="px-5 py-8 bg-slate-200 space-y-2 shadow-xl flex flex-col  rounded-md"
            onClick={()=> Go(card.redirectionUrl)}
            >
              <div className="grid  justify-between grid-cols-4">
                <div className="flex flex-col col-span-3 space-y-1">
                  <span className="tracking-widest text-gray-900">
                    {card.title}
                  </span>
                  <span className="tracking-wider text-gray-700 text-xl md:text-2xl font-semibold">
                    {card.number}
                  </span>
                </div>
                {/* Icons */}
                <div className="flex rounded-full w-10 h-10 sm:w-12 sm:h-12 bg-white justify-center items-center">
                  {card.icon}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default HOC(Services);
