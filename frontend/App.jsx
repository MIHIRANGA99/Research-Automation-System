import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import "./App.css";
import Header from "./components/Header/Header";
import StaffRegister from "./components/Staff/StaffRegister";
import EvaluatePresentation from "./components/Panel/EvaluatePresentation";
import PresentationGroupList from "./components/Panel/PresentationGroupList";

function app() {

  const adminMenu = [
    { name: "Home", link: "/home" },
    { name: "Manage Users", link: "/manage-users" },
    { name: "Student Groups", link: "/student-groups" },
    { name: "Submission Types", link: "/submission-types" },
    { name: "Panels", link: "/panels" },
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
          <Route path="/components" element={<></>} />
          <Route path="/staff/register" element={<StaffRegister/>} />
          <Route path="/staff/panel/evaluate/presentation/:id" element={<EvaluatePresentation/>} />
          <Route path="/staff/panel/presentation/groupList" element={<PresentationGroupList/>} />
        </Routes>
      </div>
    </div>
  );
}

export default app;
