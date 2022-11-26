import {Routes, Route, Link } from "react-router-dom";
import Login from "./components/forms/Login";
import Dashboard from "./components/pages/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Student from "./components/pages/student/Student";
import EditProfile from "./components/pages/editprofile/EditProfile";
import Favourites from "./components/pages/favourites/Favourites";
import PrivacyPolicy from "./components/pages/privacyPolicy/PrivacyPolicy";
import AboutUs from "./components/pages/aboutus/AboutUs";
import Feedback from "./components/pages/feedback/Feedback";
import RateUs from "./components/pages/rateus/RateUs";
import Counsellor from "./components/pages/counsellor/Counsellor";
import Services from "./components/pages/services/Services";
import Channel from "./components/pages/channel/Channel";
import Admin from "./components/pages/admin/Admin";
import Test from "./components/pages/test/Test";
import VisaAndUniversity from "./components/pages/visaanduniversity/VisaAndUniversity";
import ProfileBuilding from "./components/pages/profilebuilding/ProfileBuilding";
import Loan from "./components/pages/loan/Loan";
import Tricketing from "./components/pages/tricketing/Tricketing";
import UgDetails from "./components/pages/Ugdetails/UgDetails";
import PgDetails from "./components/pages/pgdetails/PgDetails";
import Study from "./components/pages/study/Study";
import Trainers from "./components/pages/trainers/Trainers";
import University from "./components/pages/university/University";
import Courses from "./components/pages/courses/Courses";
import Comments from "./components/pages/comments/Comments";
import Appointments from "./components/pages/appointments/Appointments";



function App() {
  function displayHide() {
    document.getElementById("link").style.display = "none";
  }

  return (
    <>
 
      <ToastContainer />
     
      <Link to="/login" id="link" onClick={() => displayHide()}>
        Login
      </Link>
      
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/student" element={<Student />} />
        <Route path="/study" element={<Study />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/rateus" element={<RateUs />} />
        <Route path="/counsellor" element={<Counsellor />} />
        <Route path="/services" element={<Services />} />
        <Route path="/channel" element={<Channel />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/testScore" element={<Test />} />
        <Route path="/visaAndUniversity" element={<VisaAndUniversity />} />
        <Route path="/profileBuildingPrograms" element={<ProfileBuilding />} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/tricketingAndForex" element={<Tricketing />} />
        <Route path="/Ug-details" element={<UgDetails />} />
        <Route path="/Pg-details/:id" element={<PgDetails />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/university" element={<University />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/appointments" element={<Appointments />} />
       



       
      </Routes>
     
    </>
  );
}

export default App;
