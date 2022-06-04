import RequestCard from "../../components/Cards/SupervisingGrpsCard";
import {getDocuments} from "../../controllers/projectDocsController";
import React, { useEffect, useState } from "react";
import "../ManageUsers/manageUsers.css";

const Requests = () => {
  const [reqData, setReqData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [pop, setPop] = useState(false);

  useEffect(() => {
   getDocuments().then(res => setUserData(res.data))
  }, []);

  return (
    <div className="userList">
      <div className="headings">
        <label className="heading">Group ID</label>
        <label className="heading">Members</label>
        <label className="heading">Document Name</label>
      </div>
      {userData.map((user, index) => {
        return (
          <div key={index}>
            <RequestCard
              groupId={user.groupId}
              members={user.members}
              docName={user.docName}
              popup={pop}
              objID={user._id}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Requests;