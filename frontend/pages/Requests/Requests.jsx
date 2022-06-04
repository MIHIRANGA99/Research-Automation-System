import RequestCard from "../../components/Cards/RequestCard";
import { getRequests } from "../../controllers/requestsController";
import React, { useEffect, useState } from "react";
import "./manageUsers.css";

const Requests = () => {
  const [reqData, setReqData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [pop, setPop] = useState(false);

  useEffect(() => {
    getRequests
      .then((res) => setReqData(res.data))
      .catch((e) => console.log(e.message));
  }, []);

  useEffect(() => {
    setUserData([...reqData]);
  }, [reqData]);

  return (
    <div className="userList">
      <div className="headings">
        <label className="heading">Group ID</label>
        <label className="heading">Members</label>
        <label className="heading">Research Topic</label>
      </div>
      {userData.map((user, index) => {
        return (
          <div key={index}>
            <RequestCard
              groupId={user.groupId}
              members={user.members}
              researchTopic={user.researchTopic}
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
