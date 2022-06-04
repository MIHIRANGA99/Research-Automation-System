import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, ThemeProvider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AddButton from '../../components/Buttons/AddButton'
import { addMarks } from '../../controllers/evaluateDocsController'
import { dialog } from '../../themes/themes'
import "../StudentGroups/createGroups.css"

const AddMarks = () => {

  const [popup, setPopup] = useState(false)
  const [GroupMark, setGroupMark] = useState('')
  const [MarksStd1, setMarksStd1] = useState('')
  const [MarksStd2, setMarksStd2] = useState('')
  const [MarksStd3, setMarksStd3] = useState('')
  const [MarksStd4, setMarksStd4] = useState('')

  const addMark = () => {

    const data = {
        marksDetails: [GroupMark, MarksStd1, MarksStd2, MarksStd3, MarksStd4],
        allocated: false
    }
    addMarks(data).then(res => {
      console.log(res.data.name)
    }) 
  }

  return (
    <>
    <div className='subTypesMain'>
      <div>
      <AddButton buttonText='Add marks' onClick={() => setPopup(true)} variant = 'contained' />
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
          {"Marking Sheet"}
        </DialogTitle>
        <DialogContent sx = {{height: "60%"}}>
          <TextField margin='dense' fullWidth id="grpmarks" label="Group Marks" value={GroupMark} onChange = {(e) => setGroupMark(e.target.value)} variant="outlined" />
          <TextField margin='dense' fullWidth id="stdMarks" label="Student 1 Marks" value={MarksStd1} onChange = {(e) => setMarksStd1(e.target.value)} variant="outlined" />
          <TextField margin='dense' fullWidth id="stdMarks" label="Student 2 Marks" value={MarksStd1} onChange = {(e) => setMarksStd2(e.target.value)} variant="outlined" />
          <TextField margin='dense' fullWidth id="stdMarks" label="Student 3 Marks" value={MarksStd1} onChange = {(e) => setMarksStd3(e.target.value)} variant="outlined" />
          <TextField margin='dense' fullWidth id="stdMarks" label="Student 4 Marks" value={MarksStd1} onChange = {(e) => setMarksStd4(e.target.value)} variant="outlined" />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={() => addMark()} autoFocus>
            Add marks
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
    </>
  )
}

export default AddMarks