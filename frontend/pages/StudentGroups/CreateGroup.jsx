import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, ThemeProvider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AddButton from '../../components/Buttons/AddButton'
import { addGroup } from '../../controllers/createGroupController'
import { dialog } from '../../themes/themes'
import "./createGroups.css"

const CreateGroups = () => {

  const [popup, setPopup] = useState(false)
  const [groupName, setGroupName] = useState('')
  const [std1, setStd1] = useState('')
  const [std2, setStd2] = useState('')
  const [std3, setStd3] = useState('')
  const [std4, setStd4] = useState('')

  const createGroup = () => {


    const data = {
        groupName: groupName,
        students: [std1, std2, std3, std4],
        allocated: false
    }
    addGroup(data).then(res => {
      console.log(res.data.name)
    }) 
  }

  return (
    <>
    <div className='subTypesMain'>
      <div>
      <AddButton buttonText='Create Group' onClick={() => setPopup(true)} variant = 'contained' />
      </div>
      
    </div>
    {/* popup create form */}
    <ThemeProvider theme={dialog}>
      <Dialog
        className="addSTDialog"
        open={popup}
        onClose={() => setPopup(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className="dialogTitle" id="alert-dialog-title">
          {"Create Student Group"}
        </DialogTitle>
        <DialogContent sx = {{height: "60%"}}>
          <TextField margin='dense' fullWidth id="grpname" label="Group Name" value={groupName} onChange = {(e) => setGroupName(e.target.value)} variant="outlined" />
          <TextField margin='dense' fullWidth id="name" label="Student ID" value={std1} onChange = {(e) => setStd1(e.target.value)} variant="outlined" />
          <TextField margin='dense' fullWidth id="name" label="Student ID" value={std2} onChange = {(e) => setStd2(e.target.value)} variant="outlined" />
          <TextField margin='dense' fullWidth id="name" label="Student ID" value={std3} onChange = {(e) => setStd3(e.target.value)} variant="outlined" />
          <TextField margin='dense' fullWidth id="name" label="Student ID" value={std4} onChange = {(e) => setStd4(e.target.value)} variant="outlined" />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={() => createGroup()} autoFocus>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
    </>
  )
}

export default CreateGroups