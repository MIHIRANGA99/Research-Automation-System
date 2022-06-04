import React, { useEffect, useState } from "react";
import GroupCard from "../../components/Cards/GroupCard";
import {
  getGroups
} from "../../controllers/studentGroupController";
import "./StudentGroups.css";

const StudentGroups = () => {
  const [groupData, setGroupData] = useState([]);
  const [staffData, setStaffData] = useState([]);
  const [allocatedArray, setAllocatedArray] = useState([]);
  const [popup, setPopup] = useState(false);

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
              <GroupCard grpID={group._id} grpName={group.groupName} panel={group.panel} students={group.students} key ={index} />
          )
          )}
        </div>
      </div>
    </>
  );
};

export default StudentGroups;
