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




const Courses = () => {
    const [popup, setPopup] = useState(false);
    const [data, setData] = useState([]);
    const [a, setA] = useState([]);
    const [p, setP] = useState([]);
    const [t, setT] = useState([]);
    const [c, setC] = useState([]);
    const [i, setI] = useState([]);
    const [m, setM] = useState([]);
    const [n, setN] = useState([]);
    const [o, setO] = useState([]);
    const [q, setQ] = useState([]);

    // const navigate = useNavigate();

    // const classes = useStyles();

    useEffect(() => {
        fetchUsers();
        //  deleteUsers();
        //  trainersUsers();
    }, []);



    const fetchUsers = async () => {

        try {
            const { data } = await axios.get("https://aashish-yocket-api.herokuapp.com/api/admin/university/631b237af2b699197fac37d9/courses",
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

    // const trainersUsers = async () => {

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
                <div className="pb-2 sticky top-0  w-full flex justify-between items-center bg-white">
                    <span className="tracking-widest text-slate-900 font-semibold uppercase ">
                        Courses
                    </span>
                  
                    <button
                        onClick={() => {
                            //   setEdit("");
                            setPopup(!popup);
                        }}
                        className="md:py-2 px-3 md:px-4 py-1 rounded-full bg-[rgb(240,72,88)] text-white tracking-wider"
                    >
                        Add Courses
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
                            Add Courses
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
                            <div className="inline-flex w-full flex-col">
                                <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                                  CourseName
                                </label>
                                <input
                                    required
                                    type="text"
                                    onChange={(e) => setPopup(e.target.value)}
                                    className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                                />
                            </div>
                            <div className="inline-flex  w-full flex-col">
                                <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                                   Description
                                </label>
                                <input
                                    required
                                    type="text"
                                    onChange={(e) => setData(e.target.value)}
                                    className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                                />
                            </div>
                            <div className="inline-flex  w-full flex-col">
                                <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                                   DurationInMonths
                                </label>
                                <input
                                    required
                                    type="text"
                                    onChange={(e) => setA(e.target.value)}
                                    className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                                />
                            </div>
                            <div className="inline-flex  w-full flex-col">
                                <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                                    PriceInRs
                                </label>
                                <input
                                    required
                                    type="text"
                                    placeholder=""
                                    onChange={(e) => setP(e.target.value)}
                                    className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                                />
                            </div>
                            <div className="inline-flex  w-full flex-col">
                                <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                                   EducationType
                                </label>
                                <input
                                    required
                                    type="text"
                                    placeholder=""
                                    onChange={(e) => setT(e.target.value)}
                                    className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                                />
                            </div>
                            <div className="inline-flex  w-full flex-col">
                                <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                                   MinIELTSScore
                                </label>
                                <input
                                    required
                                    type="text"
                                    placeholder=""
                                    onChange={(e) => setC(e.target.value)}
                                    className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                                />
                            </div>

                            <div className="inline-flex  w-full flex-col">
                                <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                                   MinTOEFLScore
                                </label>
                                <input
                                    required
                                    type="text"
                                    placeholder=""
                                    onChange={(e) => setI(e.target.value)}
                                    className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                                />
                            </div>
                            <div className="inline-flex  w-full flex-col">
                                <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                                   Documents Required
                                </label>
                                <input
                                    required
                                    type="text"
                                    placeholder=""
                                    onChange={(e) => setM(e.target.value)}
                                    className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                                />
                            </div>
                            <div className="inline-flex  w-full flex-col">
                                <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                                   Application Dead Line
                                </label>
                                <input
                                    required
                                    type="text"
                                    placeholder=""
                                    onChange={(e) => setN(e.target.value)}
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
                                // onClick={saveTrainers}
                                className="bg-[rgb(240,72,88)] cursor-pointer w-40 hover:bg-[rgb(240,72,88)] py-1 rounded-full"
                            >
                                Add
                            </button>
                        </form>
                    </div>
                </section>

                <div className=" wcomp overflow-y-auto" >
                   
                    <table className="table-auto  w-full text-left whitespace-no-wrap">
                    <div className=""style={{wordWrap:"break-word",width:"300px"}}>
                        <thead>
                            <tr className=" border-b bg-slate-200 shadow-xl text-gray-900">
                                <th className="px-1  py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                                    CourseName
                                </th>
                                <th className="px-1 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                                    Description
                                </th>
                                <th className="px-1 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                                    DurationInMonths
                                </th>
                                <th className="px-1  py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                                    PriceInRs
                                </th>
                                <th className="px-1  py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                                    EducationType
                                </th>
                                <th className="px-1  py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                                    MinIELTScore
                                </th>
                                <th className="px-1 py-3 title-font tracking-widest font-medium md:text-base text-sm ">
                                    MinTOEFLScore
                                </th>
                                <th className="px-1  py-3 title-font tracking-widest font-medium md:text-base text-sm ">
                                    DocumentsRequired
                                </th>
                                <th className="px-1  py-3 title-font tracking-widest font-medium md:text-base text-sm ">
                                    ApplicationDeadLine
                                </th>
                                <th className="px-1  py-3 title-font tracking-widest font-medium md:text-base text-sm ">
                                    CourseLink
                                </th>
                                <th className="px-1  py-3 title-font tracking-widest font-medium md:text-base text-sm ">
                                    ApplicationLink
                                </th>
                                <th className="px-1  py-3 title-font tracking-widest font-medium md:text-base text-sm ">
                                    NumViews
                                </th>
                                <th className="px-1  py-3 title-font tracking-widest font-medium md:text-base text-sm ">
                                    NumApplied
                                </th>
                                <th className="px-1  py-3 title-font tracking-widest font-medium md:text-base text-sm ">
                                    NumAccepted
                                </th>
                                <th className="px-1  py-3 title-font tracking-widest font-medium md:text-base text-sm ">
                                    NumShortlisted
                                </th>
                                <th className="px-1  py-3 title-font tracking-widest font-medium md:text-base text-sm ">
                                    NumLikes
                                </th>
                                <th className="px-1 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
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
                        </div>
                        <tbody>

                            {

                                data?.requiredCourses?.map((e, i) => {

                                    return (
                                        <div className=""style={{wordWrap:"break-word"}}>
                                        <tr key={i} className="tracking-wider text-gray-900" >

                                            <td className="px-3 py-3 md:text-base text-sm"style={{border:"1px solid black"}}>
                                               {e.courseName}
                                            </td>

                                            <td className="px-3 py-3 md:text-base text-sm"style={{border:"1px solid black"}}>
                                                {e.description}
                                            </td>

                                            <td className="px-3 py-3 md:text-base text-sm"style={{border:"1px solid black"}}>
                                                {e.durationInMonths}
                                            </td>

                                            <td className="px-3 py-3 md:text-base text-sm"style={{border:"1px solid black"}}>
                                                {e.priceInRs}
                                            </td>

                                            <td className="px-3 py-3 md:text-base text-sm"style={{border:"1px solid black"}}>
                                                {e.educationType}
                                            </td>

                                            <td className="px-3 py-3 md:text-base text-sm"style={{border:"1px solid black"}}>
                                                {e.minIELTSScore}
                                            </td>

                                            <td className="px-3 py-3 md:text-base text-sm"style={{border:"1px solid black"}}>
                                                {e.minTOEFLScore}
                                            </td>

                                            <td className="px-3 py-3 md:text-base text-sm"style={{border:"1px solid black"}}>
                                                {e.documentsRequired}
                                            </td>

                                            <td className="px-3 py-3 md:text-base text-sm"style={{border:"1px solid black"}}>
                                                {e.applicationDeadLine}
                                            </td>

                                           <td className="px-3 py-3 md:text-base text-sm"style={{border:"1px solid black"}}>
                                                {e.courseLink}
                                            </td>
                                            <td className="px-3 py-3 md:text-base text-sm"style={{border:"1px solid black"}}>
                                                {e.tutionLink}
                                            </td>

                                            <td className="px-3 py-3 md:text-base text-sm"style={{border:"1px solid black"}}>
                                                {e.applicationLink}
                                            </td> 

                                            <td className="px-3 py-3 md:text-base text-sm"style={{border:"1px solid black"}}>
                                                {e.numViews}
                                            </td> 

                                            <td className="px-3 py-3 md:text-base text-sm"style={{border:"1px solid black"}}>
                                                {e.numApplied}
                                            </td> 

                                            <td className="px-3 py-3 md:text-base text-sm"style={{border:"1px solid black"}}>
                                                {e.numAccepted}
                                            </td> 

                                            <td className="px-3 py-3 md:text-base text-sm"style={{border:"1px solid black"}}>
                                                {e.numShortlisted}
                                            </td> 

                                            <td className="px-3 py-3 md:text-base text-sm"style={{border:"1px solid black"}}>
                                                {e.numLikes}
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
                                        </div>
                                    );
                                })}
                        </tbody>
                    </table>
                  
                </div>
            </section>
          
        </>
    );
};

export default HOC(Courses);
