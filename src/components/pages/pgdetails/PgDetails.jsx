import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { GrFormClose } from "react-icons/gr";
import { toast } from "react-toastify";
import Moment from "react-moment";
import HOC from "../../layout/HOC";
import axios from "axios";
import BaseUrl from "../../BaseUrl";
import auth from "../../Auth";
import { useParams } from "react-router-dom";
import Users from "../users/Users";

// const requiredPgStudyPreference = [
//   {
//     matrixBoard: "cbse",
//     matrixPercentage: 80,
//     matrixPassingYear: "2015",
//     intermediateBoard: "cbse",
//     intermediatePercentage: 91.8,
//     intermediatePassingYear: "2017",
//     intermediateSubject: "pcm",
//     bachelorUniversityName: "aktu",
//     bachelorDegree: "b.tech",
//     bachelorPercentage: 80,
//     bachelorYearOfPassing: "2022",
//     masterUniversityName: "abcd",
//     masterDegree: "m.tech",
//     masterPercentage: 90.1,
//     masterYearOfPassing: "2027",
//     masterSubject: "xyz",
//   },
// ]

const PgDetails = () => {
  const [data, setData] = useState({});
  const params = useParams();
  const [board, setBoard] = useState([]);

  // const navigate = useNavigate();

  // const classes = useStyles();

  useEffect(() => {
    fetchUsers();
    // deleteUsers();
  }, []);



  const fetchUsers = async () => {

    try {
      const { data } = await axios.get("https://aashish-yocket-api.herokuapp.com/api/admin/pg-study-preference/users/${id}",
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
  //         const { data } = await axios.delete(`https://aashish-yocket-api.herokuapp.com/api/admin/users/${id}`,
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
            pg details :{data[0]?.id}
          </span>
        </div>
        <div className=" wcomp overflow-y-auto">
          <table className="table-auto  w-full text-left whitespace-no-wrap" >
            <thead>
              <tr className=" border-b bg-slate-200 shadow-xl text-gray-900">
                <th className="px-1.5 py-3 title-font tracking-widest font-medium md:text-base text-sm ">
                  Board
                </th>
                <th className="px-1.5 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  10th class percentage
                </th>
                <th className="px-1.5 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  Year of passing
                </th>
                <th className="px-1.5 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  Board
                </th>
                <th className="px-1.5 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  12th class percentage
                </th>
                <th className="px-1.5 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  year of passing
                </th>
                <th className="px-1.5 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  Subject
                </th>
                <th className="px-1.5 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  University Name
                </th>
                <th className="px-1.5 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  Bachelors Degree
                </th>
                <th className="px-1.5 py-3 title-font tracking-widest font-medium md:text-base text-sm ">
                  Percentage
                </th>
                <th className="px-1.5 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  Year of passing
                </th>
                <th className="px-1.5 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  Master's Degree
                </th>
                <th className="px-1.5 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  Percentage
                </th>
                <th className="px-1.5 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  University
                </th>
                <th className="px-1.5 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  Year of passing
                </th>
                <th className="px-1.5 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  Subject
                </th>
                <th className="px-1.5 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>

              {

                data?.map((e, i) => {
                  return (
                    <tr key={i} className="tracking-wider text-gray-900">
                      <td className="px-2  py-3 md:text-base text-sm" >
                        {e.matrixBoard}
                      </td>
                      <td className="px-2  py-3 md:text-base text-sm">
                        {e.matrixPercentage}%
                      </td>
                      <td className="px-2  py-3 md:text-base text-sm">
                        {e.matrixPassingYear}
                      </td>
                      <td className="px-2 py-3 md:text-base text-sm">
                        {e.intermediateBoard}
                      </td>
                      <td className="px-2  py-3 md:text-base text-sm">
                        {e.intermediatePercentage}%
                      </td>
                      <td className="px-2  py-3 md:text-base text-sm">
                        {e.intermediatePassingYear}
                      </td>
                      <td className="px-2  py-3 md:text-base text-sm">
                        {e.intermediateSubject}
                      </td>
                      <td className="px-2  py-3 md:text-base text-sm">
                        {e.bachelorUniversityName}
                      </td>
                      <td className="px-2  py-3 md:text-base text-sm">
                        {e.bachelorDegree}
                      </td>
                      <td className="px-1.5  py-3 md:text-base text-sm">
                        {e.bachelorPercentage}%
                      </td>
                      <td className="px-2  py-3 md:text-base text-sm">
                        {e.bachelorYearOfPassing}
                      </td>
                      <td className="px-2  py-3 md:text-base text-sm">
                        {e.masterDegree}
                      </td>
                      <td className="px-2  py-3 md:text-base text-sm">
                        {e.masterPercentage}%
                      </td>
                      <td className="px-2  py-3 md:text-base text-sm">
                        {e.masterUniversityName}
                      </td>
                      <td className="px-2 py-3 md:text-base text-sm">
                        {e.masterYearOfPassing}
                      </td>
                      <td className="px-2 py-3 md:text-base text-sm">
                        {e.masterSubject}
                      </td>
                      <td className=" py-3  space-x-3">
                        {/* <button className="font-semibold">
                        <GrFormClose
                          className="text-lg md:text-2xl"
                          onClick={() => deleteUsers(e._id)}
                        />
                      </button> */}
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

export default HOC(PgDetails);
