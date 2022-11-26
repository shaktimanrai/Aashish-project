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
import { useNavigate } from "react-router-dom";


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



const VisaAndUniversity = () => {

    const navigate = useNavigate();
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
          
        </>
    );
};

export default HOC(VisaAndUniversity);



