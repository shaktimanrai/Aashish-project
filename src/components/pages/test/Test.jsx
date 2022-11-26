import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { IoMdClose } from "react-icons/io";
import { AiOutlineEdit, AiFillCamera } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import { toast } from "react-toastify";
import Moment from "react-moment";

import HOC from "../../layout/HOC";
import axios from "axios";
import BaseUrl from "../../BaseUrl";
import auth from "../../Auth";
import { useParams } from "react-router-dom";

const Test = () => {
  const [data, setData] = useState([]);
  const [board, setBoard] = useState([]);

  // const navigate = useNavigate();

  // const classes = useStyles();

  useEffect(() => {
    fetchUsers();
    // deleteUsers();
  }, []);


  // const [ss , setN] = useState([])
  const fetchUsers = async () => {

    try {
      const { data } = await axios.get("https://aashish-yocket-api.herokuapp.com/api/admin/users",
        {

          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }

        });

      console.log(data)
      setData(data)
    } catch (err) {
      console.log("err", err);
    }
  };

  //Delete 
  // const deleteUsers = async (id) => {
  //     try {
  //         const { data } = await axios.delete(`https://aashish-yocket-api.herokuapp.com/api/admin/ug-study-preference/users/${id}`,
  //             {
  //                 headers: {
  //                     Authorization: `Bearer ${localStorage.getItem("token")}`
  //                 }
  //             });

  //         toast.success("User Deleted Success");
  //         // data = await data.json();
  //         setData(data);
  //     } catch (err) {
  //         console.log(err);
  //         toast.error("Please try again");
  //     }
  // };

  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Test Score
          </span>
        </div>
        <div className=" wcomp overflow-y-auto">
          <table className="table-auto  w-full text-left whitespace-no-wrap">
            <thead>
              <tr className=" border-b bg-slate-200 shadow-xl text-gray-900">
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  Overall
                </th>
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  Lowest Band
                </th>
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  ACT Score
                </th>
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  SAT Score
                </th>
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  GMAT Score
                </th>
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  GRE Scpre
                </th>

                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {

                data?.users?.map((e, i) => {
                  return (
                    <tr key={i} className="tracking-wider text-gray-900 ">
                      <td className="px-4 py-3 md:text-base text-sm">
                        {e.restaurantId}
                      </td>
                      <td className="px-4 py-3 md:text-base text-sm">
                        {e.createdAt}
                      </td>
                      <td className="px-4 py-3 md:text-base text-sm">
                        {e.expirationDate?.slice(0, 10)}
                      </td>
                      <td className="px-4 py-3 md:text-base text-sm">{e.name}</td>
                      <td className="px-4 py-3 md:text-base text-sm">
                        {e.discountPercent}%
                      </td>
                      <td className="px-4 py-3 md:text-base text-sm">
                        {e.minOrder}
                      </td>
                      <td className=" py-3  space-x-3">
                        <button className="font-semibold">
                          {/* <GrFormClose
                          className="text-lg md:text-2xl"
                          onClick={() => deleteCoupon(e._id)}
                        /> */}
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default HOC(Test);
