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




const Trainers = () => {
  const [popup, setPopup] = useState(false);
  const [data, setData] = useState([]);
  const [name, setA] = useState([]);
  const [experience, setB] = useState([]);
  const [languages, setC] = useState([]);
  const [consultationFeePerMinute, setD] = useState([]);
  const [totalConsultationMins, setE] = useState([]);
  const [skills, setF] = useState([]);
  const [aboutMe, setG] = useState([]);
  const [starRating, setH] = useState([]);
  const [profileImage, setI] = useState([]);
  const [country, setL] = useState([]);
  const [email, setJ]=useState([]);
  const [role, setK]=useState([]);

  // const navigate = useNavigate();

  // const classes = useStyles();

  useEffect(() => {
    fetchUsers();
    postData();
    //  trainersUsers();
  }, []);



  const fetchUsers = async () => {

    try {
      const { data } = await axios.get("https://aashish-yocket-api.herokuapp.com/api/admin/trainers",
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

  const postData = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("https://aashish-yocket-api.herokuapp.com/api/admin/trainers",
      {name,experience,languages,consultationFeePerMinute,totalConsultationMins,skills,aboutMe,starRating,profileImage,email,role,country},
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
  //         const { data } = await axios.delete(`https://aashish-yocket-api.herokuapp.com/api/admin/trainers/${id}`,
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
            Trainers
          </span>

          <button
            onClick={() => {
              //   setEdit("");
              setPopup(!popup);
            }}
            className="md:py-2 px-3 md:px-4 py-1 rounded-full bg-[rgb(240,72,88)] text-white tracking-wider"
          >
            Add Trainers
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
                Add Trainers
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
                  name
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
                  experience
                </label>
                <input
                  required
                  type="text"
                  onChange={(e) => setB(e.target.value)}
                  className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                />
              </div>
              <div className="inline-flex  w-full flex-col">
                <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                  languages
                </label>
                <input
                  required
                  type="text"
                  onChange={(e) => setC(e.target.value)}
                  className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                />
              </div>
              <div className="inline-flex  w-full flex-col">
                <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                  FeePerMinute
                </label>
                <input
                  required
                  type="text"
                  placeholder=""
                  onChange={(e) => setD(e.target.value)}
                  className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                />
              </div>
              <div className="inline-flex  w-full flex-col">
                <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                  totalConsultationMins
                </label>
                <input
                  required
                  type="text"
                  placeholder=""
                  onChange={(e) => setE(e.target.value)}
                  className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                />
              </div>
              <div className="inline-flex  w-full flex-col">
                <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                  Skills
                </label>
                <input
                  required
                  type="text"
                  placeholder=""
                  onChange={(e) => setF(e.target.value)}
                  className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                />
              </div>

              <div className="inline-flex  w-full flex-col">
                <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                  aboutMe
                </label>
                <input
                  required
                  type="text"
                  placeholder=""
                  onChange={(e) => setG(e.target.value)}
                  className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                />
              </div>
              <div className="inline-flex  w-full flex-col">
                <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                  StartRating
                </label>
                <input
                  required
                  type="text"
                  placeholder=""
                  onChange={(e) => setH(e.target.value)}
                  className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                />
              </div>
              <div className="inline-flex  w-full flex-col">
                <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                  profileImage
                </label>
                <input
                  required
                  type="file"
                  placeholder=""
                  onChange={(e) => setI(e.target.files[0])}
                  className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                />
              </div>
              <div className="inline-flex  w-full flex-col">
                <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                  email
                </label>
                <input
                  required
                  type="text"
                  placeholder=""
                  onChange={(e) => setJ(e.target.value)}
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
                  onChange={(e) => setK(e.target.value)}
                  className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                />
              </div>

              <div className="inline-flex  w-full flex-col">
                <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                country
                </label>
                <input
                  required
                  type="text"
                  placeholder=""
                  onChange={(e) => setL(e.target.value)}
                  className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                />
              </div>

              <button
                type="submit"
                value="Add"
                onClick={postData}
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
                  profileImage
                </th>
                <th className="px-1.5  py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  name
                </th>
                <th className="px-1.5 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  Experience
                </th>
                <th className="px-1.5  py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  Languages
                </th>
                <th className="px-1.5  py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  FeePerMinute
                </th>
                <th className="px-1.5  py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  Total Consultation Mins
                </th>
                <th className="px-1.5  py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  Skills
                </th>
                <th className="px-1.5  py-3 title-font tracking-widest font-medium md:text-base text-sm ">
                  About
                </th>
                <th className="px-1.5  py-3 title-font tracking-widest font-medium md:text-base text-sm ">
                  StartRating
                </th>
                <th className="px-1.5  py-3 title-font tracking-widest font-medium md:text-base text-sm ">
                  email
                </th>
                <th className="px-4  py-3 title-font tracking-widest font-medium md:text-base text-sm ">
                  Role
                </th>
                <th className="px-4  py-3 title-font tracking-widest font-medium md:text-base text-sm ">
                  country
                </th>
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>

              {

                data?.trainers?.map((e, i) => {

                  return (

                    <tr key={i} className="tracking-wider text-gray-900 ">

                      <td className="px-3 py-3 md:text-base text-sm" style={{ border: "1px solid black" }}>
                        {/* <img
                          src={
                            "https://aashish-yocket-api.herokuapp.com/images/trainer/profile-1662968166219.png"
                          }
                          alt=""
                          className="xl:w-36 shadow-xl rounded-lg lg:w-32 md:w-28 w-24"
                        /> */}
                      </td>

                      <td className="px-3 py-3 md:text-base text-sm" style={{ border: "1px solid black" }}>
                        {e.name}
                      </td>

                      <td className="px-3 py-3 md:text-base text-sm" style={{ border: "1px solid black" }}>
                        {e.experience}
                      </td>

                      <td className="px-3 py-3 md:text-base text-sm" style={{ border: "1px solid black" }}>
                        {e.languages}
                      </td>

                      <td className="px-3 py-3 md:text-base text-sm" style={{ border: "1px solid black" }}>
                        {e.consultationFeePerMinute}
                      </td>

                      <td className="px-3 py-3 md:text-base text-sm" style={{ border: "1px solid black" }}>
                        {e.totalConsultationMins}
                      </td>

                      <td className="px-3 py-3 md:text-base text-sm" style={{ border: "1px solid black" }}>
                        {e.skills}
                      </td>

                      <td className="px-3 py-3 md:text-base text-sm" style={{ border: "1px solid black" }}>
                        {e.aboutMe}
                      </td>

                      <td className="px-3 py-3 md:text-base text-sm" style={{ border: "1px solid black" }}>
                        {e.starRating}
                      </td>

                      <td className="px-3 py-3 md:text-base text-sm" style={{ border: "1px solid black" }}>
                        {e.email}
                      </td>

                      <td className="px-3 py-3 md:text-base text-sm" style={{ border: "1px solid black" }}>
                        {e.role}
                      </td>

                      <td className="px-3 py-3 md:text-base text-sm" style={{ border: "1px solid black" }}>
                        {e.country}
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

export default HOC(Trainers);
