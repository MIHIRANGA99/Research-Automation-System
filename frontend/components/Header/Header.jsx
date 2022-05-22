import React from 'react'
import './header.css'

function Header({ role }) {
  return (
    <div className='header'>
        <h3>DASHBOARD</h3>
        <h6>{role}</h6>
    </div>
  )
}

export default Header