import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  ThemeProvider,
  Snackbar
} from "@mui/material";
import { dialog } from "../../themes/themes";
import React, { useState } from "react";
import { getStaff } from "../../controllers/userController";
import AllocateButton from "../../components/Buttons/AllocateButton";
import { updateGroup } from "../../controllers/studentGroupController";
import { createPanel } from "../../controllers/panelCrontroller";

const GroupCard = ({ grpID, grpName, students, panel }) => {
  const [staffData, setStaffData] = useState([]);
  const [popup, setPopup] = useState(false);
  const [allocatedArray, setAllocatedArray] = useState([]);

  const [alert, setAlert] = useState({
    message: "",
    type: "",
    show: false
  })

  const handleInsert = (id) => {
    if (allocatedArray.includes(id)) {
      setAllocatedArray(allocatedArray.filter((ID) => ID !== id));
    } else {
      insertToArray(id);
    }
  };

  const insertToArray = (memberID) => {
    if (allocatedArray.includes(memberID)) {
      alert("Already Exists!");
    } else {
      setAllocatedArray([...allocatedArray, memberID]);
    }
  };

  const registerPanel = (grpID) => {
    const data = {
      members: allocatedArray,
      allocatedGroups: grpID,
    };
    createPanel(data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  const allocatePanel = (id) => {
    const info = {
      panel: allocatedArray,
      allocated: true,
    };

    updateGroup(id, info)
      .then((res) => {
        console.log(res.data);
        registerPanel(id);
        setPopup(false);
        setAlert({message: "Allocated!", type: "success", show: true});
      })
      .catch((e) => {
        console.log(e.message);
        setAlert({message: "Couldn't Allocate!", type: "error", show: true});
      });
  };

  const handlePop = () => {
    getStaff
      .then((res) => setStaffData(res.data))
      .catch((e) => console.log(e.message));
    setPopup(true);
  };

  return (
    <div>
      <div className="groupCard">
        <label style={{ fontSize: "20px" }}>{grpName}</label>
        <div className="layout">
          <div className="listView">
            <div style={{ color: "#FFCE97" }}>Members</div>
            {students.map((student, idx) => (
              <label key={idx}>{student}</label>
            ))}
          </div>
          <div className="listView">
            <div style={{ color: "#FFCE97" }}>Panel</div>
            {panel?.map((student, idx) => (
              <label key={idx}>{student}</label>
            ))}
          </div>
        </div>
        <AllocateButton
          disabled={!!panel.length}
          buttonText={
            !!panel.length > 0 ? (
              <label style={{ color: "#ffce97be" }}>Panel Allocated</label>
            ) : (
              "Allocate a Panel"
            )
          }
          variant="contained"
          onClick={() => handlePop()}
        />
        {/* Alert Message */}
        <Snackbar open={alert.show} autoHideDuration={6000} onClose={() => setAlert({message: "", show: false, type: ""})}>
          <Alert onClose={() => setAlert({message: "", show: false, type: ""})} severity={alert.type} sx={{ width: "100%" }}>
            {alert.message}
          </Alert>
        </Snackbar>
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
                        allocatedArray.includes(member.staff_id)
                          ? "staffMemberCardActive"
                          : "staffMemberCard"
                      }
                      onClick={() => handleInsert(member.staff_id)}
                      key={index}
                    >
                      <div style={{ marginLeft: "12px" }}>{member.name}</div>
                      <label className="status">
                        {allocatedArray.includes(member.staff_id) && "Selected"}
                      </label>
                    </div>
                  );
                })}
              </div>
            </DialogContent>
            <DialogActions>
              <Button
                variant="contained"
                onClick={() => allocatePanel(grpID)}
                autoFocus
              >
                Allocate
              </Button>
            </DialogActions>
          </Dialog>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default GroupCard;
