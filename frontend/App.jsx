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
import EvaluateDocuments from "./pages/EvaluateDocuments/EvaluateDocuments"
import ProjectDocuments from "./pages/ProjectDocuments/ProjectDocuments"
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
    console.log(user)

    if(window.location.pathname.includes(user)){
      if(user === "student"){
        setMenu(studentMenu)
      }else if(user === 'panelmember'){
        setMenu(panelmemberMenu)
      }else if(user === 'supervisor'){
        setMenu(supervisorMenu)
      }else if(user === 'admin'){
        setMenu(adminMenu)
      }else{
        navigate('/student/login')
      }
    }else{
      if(user === "student"){
        navigate('/student')
        setMenu(studentMenu)
      }else if(user === 'panelmember'){
        navigate('/staff/panel')
        setMenu(panelmemberMenu)
      }else if(user === 'supervisor'){
        navigate('/staff/supervisor')
        setMenu(supervisorMenu)
      }else if(user === 'admin'){
        navigate('/admin')
        setMenu(adminMenu)
      }else{
        navigate('/student/login')
      }
    }

  },[])


  const adminMenu = [
    { name: "Home", link: "/admin/admin-home" },
    { name: "Manage Users", link: "/admin/manage-users" },
    { name: "Student Groups", link: "/admin/student-groups" },
    { name: "Submission Types", link: "/admin/submission-types" },
    { name: "Documents", link: "/admin/documents" },
    { name: "Marking Schemes", link: "/admin/marking-schemes" },
  ];

  const panelmemberMenu = [
    { name: "samplePanel", link: "/staff/panel/sample" },
  ]

  const supervisorMenu = [
    { name: "Student Groups", link: "/staff/supervisor/std-groups" },
    { name: "Requests", link: "/staff/supervisor/requests" },
    { name: "Supervised Groups", link: "/staff/supervisor/supervised-groups" },
    { name: "Submitted Documents", link: "/staff/supervisor/project-docs" },
    { name: "Group Chats", link: "/staff/supervisor/group-chats" },
  ]

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
        <Header role={localStorage.getItem("role")?.toLocaleUpperCase()} />
        <Navigation menuItems={menu} />
      </div>
      <div className={(window.location.pathname.includes("login") || window.location.pathname.includes("register"))? "pagesLogin": "pages"}>
        <Routes>
          <Route path="/admin/manage-users" element={<ManageUsers />} />
          <Route path="/admin/submission-types" element={<SubmissionTypes />} />
          <Route path="/admin/documents" element={<Documents />} />
          <Route path="/staff/register" element={<StaffRegister />} />
          <Route path="/admin/student-groups" element={<StudentGroups />} />
          <Route path="/staff/panel/evaluate/presentation/:id" element={<EvaluatePresentation />} />
          <Route path="/staff/panel/presentation/groupList" element={<PresentationGroupList />} />
          <Route path="/staff/supervisor/std-groups" element={<StdGroups />} />
          <Route path="/staff/supervisor/requests" element={<Requests />} />
          <Route path="/admin/marking-schemes" element={<MarkingScheme />} />
          <Route path="/admin/admin-home" element={<AdminHome />} />
          <Route path="/staff/supervisor/evaluate-docs" element={<EvaluateDocuments />} />
          <Route path="/staff/supervisor/project-docs" element={<ProjectDocuments />} />
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
