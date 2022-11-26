import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { IoMdClose } from "react-icons/io";
import { AiOutlineEdit, AiFillCamera } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import { toast } from "react-toastify";
import Moment from "react-moment";
import { borders } from '@material-ui/system'
import HOC from "../../layout/HOC";
import axios from "axios";
import BaseUrl from "../../BaseUrl";
import auth from "../../Auth";
import { useParams } from "react-router-dom";
import { BorderAll } from "@material-ui/icons";


const requiredUgStudyPreference=[
    {
        matrixBoard: "iuyjhh",
        matrixPercentage: 5667,
        matrixPassingYear: "557",
        intermediateBoard: "uythgjg",
        intermediatePercentage: 688,
        intermediatePassingYear: "67867",
        subject: "project management"
    },
]




const UgDetails = () => {

    const [data, setData] = useState([]);
    const [board, setBoard] = useState([]);

    // const navigate = useNavigate();

    // const classes = useStyles();

    useEffect(() => {
        fetchUsers();
        //  deleteUsers();
    }, []);


    
    const fetchUsers = async () => {

        try {
            const {data} = await axios.get("https://aashish-yocket-api.herokuapp.com/api/admin/ug-study-preference/users/6318678ec8d398d9bba56e07",
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
    //         const { data } = await axios.delete(`https://aashish-yocket-api.herokuapp.com/api/admin/ug-study-preference/users/6318678ec8d398d9bba56e07/${id}`,
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
                        ug details
                    </span>
                </div>
                <div className=" wcomp overflow-y-auto">
                    <table className="table-auto  w-full text-left whitespace-no-wrap">
                        <thead>
                            <tr className=" border-b bg-slate-200 shadow-xl text-gray-900">
                                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                                    Board
                                </th>
                                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                                    10th class percentage
                                </th>
                                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                                    Year of passing
                                </th>
                                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                                    Board
                                </th>
                                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                                    12th class percentage
                                </th>
                                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                                    year of passing
                                </th>
                                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm ">
                                    Subject
                                </th>
                                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            {

                                requiredUgStudyPreference.map((e, i) => {

                                    return (

                                        <tr key={i} className="tracking-wider text-gray-900 ">

                                            <td className="px-4 py-3 md:text-base text-sm">
                                                {e.matrixBoard}
                                            </td>

                                            <td className="px-4 py-3 md:text-base text-sm">
                                                {e.matrixPercentage}%
                                            </td>

                                            <td className="px-4 py-3 md:text-base text-sm">
                                                {e.matrixPassingYear}
                                            </td>

                                            <td className="px-4 py-3 md:text-base text-sm">
                                                {e.intermediateBoard}
                                            </td>

                                            <td className="px-4 py-3 md:text-base text-sm">
                                                {e.intermediatePercentage}%
                                            </td>

                                            <td className="px-4 py-3 md:text-base text-sm">
                                                {e.intermediatePassingYear}
                                            </td>

                                            <td className="px-4 py-3 md:text-base text-sm">
                                                {e.subject}
                                            </td>

                                            {/* <td className=" py-3  space-x-3">
                                                <button className="font-semibold">
                                                    <GrFormClose
                                                   className="text-lg md:text-2xl"
                                                    onClick={() =>deleteUsers(e._id)}
                                                 />
                                                
                                                </button>
                                            </td> */}
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

export default HOC(UgDetails);
