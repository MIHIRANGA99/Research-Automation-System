import { Button, Card, CardActions, Dialog, DialogActions, DialogContent, DialogTitle, TextField, ThemeProvider, Typography } from "@mui/material";
import './Card.css'
import React, { useEffect, useState } from "react";
import DelButton from "../Buttons/DelButton";
import UpdateButton from "../Buttons/UpdateButton";
import { dialog } from "../../themes/themes";
import userUpdateController from "../../controllers/userUpdateController";
import userDeleteController from "../../controllers/userDeleteController";

function UserCard({objID, name, faculty, idNo, role, popup}) {

  const styles = {display: 'flex', flex: 1, textAlign: 'center', alignItems: 'center',  justifyContent: 'center', fontSize: '16px'};

  const [updatePop, setUpdatePop] = useState(false)
  const [deletePop, setDeletePop] = useState(false)
  const [username, setUsername] = useState(name)
  const [userFaculty, setFaculty] = useState(faculty)
  const [userId, setIdNo] = useState(idNo)

  useEffect(() => {
    setUpdatePop(popup)
  }, [popup])

  const updateUser = () => {

    const newData = {
      name: username,
      student_id: userId,
      faculty: userFaculty
    }

    userUpdateController(objID, newData, role).then((res) => console.log(res)).catch((e) => console.log(e.message))
  }

  const deleteUser = () => {
    userDeleteController(objID, role).then((res) => console.log(res.data)).catch((e) => console.log(e.message));
  }

  return (
    <>
    <Card sx={{color: "white", display: 'flex', paddingY: '20px', borderRadius: '12px', backgroundColor: 'rgba(255, 255, 255, 0.137)'}}>
      <Typography sx={styles}>{name}</Typography>
      <Typography sx={styles}>{idNo}</Typography>
      <Typography sx={styles}>{faculty}</Typography>
      <Typography sx={styles}>{role}</Typography>
      <CardActions sx={{...styles, marginX: '12px'}}>
        <UpdateButton onClick={() => setUpdatePop(true)} buttonText='Update' variant='contained' />
        <DelButton onClick={() => setDeletePop(true)} buttonText='Delete' variant='contained' />
      </CardActions>
    </Card>
    {/* Popup Dialog */}
      <ThemeProvider theme={dialog}>
      <Dialog
        className="mainDialog"
        open={updatePop}
        onClose={() => setUpdatePop(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className="dialogTitle" id="alert-dialog-title">
          {"Update User"}
        </DialogTitle>
        <DialogContent className="popUp">
          <TextField fullWidth id="name" label="Name" value={username} onChange = {(e) => setUsername(e.target.value)} variant="outlined" />
          <TextField fullWidth id="id_num" label="Student ID" value={userId} onChange = {(e) => setIdNo(e.target.value)} variant="outlined" />
          <TextField fullWidth id="faculty" label="Faculty" value={userFaculty} onChange = {(e) => setFaculty(e.target.value)} variant="outlined" />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={() => setUpdatePop(false)}>Cancel</Button>
          <Button variant="contained" onClick={() => updateUser()} autoFocus>
            Update
          </Button>
        </DialogActions>
      </Dialog>
      
      <Dialog
        open={deletePop}
        onClose={() => setDeletePop(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure?"}
        </DialogTitle>
        <DialogContent>
          <Typography>This will remove <b>{username}</b> from the system permanently.</Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={() => setDeletePop(false)}>Cancel</Button>
          <Button variant="contained" onClick={() => deleteUser()} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      </ThemeProvider>
    </>
  );
}
export default UserCard;
