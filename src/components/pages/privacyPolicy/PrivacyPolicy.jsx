import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { IoMdClose } from "react-icons/io";
import { AiOutlineEdit, AiFillCamera } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import { toast } from "react-toastify";
import auth from "../../Auth";

import HOC from "../../layout/HOC";
import axios from "axios";
import BaseUrl from "../../BaseUrl";

const PrivacyPolicy = () => {
  const [data, setData] = useState([]);
  const [board, setBoard] = useState([]);

  // const navigate = useNavigate();

  // const classes = useStyles();

  useEffect(() => {
    fetchUsers();
    // deleteUsers();
  }, []);



  const fetchUsers = async () => {

    try {
      const { data } = await axios.get("https://aashish-yocket-api.herokuapp.com/api/admin/privacy-policy",
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

  return (
    <>

 {/* <h1 className="tracking-widest text-slate-900 font-semibold uppercase ">Privacy Policy</h1>
      {
        data?.data?.map((privacy) => {
          const { id,content } = privacy;
          return(
            <div className="card" key={id}>
             <p  className="tracking-wider text-gray-900 ">{content.slice(0,20)}</p>
            </div>
          )
        })
      }  */}



        <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Privacy Policy 
         

               {/* {

            data.map((i) => {
              return (
                <p>{i.content}</p>
              )
            })


          }    */}

            <section id="basic">
              &nbsp;&nbsp;
              &nbsp;&nbsp;
              <div className=" bg-gray-300 text-black center" style={{ height: "200px" }} >

                <p >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, //
                  minus totam! Ad labore voluptatem sed nisi illo est, soluta nulla //
                  repudiandae nobis blanditiis adipisci eius, at aliquid quidem. //
                  Doloremque quia tenetur ratione repellendus libero voluptatum //
                  explicabo numquam perferendis ipsa! Nam accusantium nemo illum quo
                  // odit. Alias impedit quisquam rerum porro nulla possimus repellat
                  // vero magni nihil accusantium nemo omnis reprehenderit tempore
                  iure // ipsum, dolore esse minus perferendis? Quis aut, ex sit
                  accusamus // aliquam cum ipsum ab excepturi ipsa dolores eius
                  numquam est, // adipisci odit error distinctio. Nihil, minus
                  voluptates. Beatae // expedita aspernatur maxime, minima blanditiis
                  sed provident ipsam
                </p>
              </div>
            </section>
           </span>
        </div>
      </section> 
    </>
  );
};

export default HOC(PrivacyPolicy);



