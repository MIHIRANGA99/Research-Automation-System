import { Button, ThemeProvider } from '@mui/material'
import {deleteButton} from '../../themes/themes'
import React from 'react'
import './header.css'
import { useNavigate } from 'react-router-dom'

function Header({ role }) {

  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("role")
    navigate('/student/login')
  }

  return (
    <div className='header'>
        <h3>DASHBOARD</h3>
        <h6>{role}</h6>
        <ThemeProvider theme={deleteButton}>
      <Button sx={{borderRadius: "99px", padding: "5px 40px"}} onClick = {() => handleLogout()} variant="contained">Logout</Button>
      </ThemeProvider>
    </div>
  )
}

export default Header