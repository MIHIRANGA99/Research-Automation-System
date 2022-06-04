import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import "./App.css";
import Header from "./components/Header/Header";
import ManageUsers from "./pages/ManageUsers/ManageUsers";
import SubmissionTypes from "./pages/SubmissionTypes/SubmissionTypes";
import Documents from "./pages/Documents/Documents";
import StaffRegister from "./components/Staff/StaffRegister";
import EvaluatePresentation from "./components/Panel/EvaluatePresentation";
import PresentationGroupList from "./components/Panel/PresentationGroupList";
import EvaluateTopic from "./components/Panel/EvaluateTopic";
import TopicGroupList from "./components/Panel/TopicGroupList";

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

  const panelMenu = [
    { name: "Evaluate Topics", link: "/staff/panel/topic/groupList" },
    { name: "Evaluate Presentation", link: "/staff/panel/presentation/groupList" },
  ];

  return (
    <div className="main">
      {/*<div className="side-bar">*/}
      {/*  <Header role='ADMIN' />*/}
      {/*  <Navigation menuItems={adminMenu} />*/}
      {/*</div>*/}
      <div className="side-bar">
        <Header role='PANEL' />
        <Navigation menuItems={panelMenu} />
      </div>
      <div className="pages">
        <Routes>
          <Route path="/manage-users" element={<ManageUsers />} />
          <Route path="/submission-types" element={<SubmissionTypes />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/staff/register" element={<StaffRegister/>} />
          <Route path="/staff/panel/evaluate/presentation/:id" element={<EvaluatePresentation/>} />
          <Route path="/staff/panel/presentation/groupList" element={<PresentationGroupList/>} />
          <Route path="/staff/panel/topic/groupList" element={<TopicGroupList/>} />
          <Route path="/staff/panel/evaluate/topic/:id" element={<EvaluateTopic/>} />
        </Routes>
      </div>
    </div>
  );
}

export default app;
