import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, ThemeProvider } from '@mui/material'
import React, { useState } from 'react'
import AddButton from '../../components/Buttons/AddButton'
import { registerTopic } from '../../controllers/topicRegisterController' 
import { dialog } from '../../themes/themes'
import "./topicRegister.css"

const RegisterTopics = () => {

  const [popup, setPopup] = useState(false)
  const [groupName, setGrpName] = useState('')
  const [topic, setTopic] = useState('')
  const [resources1, setResources1] = useState('')
  const [resources2, setResources2] = useState('')

  const registertopic = () => {
    const data = {
      groupName: groupName,
      topic: topic,
      resources: [resources1, resources2]
    }
    registerTopic(data).then(res => {
      console.log(res.data.name)
    }) 
  }

  return (
    <>
    <div className='regTopicsMain'>
      <div>
      <AddButton buttonText='REGISTER' onClick={() => setPopup(true)} variant = 'contained' />
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
          {"Register Topic"}
        </DialogTitle>
        <DialogContent sx = {{height: "60%"}}>
          <TextField margin='dense' fullWidth id="groupName" label="Group Name" value={groupName} onChange = {(e) => setGrpName(e.target.value)} variant="outlined" />
          <TextField margin='dense' fullWidth id="topic" label="Topic" value={topic} onChange = {(e) => setTopic(e.target.value)} variant="outlined" />
          <TextField margin='dense' fullWidth id="resources1" label="Resources" value={resources1} onChange = {(e) => setResources1(e.target.value)} variant="outlined" />
          <TextField margin='dense' fullWidth id="resources2" label="Resources" value={resources2} onChange = {(e) => setResources2(e.target.value)} variant="outlined" />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={() => registertopic()} autoFocus>
            SUBMIT
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
    </>
  )
}

export default RegisterTopics