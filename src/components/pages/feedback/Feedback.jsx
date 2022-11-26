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







const Feedback = () => {
    const [popup, setPopup] = useState(false);
    const [data, setData] = useState([]);
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [role, setRole] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const token = localStorage.getItem("token")

  

    useEffect(() => {
        fetchUsers();
        // universityUsers();
        //  trainersUsers();
    }, []);



    const fetchUsers = async () => {

        try {
            const { data } = await axios.get("https://aashish-yocket-api.herokuapp.com/api/admin/feedback",
         
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

    // const universityUsers = async () => {

    //     try {
    //         const {data} = await axios.post("https://aashish-yocket-api.herokuapp.com/api/admin/university",
    //             {

    //                 headers: {
    //                     Authorization: `Bearer ${localStorage.getItem("token")}`
    //                 }

    //             });

    //         console.log(data)
    //         setData(data)
    //     } catch (err) {
    //         console.log("err", err);
    //     }
    // };

    //Delete 

    //     const deleteUsers = async (id) => {
    //         try {
    //             const { data } = await axios.delete(`https://aashish-yocket-api.herokuapp.com/api/admin/university/${id}`,
    //                 {
    //                     headers: {
    //                         Authorization: `Bearer ${localStorage.getItem("token")}`
    //                     }
    //                 });

    //             toast.success("User Deleted Success");
    //             // data = await data.json();
    //             setData(data);
    //         } catch (err) {
    //             console.log(err);
    //             toast.error("Please try again");
    //         }
    //     };
    // function saveTrainers()
    // {
    //     console.log()
    // }

    return (
        <>
            <section>
                <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
                    <span className="tracking-widest text-slate-900 font-semibold uppercase ">
                        Feedback
                    </span>
                    </div>

              

                <div className=" wcomp overflow-y-auto">
                    <table className="table-auto  w-full text-left whitespace-no-wrap">
                        <thead>
                            <tr className=" border-b bg-slate-200 shadow-xl text-gray-900">
                                <th className="px-1.5  py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                                FeedBack
                                </th>
                                {/* <th className="px-1.5 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                                    UniversityName
                                </th>
                                <th className="px-1.5  py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                                    RegistrationNumber
                                </th>
                                <th className="px-1.5  py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                                    Email
                                </th>
                                <th className="px-1.5  py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                                    Phone
                                </th>
                                <th className="px-1.5  py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                                    Address
                                </th>
                                <th className="px-1.5  py-3 title-font tracking-widest font-medium md:text-base text-sm ">
                                    Role
                                </th>
                                <th className="px-1.5  py-3 title-font tracking-widest font-medium md:text-base text-sm ">
                                    State
                                </th>
                                <th className="px-1.5  py-3 title-font tracking-widest font-medium md:text-base text-sm ">
                                    Country
                                </th>
                                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                                    Action
                                </th> */}

                                {/* <th className="px-4  py-3 title-font tracking-widest font-medium md:text-base text-sm ">
                                    Role
                                </th>
                                <th className="px-4  py-3 title-font tracking-widest font-medium md:text-base text-sm ">
                                    country
                                </th> */}

                            </tr>
                        </thead>
                        <tbody>

                            {

                                data.map((e, i) => {

                                    return (

                                        <tr key={i} className="tracking-wider text-gray-900 ">

                                            <td className="px-3 py-3 md:text-base text-sm"style={{border:"1px solid black"}}>
                                              {e.feedback}
                                            </td>

                                            {/* <td className="px-3 py-3 md:text-base text-sm">
                                                {e.universityName}
                                            </td>

                                            <td className="px-3 py-3 md:text-base text-sm">
                                                {e.registrationNumber}
                                            </td>

                                            <td className="px-3 py-3 md:text-base text-sm">
                                                {e.email}
                                            </td>

                                            <td className="px-3 py-3 md:text-base text-sm">
                                                {e.phone}
                                            </td>

                                            <td className="px-3 py-3 md:text-base text-sm">
                                                {e.address}
                                            </td>

                                            <td className="px-3 py-3 md:text-base text-sm">
                                                {e.role}
                                            </td>

                                            <td className="px-3 py-3 md:text-base text-sm">
                                                {e.state}
                                            </td>

                                            <td className="px-3 py-3 md:text-base text-sm">
                                                {e.country}
                                            </td> */}

                                            {/* <td className="px-3 py-3 md:text-base text-sm">
                                                {e.role}
                                            </td>

                                            <td className="px-3 py-3 md:text-base text-sm">
                                                {e.country}
                                            </td> */}

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

export default HOC(Feedback);
