import React, { useEffect, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import HOC from "../../layout/HOC";
import axios from "axios";
import auth from "../../Auth";
import BaseUrl from "../../BaseUrl";
import { toast } from "react-toastify";
import { IoMdClose } from "react-icons/io";
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Radio from '@material-ui/core/Radio';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));



const EditProfile = () => {

    const classes = useStyles();

  const [popup, setPopup] = useState(false);
  const [users, setUsers] = useState([]);
  const [data, setData] = useState([]);
  const [a, setA] = useState([]);
  const [p, setP] = useState([]);

  const fetchUsers = async () => {
    // const url = BaseUrl() + "/api/admin/users";
    try {
      // const res = await axios.get(url, auth);
      // setUsers(res?.data);
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteuser = async (_id) => {
    // const url = BaseUrl() + `/api/admin/users/${_id}`;
    try {
      // const res = await axios.delete(url, auth);
      // toast.success("User Deleted Success");
      fetchUsers();
    } catch (e) {
      setData(e.message);
      toast.error(e.name);
    }
  };

  return (
    <>
      <section>
       
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white " >
      
          <span className="tracking-widest text-slate-900 font-semibold uppercase font-bold text-xl pt-12" >
         Edit Profile
         
         <Container component="main" maxWidth="xs">
      <CssBaseline />
      
     <div className={classes.paper}>
     <div style={{ marginLeft: "350px" }}>
        <Avatar className={classes.avatar}>
          <AccountCircleIcon />
        </Avatar>
        </div>
        <Typography component="h1" variant="h5" style={{width:"200px",marginLeft:"430px"}}>
          Upload profile
        </Typography>
      
         <form className={classes.form} noValidate>
                <h1 className="">
             Personal information
            </h1>
                
                <div className="" style={{marginTop:"20px",display:"flex"}} >
                <div className="" style={{marginRight:"20px"}}>
                  <label className="px-0 ">Name</label>
                  
                  <TextField type="text" placeholder="Rahul Jain" style={{width:"150px"}} />
                  </div>
                
                <br/>
                <div className="" style={{marginLeft:"100px"}}>
                  <label className="px-0 ">Email id</label>
                
                  <TextField type="text" placeholder="rahuljain@gmail.com" style={{width:"150px"}} />
                  </div>
                  
            
                <br/>
                <div className="" style={{marginLeft:"100px"}}>
                  <label className="px-0 ">Phone no</label>
                  <TextField type="text" placeholder="+91 9710235000" style={{width:"150px"}}/>
                  </div>
                </div>
                
                
         {/* <div className="flex flex-col justify-center"> */}
         <h1 className="text-center font-bold text-xl pt-10"
         style={{width:"150px"}}>
              Education details
            </h1>
            &nbsp;&nbsp;
              &nbsp;&nbsp;
         
               <div className="" style={{display:"flex"}}> 
                <div className="" >
                  <label className="px-0 ">County</label>
                  <select className="w-52 bg-gray-300 text-black rounded-lg"style={{height:"30px",width:"200px"}}>
                 
                  <option value="United Kingdom" control={<Radio />}>United Kingdom</option>
                  <option value="Canada" control={<Radio />}>Canada</option> 
                  <option value="United states" control={<Radio />}>United states</option>
                  </select>
                </div>
                <br/>
                <div className="md:grid grid-cols-2">
               
                <br/>
                <div className="" style={{marginLeft:"50px"}}>
                  <label className="px-0 ">Subject</label>
                  <input className="w-52 bg-gray-300 text-black rounded-lg" placeholder="Data science" style={{height:"30px",width:"250px"}}></input>
                  </div>
             
                </div>
                <br/>
               
                
                &nbsp;&nbsp;
              &nbsp;&nbsp;
              <div className=""style={{marginLeft:"340px"}} >
                  <label className="px-0">College name</label>
                  <input className="w-52 bg-gray-300 text-black rounded-lg"placeholder="Harvard University" style={{height:"30px",width:"250px"}}></input>
                  </div>
              
              </div>
                <br/>
                
                <div className=""style={{display:"flex"}}>
                &nbsp;&nbsp;
              &nbsp;&nbsp;
              <div className=""  >
                  <label className="px-0"style={{marginTop:"20px"}}>Your specilization</label>
                  <input className="w-52 bg-gray-300 text-black rounded-lg"placeholder="Enter here" style={{height:"30px",width:"200px",marginTop:"38px"}}></input>
                  </div>
                {/* </div> */}
               
                <br/>
               
               <div className=""> 
                &nbsp;&nbsp;
              &nbsp;&nbsp;
              <div className=""style={{marginLeft:"40px"}}>
                  <label className="px-0 ">Final score/expected score</label>
                  <thead>
                  <tr className=" ">
                  <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  <input className="w-52 bg-gray-300 text-black rounded-lg"placeholder="GPA" style={{height:"20px",width:"50px"}}></input>
                </th>
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  <input className="w-52 bg-gray-300 text-black rounded-lg"placeholder="CGPA" style={{height:"20px",width:"50px"}}></input>
                 </th>
                 <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  <input className="w-52 bg-gray-300 text-black rounded-lg" placeholder="Percentage" style={{height:"20px",width:"60px"}}></input>
                  </th>
                  </tr>
              </thead>
             
                <div className="">  
                  <input className="w-52 bg-gray-300 text-black rounded-lg" placeholder="200" style={{height:"30px",width:"250px"}}></input>
                </div>
                </div>
                </div>

                <br/>
                <div className="">
                &nbsp;&nbsp;
              &nbsp;&nbsp;
                <div className=""style={{marginLeft:"50px"}}>
            
                  <label className="px-0 ">English test score</label>
                  
                  <thead>
                  <tr className=" ">
                  <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  <input className="w-52 bg-gray-300 text-black rounded-lg"placeholder="TOEFL" style={{height:"20px",width:"50px"}}></input>
                </th>
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  <input className="w-52 bg-gray-300 text-black rounded-lg"placeholder="IELTS" style={{height:"20px",width:"50px"}}></input>
                 </th>
                 <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  <input className="w-52 bg-gray-300 text-black rounded-lg" placeholder="PTE" style={{height:"20px",width:"60px"}}></input>
                  </th>
                  </tr>
              </thead>
              <div className="md:grid grid-cols-2">
                <div className="">  
                  <input className="w-52 bg-gray-300 text-black rounded-lg" placeholder="200" style={{height:"30px",width:"250px"}}></input>
                </div>
                </div>
                </div>
                </div>
                </div>
                <br/>
               
                <div className="">
                &nbsp;&nbsp;
              &nbsp;&nbsp;
              <div className="">
                  <label className="px-0 ">Apptitude test score</label>
                  <thead>
                  <tr className=" ">
                  <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  <input className="w-52 bg-gray-300 text-black rounded-lg"placeholder="GRE" style={{height:"20px",width:"50px"}}></input>
                </th>
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  <input className="w-52 bg-gray-300 text-black rounded-lg"placeholder="GMAT" style={{height:"20px",width:"50px"}}></input>
                 </th>
                 <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  <input className="w-52 bg-gray-300 text-black rounded-lg" placeholder="Not taken yet" style={{height:"20px",width:"70px"}}></input>
                  </th>
                  </tr>
              </thead>
              <div className="md:grid grid-cols-2">
                <div className="">  
                  <input className="w-52 bg-gray-300 text-black rounded-lg" placeholder="200" style={{height:"30px",width:"250px"}}></input>
                </div>
                </div>
                </div>
                </div>
               
                {/* </div> */}
               
              
          <Button 
          style={{height:"50px",width:"350px",marginLeft:"220px"}}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Update
          </Button>
        
        </form>
      </div>
      
      <Box mt={5}>
      </Box>
      </Container>
   
    </span>
      </div>
     
     </section>
    </>
  );
};

export default HOC(EditProfile);
        
     
