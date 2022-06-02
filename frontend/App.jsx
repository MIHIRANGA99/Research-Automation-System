import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import "./App.css";
import Header from "./components/Header/Header";
import ManageUsers from "./pages/ManageUsers/ManageUsers";
import SubmissionTypes from "./pages/SubmissionTypes/SubmissionTypes";
import Documents from "./pages/Documents/Documents";

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
        </Routes>
      </div>
    </div>
  );
}

export default app;
