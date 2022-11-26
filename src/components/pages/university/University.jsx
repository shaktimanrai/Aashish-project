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


// const requiredUgStudyPreference=[
//     {
//         matrixBoard: "iuyjhh",
//         matrixPercentage: 5667,
//         matrixPassingYear: "557",
//         intermediateBoard: "uythgjg",
//         intermediatePercentage: 688,
//         intermediatePassingYear: "67867",
//         subject: "project management"
//     },
// ]




const University = () => {
    const [popup, setPopup] = useState(false);
    const [data, setData] = useState([]);
    const [profileImage, setImage] = useState("");
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [role, setRole] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const token = localStorage.getItem("token")

    // function saveUser()
    // {
    //     console.log(profileImage,name,number,email,phone,address,role,state,country)
    // }

    // const navigate = useNavigate();

    // const classes = useStyles();

    useEffect(() => {
        fetchUsers();
        universityUsers();
        //  trainersUsers();
    }, []);



    const fetchUsers = async () => {

        try {
            const { data } = await axios.get("https://aashish-yocket-api.herokuapp.com/api/admin/university",
         
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

    const universityUsers = async (e) => {
        e.preventDefault();
        try {
            const {data} = await axios.post("https://aashish-yocket-api.herokuapp.com/api/admin/university",
            {profileImage,name,number,email,phone,address,role,state,country},
                {

                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }

                });

            console.log('Posting data',data)
            setData(data)
        } catch (err) {
            console.log("err", err);
        }
    };

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
                        University
                    </span>

                    <button
                        onClick={() => {
                            //   setEdit("");
                            setPopup(!popup);
                        }}
                        className="md:py-2 px-3 md:px-4 py-1 rounded-full bg-[rgb(240,72,88)] text-white tracking-wider"
                    >
                        Add University
                    </button>
                </div>
                <section
                    className={
                        popup
                            ? "fixed top-0 left-0 wcomp bg-[rgb(0,0,0,0.5)] transition-all duration-150 w-full flex justify-center items-center overflow-y-auto  h-screen "
                            : "hidden"
                    }
                >
                    <div className="bg-slate-100 sm:h-[90vh] h-[80vh] overflow-y-auto  lg:w-3/6  md:w-4/6 w-5/6 mx-auto  rounded-lg">
                        <div className="flex sticky top-0 py-3 px-5 bg-slate-100 justify-between">
                            <span className=" font-semibold text-[rgb(240,72,88)] ">
                                Add University
                            </span>
                            <div className="text-[rgb(240,72,88)] py-0.5 text-2xl cursor-pointer font-medium tracking-wider">
                                <IoMdClose
                                    onClick={() => {
                                        // setEdit("");
                                        setPopup(false);
                                    }}
                                />
                            </div>
                        </div>

                        <form
                            className="grid  grid-cols-1 gap-x-7 gap-y-4 p-4"
                            onSubmit={fetchUsers}
                        >
                            <div className="inline-flex  w-full flex-col">
                                <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                                Image
                                </label>
                                <input
                                    required
                                    type="file"
                                    // value={profileImage}
                                    // name="image"
                                    onChange={(e) => setImage(e.target.files[0])}
                                    className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                                />
                            </div>
                            <div className="inline-flex  w-full flex-col">
                                <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                                    UniversityName
                                </label>
                                <input
                                    required
                                    type="text"
                                    // value={name}
                                    // name="name"
                                    onChange={(e) => setName(e.target.value)}
                                    className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                                />
                            </div>
                            <div className="inline-flex  w-full flex-col">
                                <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                                    RegistrationNumber
                                </label>
                                <input
                                    required
                                    type="text"
                                    // value={number}
                                    // name="number"
                                    onChange={(e) => setNumber(e.target.value)}
                                    className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                                />
                            </div>
                            <div className="inline-flex  w-full flex-col">
                                <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                                    Email
                                </label>
                                <input
                                    required
                                    type="text"
                                    // value={email}
                                    // name="email"
                                    placeholder=""
                                    onChange={(e) => setEmail(e.target.value)}
                                    className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                                />
                            </div>
                            <div className="inline-flex  w-full flex-col">
                                <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                                    Phone
                                </label>
                                <input
                                    required
                                    type="text"
                                    // value={phone}
                                    // name="phone"
                                    placeholder=""
                                    onChange={(e) => setPhone(e.target.value)}
                                    className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                                />
                            </div>
                            <div className="inline-flex  w-full flex-col">
                                <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                                    Address
                                </label>
                                <input
                                    required
                                    type="text"
                                    // value={address}
                                    // name="address"
                                    placeholder=""
                                    onChange={(e) => setAddress(e.target.value)}
                                    className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                                />
                            </div>

                            <div className="inline-flex  w-full flex-col">
                                <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                                    Role
                                </label>
                                <input
                                    required
                                    type="text"
                                    // value={role}
                                    // name="role"
                                    placeholder=""
                                    onChange={(e) => setRole(e.target.value)}
                                    className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                                />
                            </div>
                            <div className="inline-flex  w-full flex-col">
                                <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                                    State
                                </label>
                                <input
                                    required
                                    type="text"
                                    // value={state}
                                    // name="state"
                                    placeholder=""
                                    onChange={(e) => setState(e.target.value)}
                                    className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                                />
                            </div>
                            <div className="inline-flex  w-full flex-col">
                                <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                                    Country
                                </label>
                                <input
                                    required
                                    type="text"
                                    // value={country}
                                    // name="country"
                                    placeholder=""
                                    onChange={(e) => setCountry(e.target.value)}
                                    className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                                />
                            </div>
                            {/* <div className="inline-flex  w-full flex-col">
                <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                  email
                </label>
                <input
                  required
                  type="text"
                  placeholder=""
                  onChange={(e) => setO(e.target.value)}
                  className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                />
              </div>
              <div className="inline-flex  w-full flex-col">
                <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                  role
                </label>
                <input
                  required
                  type="text"
                  placeholder=""
                  onChange={(e) => setQ(e.target.value)}
                  className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                />
              </div> */}

                            <button
                                type="submit"
                                value="Add"
                                 onClick={universityUsers}
                                className="bg-[rgb(240,72,88)] cursor-pointer w-40 hover:bg-[rgb(240,72,88)] py-1 rounded-full"
                            >
                                Add
                            </button>
                        </form>
                    </div>
                </section>

                <div className=" wcomp overflow-y-auto">
                    <table className="table-auto  w-full text-left whitespace-no-wrap">
                        <thead>
                            <tr className=" border-b bg-slate-200 shadow-xl text-gray-900">
                                <th className="px-1.5  py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                                Image
                                </th>
                                <th className="px-1.5 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
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
                                </th>

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
                                                <img
                                                    src=
                                                    {"public/images/university/profileImage-1662723045788-undefined.png"}
                                                    alt=""
                                                    className="xl:w-36 shadow-xl rounded-lg lg:w-32 md:w-28 w-24"
                                                />
                                            </td>

                                            <td className="px-3 py-3 md:text-base text-sm"style={{border:"1px solid black"}}>
                                                {e.universityName}
                                            </td>

                                            <td className="px-3 py-3 md:text-base text-sm"style={{border:"1px solid black"}}>
                                                {e.registrationNumber}
                                            </td>

                                            <td className="px-3 py-3 md:text-base text-sm"style={{border:"1px solid black"}}>
                                                {e.email}
                                            </td>

                                            <td className="px-3 py-3 md:text-base text-sm"style={{border:"1px solid black"}}>
                                                {e.phone}
                                            </td>

                                            <td className="px-3 py-3 md:text-base text-sm"style={{border:"1px solid black"}}>
                                                {e.address}
                                            </td>

                                            <td className="px-3 py-3 md:text-base text-sm"style={{border:"1px solid black"}}>
                                                {e.role}
                                            </td>

                                            <td className="px-3 py-3 md:text-base text-sm"style={{border:"1px solid black"}}>
                                                {e.state}
                                            </td>

                                            <td className="px-3 py-3 md:text-base text-sm"style={{border:"1px solid black"}}>
                                                {e.country}
                                            </td>

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

export default HOC(University);
