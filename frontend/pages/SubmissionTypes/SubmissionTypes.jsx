import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, ThemeProvider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AddButton from '../../components/Buttons/AddButton'
import { addType, getTypes } from '../../controllers/submissionTypeController'
import { dialog } from '../../themes/themes'
import "./SubTypes.css"

const SubmissionTypes = () => {

  const [typesInfo, setTypesInfo] = useState([])

  const [popup, setPopup] = useState(false)
  const [type, setType] = useState('')
  const [typeName, setTypeName] = useState('')
  const [faculty, setFaculty] = useState('')

  useEffect(() => {
    getTypes().then(res => {
      setTypesInfo(res.data)
    }).catch((e) => {
      console.log(e.message)
    })
  },[])

  const createType = () => {
    const data = {
      type: type,
      name: typeName,
      faculty: faculty
    }
    addType(data).then(res => {
      console.log(res.data.name)
    }) 
  }

  return (
    <>
    <div className='subTypesMain'>
      <div>
      <AddButton buttonText='Add' onClick={() => setPopup(true)} variant = 'contained' />
      </div>
      <div className='cardsView'>
        {
          typesInfo.map((type, index) => (
            <div key={index} className='typeCard'>
              <label className='nameHeading'>{type.name}</label>
              <div>
               {type.type}
              </div>
            </div>
          ))
        }
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
          {"Create Submission Type"}
        </DialogTitle>
        <DialogContent className="popUp">
          <TextField fullWidth id="type" label="Type" value={type} onChange = {(e) => setType(e.target.value)} variant="outlined" />
          <TextField fullWidth id="name" label="Name" value={typeName} onChange = {(e) => setTypeName(e.target.value)} variant="outlined" />
          <TextField fullWidth id="faculty" label="Faculty" value={faculty} onChange = {(e) => setFaculty(e.target.value)} variant="outlined" />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={() => createType()} autoFocus>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
    </>
  )
}

export default SubmissionTypes