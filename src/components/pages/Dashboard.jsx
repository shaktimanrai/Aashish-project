import React from "react";
import HOC from "../layout/HOC";
import {
  MdOutlineLibraryBooks,
  MdCategory,
  MdInfo,
  MdVerifiedUser,
  MdList,
} from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { useNavigate } from "react-router-dom";



export const dash = (data) => {
  //  console.log(data, "dsjkfhjkashfjk");
  return data;
};
const Dashboard = () => {
  const navigate = useNavigate();
  const Goto = (redirectionUrl) => {
    navigate(redirectionUrl);
  };

  //  const card = [

    
  //   {
  //     progress: "bg-blue-400",
  //     title: "Total Products",
  //     number: "10",
  //     icon: <FaUserFriends className="text-2xl text-[rgb(240,72,88)]" />,
  //     redirectionUrl: "/totalProducts",
  //   },
  //   {
  //     progress: "bg-green-400",
  //     title: "Total Category",
  //     number: "100",
  //     icon: (
  //       <MdOutlineLibraryBooks className="text-2xl text-[rgb(240,72,88)]" />
  //     ),
  //     redirectionUrl: "/tatalCategory",

  //     // redirectionUrl: "/products",
  //   },
  //   {
  //     progress: "bg-yellow-400",
  //     title: "Total Orders",
  //     number: "150",
  //     icon: <MdCategory className="text-2xl text-[rgb(240,72,88)]" />,
  //     redirectionUrl: "/tatalOrders",

  //   },
  //   {
  //     progress: "bg-yellow-400",
  //     title: "Users List",
  //     number: "150",
  //     icon: <MdInfo className="text-2xl text-[rgb(240,72,88)]" />,
  //     redirectionUrl: "/usersList",

  //   },
  //   // {
  //   //   progress: "bg-yellow-400",
  //   //   title: "Category",
  //   //   number: "150",
  //   //   icon: <MdCategory className="text-2xl text-[rgb(240,72,88)]" />,
  //   //   // redirectionUrl: "/categories",
  //   // },
  //   {
  //     progress: "bg-yellow-400",
  //     title: "Category",
  //     number: "150",
  //     icon: <MdVerifiedUser className="text-2xl text-[rgb(240,72,88)]" />,
  //     redirectionUrl: "/category",

  //   },
  //   {
  //     progress: "bg-yellow-400",
  //     title: "New Products",
  //     number: "150",
  //     icon: <MdList className="text-2xl text-[rgb(240,72,88)]" />,
  //     redirectionUrl: "/newProducts",

  //   },
  //   {
  //     progress: "bg-yellow-400",
  //     title: "New Users",
  //     number: "150",
  //     icon: <MdList className="text-2xl text-[rgb(240,72,88)]" />,
  //     redirectionUrl: "/newUsers",

  //   },
  //  ];


  return (
    <>


      {/* <section className="grid md:grid-cols-3 grid-cols-2 gap-y-6 gap-x-4 cursor-pointer">
         Card 
         {card.map((cardItem, index) => {
          return (
            <div
              className="px-5 py-8 bg-slate-200 space-y-2 shadow-xl flex flex-col  rounded-md"
               onClick={() => Goto(cardItem.redirectionUrl)}
              key={index}
            >
              <div className="grid  justify-between grid-cols-4">
                <div className="flex flex-col col-span-3 space-y-1">
                  <span className="tracking-widest text-gray-900">
                    {cardItem.title}
                  </span>
                  <span className="tracking-wider text-gray-700 text-xl md:text-2xl font-semibold cursor-pointer">
                    {cardItem.number}
                  </span>
                </div>
                 Icons 
                <div className="flex rounded-full w-10 h-10 sm:w-12 sm:h-12 bg-white justify-center items-center cursor-pointer">
                  {cardItem.icon}
                </div>
              </div>
            </div>
          );
        })} 
      </section> */}
    </>
  );
};

export default HOC(Dashboard);
