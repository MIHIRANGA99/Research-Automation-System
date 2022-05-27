import axios from 'axios'
import React from 'react'

const userUpdateController = (id, newData) => {

    const url = "http://localhost:8090/student";
  return axios.patch(`${url}/update/${id}`, newData )
}

export default userUpdateController