import UserCard from "../../components/Cards/UserCard";
import { getStaff, getStudents } from "../../controllers/userController";
import React, { useEffect, useState } from "react";
import "./manageUsers.css";

const ManageUsers = () => {

  const [staffData, setStaffData] = useState([]);
  const [studentData, setStudentData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [pop, setPop] = useState(false);

  useEffect(() => {
    getStaff
      .then((res) => setStaffData(res.data))
      .catch((e) => console.log(e.message));

    getStudents
      .then((res) => setStudentData(res.data))
      .catch((e) => console.log(e.message));
  }, []);

  useEffect(() => {
    setUserData([...staffData, ...studentData])
  }, [staffData, studentData])

  return (
    <div className="userList">
      <div className="headings">
        <label className="heading">Name</label>
        <label className="heading">User ID</label>
        <label className="heading">Faculty</label>
        <label className="heading">Role</label>
      </div>
      {userData.map((user, index) => {
        return (
          <div key={index}>
          <UserCard
            role={user.role? user.role: "Student"}
            idNo={user.student_id? user.student_id: user.staff_id}
            faculty={user.faculty}
            name={user.name}
            popup={pop}
            objID={user._id}
          />
          </div>
        );
      })}
    </div>
  );
};

export default ManageUsers;
