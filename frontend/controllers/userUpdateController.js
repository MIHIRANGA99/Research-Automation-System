import axios from 'axios'
import React from 'react'

const userUpdateController = (id, newData, role) => {

    const url = `http://localhost:8090/${role === "Student"? 'student': 'staff'}`;
  return axios.patch(`${url}/update/${id}`, newData )
}

export default userUpdateController