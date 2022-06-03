import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import ManageUsers from "./pages/ManageUsers/ManageUsers";
import SubmissionTypes from "./pages/SubmissionTypes/SubmissionTypes";
import Documents from "./pages/Documents/Documents";
import StaffRegister from "./components/Staff/StaffRegister";
import EvaluatePresentation from "./components/Panel/EvaluatePresentation";
import PresentationGroupList from "./components/Panel/PresentationGroupList";
import StudentGroups from "./pages/StudentGroups/StudentGroups";
import MarkingScheme from "./pages/MarkingScheme/MarkingScheme";
import "./App.css";

function app() {

  const adminMenu = [
    { name: "Home", link: "/home" },
    { name: "Manage Users", link: "/manage-users" },
    { name: "Student Groups", link: "/student-groups" },
    { name: "Submission Types", link: "/submission-types" },
    { name: "Panels", link: "/panels" },
    { name: "Documents", link: "/documents" },
    { name: "Marking Schemes", link: "/marking-schemes" },
  ];

  return (
    <div className="main">
      <div className="side-bar">
        <Header role='ADMIN' />
        <Navigation menuItems={adminMenu} />
      </div>
      <div className="pages">
        <Routes>
          <Route path="/manage-users" element={<ManageUsers />} />
          <Route path="/submission-types" element={<SubmissionTypes />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/staff/register" element={<StaffRegister/>} />
          <Route path="/student-groups" element={<StudentGroups />} />
          <Route path="/marking-schemes" element={<MarkingScheme />} />
          <Route path="/staff/panel/evaluate/presentation/:id" element={<EvaluatePresentation/>} />
          <Route path="/staff/panel/presentation/groupList" element={<PresentationGroupList/>} />
        </Routes>
      </div>
    </div>
  );
}

export default app;
