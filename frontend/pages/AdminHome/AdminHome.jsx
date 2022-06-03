import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { getStudents, getStaff } from "../../controllers/userController";
import { getGroups } from "../../controllers/studentGroupController";
import "./AdminHome.css";

Chart.register(ArcElement, Tooltip, Legend);

const AdminHome = () => {
  const [studentData, setStudentData] = useState([]);
  const [staffData, setStaffData] = useState([]);
  const [groupData, setGroupData] = useState([]);

  useEffect(() => {
    //get students
    getStudents
      .then((res) => {
        setStudentData(res.data);
      })
      .catch((e) => {
        console.log(e.message);
      });

    //get staff
    getStaff
      .then((res) => {
        setStaffData(res.data);
      })
      .catch((e) => {
        console.log(e.message);
      });

    //get groups
    getGroups()
      .then((res) => {
        setGroupData(res.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  const chartData = {
    labels: ["assigned", "unassigned"],
    datasets: [
      {
        label: "My First Dataset",
        data: [
          groupData.filter((d) => d.panel.length > 0).length,
          groupData.filter((d) => d.panel.length === 0).length,
        ],
        backgroundColor: ["#FFCE97", "#533c2c2a"],
        borderColor: ["#FFCE97"],
        borderWidth: 0,
        hoverOffset: 2,
      },
    ],
  };

  return (
    <div className="adminHomeMain">
      <div className="chartCard">
        <label className="cardHeading">Panel Assigned vs Panel Unassigned</label>
        <Doughnut className="chart" data={chartData} />
      </div>
      <div className="numbers">
        <div className="stateCard">
          <label className="cardHeading">Registered Students</label>
          <label className="cardNumber">{studentData.length}</label>
        </div>
        <div className="stateCard">
          <label className="cardHeading">Student Groups</label>
          <label className="cardNumber">{groupData.length}</label>
        </div>
        <div className="stateCard">
          <label className="cardHeading">Supervisors</label>
          <label className="cardNumber">
            {staffData.filter((m) => m.role === "supervisor").length}
          </label>
        </div>
        <div className="stateCard">
          <label className="cardHeading">Panel Members</label>
          <label className="cardNumber">
            {staffData.filter((m) => m.role === "panelMember").length}
          </label>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
