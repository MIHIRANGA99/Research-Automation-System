import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  ThemeProvider,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AllocateButton from "../../components/Buttons/AllocateButton";
import {
  getGroups,
  updateGroup,
} from "../../controllers/studentGroupController";
import { getStaff } from "../../controllers/userController";
import { dialog } from "../../themes/themes";
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

  const handlePop = () => {
    getStaff
      .then((res) => setStaffData(res.data))
      .catch((e) => console.log(e.message));
    setPopup(true);
  };

  const insertToArray = (memberID) => {
    if (allocatedArray.includes(memberID)) {
      alert("Already Exists!");
    } else {
      setAllocatedArray([...allocatedArray, memberID]);
    }
  };

  const allocatePanel = (id) => {

    const info = {
      panel: allocatedArray,
      allocated: true
    }

    updateGroup(id, info)
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

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
              <AllocateButton
                disabled={!!group.panel.length}
                buttonText={
                  !!group.panel.length > 0 ? (
                    <label style={{ color: "#ffce97be" }}>
                      Panel Allocated
                    </label>
                  ) : (
                    "Allocate a Panel"
                  )
                }
                variant="contained"
                onClick={() => handlePop()}
              />
              {/*Allocate Popup*/}
              <ThemeProvider theme={dialog}>
                <Dialog
                  className="addSTDialog"
                  open={popup}
                  onClose={() => setPopup(false)}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle className="dialogTitle" id="alert-dialog-title">
                    {"Allocate Panel Members"}
                  </DialogTitle>
                  <DialogContent className="popUp">
                    <div className="staffPopup">
                      {staffData.map((member, index) => {
                        return (
                          <div
                            className={
                              allocatedArray.includes(member._id)
                                ? "staffMemberCardActive"
                                : "staffMemberCard"
                            }
                            onClick={() => insertToArray(member._id)}
                            key={index}
                          >
                            {member.name}
                            <label className="status">
                              {allocatedArray.includes(member._id) &&
                                "Selected"}
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      variant="contained"
                      onClick={() => allocatePanel(group._id)}
                      autoFocus
                    >
                      Allocate
                    </Button>
                  </DialogActions>
                </Dialog>
              </ThemeProvider>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StudentGroups;
