import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { IoMdClose } from "react-icons/io";
import { AiOutlineEdit, AiFillCamera } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import { toast } from "react-toastify";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


import HOC from "../../../components/layout/HOC";
import axios from "axios";
import BaseUrl from "../../BaseUrl";
import auth from "../../Auth";

const Favourites = () => {
  //   const [users,setUsers]=useState([]);


  //   const getUsers= async()=>{
  //     const response= await fetch("");
  //     setUsers (await response.json());
  //   }

  //   useEffect(()=>{
  // getUsers();
  //   },[]);


  const [prop, setProp] = useState([]);
  const [popup, setPopup] = useState(false);
  let token = localStorage.getItem("Shaft");
  const [edit, setEdit] = useState("");
  const [banners, setBanners] = useState([]);

  const [image, setImage] = useState();
  const [name, setName] = useState("");

  const fetchBanners = async () => {
    const url = BaseUrl() + "/banner/get/banner";
    try {
      const res = await axios.get(url, auth);
      console.log("res", res);
      setBanners(res.data);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  const addBanner = async (e) => {
    e.preventDefault();
    const url = BaseUrl() + "/banner/add/banner";
    const fd = new FormData();
    fd.append("myBanner", image);
    fd.append("bannername", name);

    try {
      const res = await axios.post(url, fd, auth);
      console.log("res", res);
      fetchBanners();
    } catch (err) {
      console.log("err", err);
    }
  };

  const deleteBanner = async (id) => {
    const url = BaseUrl() + `/banner/delete/banner/${id}`;

    try {
      const res = await axios.delete(url, auth);
      toast.success("Deleted Successfully");
      fetchBanners();
    } catch (err) {
      console.log("err", err);
      toast.error("Please try again");
    }
  };

  return (
    <>
      <span className="tracking-widest text-slate-900 font-semibold uppercase font-bold text-xl pt-12">
        Favourites
        {/* <div className=""style={{marginLeft:"100px"}}> */}
        <div class="card mb-3 rounded-lg" style={{ marginLeft: "200px", height: "100px", marginTop: "20px",width:"350px" }}>
        <div className=""style={{marginLeft:"325px"}}>
<FavoriteBorderIcon/>
</div>
          <div class="row g-0">
            <div class="col-md-2">
              <img src="" class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
             
                <h5 class="card-title">Cornell University</h5>
             
                {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                <p class="card-text"style={{marginTop:"25px"}}><small class="text-muted">New york,United states</small></p>
              
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-3 rounded-lg"style={{marginLeft: "200px", height: "100px", marginTop: "20px",width:"350px"  }}>
        <div className=""style={{marginLeft:"325px"}}>
<FavoriteBorderIcon/>
</div>
<div class="row g-0">
  <div class="col-md-2">
    <img src="" class="img-fluid rounded-start" alt="..." />
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">Cornell University</h5>
      {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
      <p class="card-text"style={{marginTop:"25px"}}><small class="text-muted">New york,United states</small></p>
     
    </div>
  </div>
</div>
</div>

<div class="card mb-3 rounded-lg" style={{ marginLeft: "200px", height: "100px", marginTop:"20px",width:"350px"  }} >
  <div className=""style={{marginLeft:"325px"}}>
<FavoriteBorderIcon/>
</div>
<div class="row g-0">
  <div class="col-md-2">
    <img src="" class="img-fluid rounded-start" alt="..." />
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">Cornell University</h5>
      {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
      <p class="card-text"style={{marginTop:"25px"}}><small class="text-muted">New york,United states</small >
   
      </p>
    </div>
  </div>
</div>
</div>

<div class="card mb-3 rounded-lg" style={{ marginLeft: "200px", height: "100px", marginTop:"20px",width:"350px"  }} >
  <div className=""style={{marginLeft:"325px"}}>
<FavoriteBorderIcon />
</div>
<div class="row g-0">
  <div class="col-md-2">
    <img src="" class="img-fluid rounded-start" alt="..." />
  </div>
  <div class="col-md-8">
    <div class="card-body">
     
      <h5 class="card-title">Cornell University</h5>
      {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
      <p class="card-text"style={{marginTop:"25px"}}><small class="text-muted">New york,United states</small >
      </p>
    </div>
  </div>
</div>
</div>
{/* </div> */}


      </span>

    </>
  );
};

export default HOC(Favourites);


