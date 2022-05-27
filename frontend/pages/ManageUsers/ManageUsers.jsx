import UserCard from "../../components/Cards/UserCard";
import { getUsers } from "../../controllers/userController";
import React, { useEffect, useState } from "react";
import "./manageUsers.css";

const ManageUsers = () => {

  const [userData, setUserData] = useState([]);
  const [pop, setPop] = useState(false);

  useEffect(() => {
    getUsers
      .then((res) => setUserData(res.data))
      .catch((e) => console.log(e.message));
  });

  return (
    <div className="userList">
      <div className="headings">
        <label className="heading">Name</label>
        <label className="heading">Student ID</label>
        <label className="heading">Faculty</label>
        <label className="heading">Role</label>
      </div>
      {userData.map((user, index) => {
        return (
          <div key={index}>
          <UserCard
            role="Student"
            idNo={user.student_id}
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
