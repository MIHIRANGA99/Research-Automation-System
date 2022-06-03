import React, { useEffect, useState } from "react";
import {
  getGroups,
  updateGroup,
} from "../../controllers/studentGroupController";
import { getStaff } from "../../controllers/userController";
import "./StdGroups.css";

const StudentGroups = () => {
  const [groupData, setGroupData] = useState([]);

  useEffect(() => {
    getGroups()
      .then((res) => {
        console.log(res.data);
        setGroupData(res.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  return (
    <>
      <div className="GroupPage">
        <div className="groupsGrid">
          {groupData.map((group, index) => (
            <div key={index} className="groupCard">
              <label style={{ fontSize: "20px" }}>{group.groupName}</label>
              <div className="layout">
                <div className="listView">
                  <div style={{ color: "#FFCE97" }}>Group</div>
                  {group.students.map((student, idx) => (
                    <label key={idx}>{student}</label>
                  ))}
                </div>
                <div className="listView">
                  <div style={{ color: "#FFCE97" }}>Panel</div>
                  {group.panel?.map((student, idx) => (
                    <label key={idx}>{student}</label>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StudentGroups;
