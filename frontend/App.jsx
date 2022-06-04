import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import ManageUsers from "./pages/ManageUsers/ManageUsers";
import SubmissionTypes from "./pages/SubmissionTypes/SubmissionTypes";
import Documents from "./pages/Documents/Documents";
import StaffRegister from "./components/Staff/StaffRegister";
import EvaluatePresentation from "./components/Panel/EvaluatePresentation";
import PresentationGroupList from "./components/Panel/PresentationGroupList";
import StudentLogin from "./pages/Login/login"
import StudentSignup from "./pages/Student/registration"
import CreateGroups from "./pages/StudentGroups/CreateGroup";
import StudentGroups from "./pages/StudentGroups/StudentGroups";
import StdGroups from "./pages/StdGroups/StdGroups";
import Requests from "./pages/Requests/Requests";
import MarkingScheme from "./pages/MarkingScheme/MarkingScheme";
import "./App.css";
import AdminHome from "./pages/AdminHome/AdminHome";
import TopicRegister from "./pages/TopicRegister/topicRegister"
import { Button } from "@mui/material";

function app() {

  const navigate = useNavigate()

  const [menu, setMenu] = useState([])
  
  useEffect(() => {
    const user = localStorage.getItem("role")
    console.log(window.location.pathname)

    if(window.location.pathname.includes(user)){
        setMenu(studentMenu)
    }else{
      if(user === "student"){
        navigate('/student')
        setMenu(studentMenu)
      }else if(user === 'admin'){
        navigate('/staff')
        setMenu(adminMenu)
      }
    }

  },[])


  const adminMenu = [
    { name: "Home", link: "/admin-home" },
    { name: "Manage Users", link: "/manage-users" },
    { name: "Student Groups", link: "/student-groups" },
    { name: "Submission Types", link: "/submission-types" },
    { name: "Panels", link: "/panels" },
    { name: "Documents", link: "/documents" },
    { name: "Marking Schemes", link: "/marking-schemes" },
  ];  

  const studentMenu = [
    { name: "Create Student Group", link: "/student/create-group" },
    { name: "Register Research Topic", link: "/student/topic-registration" },
    { name: "Request Supervisor", link: "/student/request-supervisor" },
    { name: "Submit Documents", link: "/student/submit-document" },
    { name: "Download Templates", link: "/student/download-templates" }
  ];

  return (
    <div className="main">
      <div className="side-bar">
        <Header role={localStorage.getItem("role")} />
        <Navigation menuItems={menu} />
        <Button variant="contained" onClick={() => localStorage.removeItem("role")} >Logout</Button> 
      </div>
      <div className="pages">
        <Routes>
          <Route path="/manage-users" element={<ManageUsers />} />
          <Route path="/submission-types" element={<SubmissionTypes />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/staff/register" element={<StaffRegister />} />
          <Route path="/student-groups" element={<StudentGroups />} />
          <Route path="/staff/panel/evaluate/presentation/:id" element={<EvaluatePresentation />} />
          <Route path="/staff/panel/presentation/groupList" element={<PresentationGroupList />} />
          <Route path="/staff/supervisor/std-groups" element={<StdGroups />} />
          <Route path="/staff/supervisor/requests" element={<Requests />} />
          <Route path="/marking-schemes" element={<MarkingScheme />} />
          <Route path="/admin-home" element={<AdminHome />} />
          <Route path="/staff/panel/evaluate/presentation/:id" element={<EvaluatePresentation/>} />
          <Route path="/staff/panel/presentation/groupList" element={<PresentationGroupList/>} />
          <Route path="/student/register" element={<StudentSignup />}/>
          <Route path="/student/login" element={<StudentLogin/>}/>
          <Route path="/student/register" element={<StudentSignup/>} />
          <Route path="/student/create-group" element={<CreateGroups/>}/>
          <Route path="/student/topic-registration" element={<TopicRegister/>}/>
        </Routes>
      </div>
    </div>
    
  );
}

export default app
