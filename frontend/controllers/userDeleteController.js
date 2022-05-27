import axios from 'axios'

const userDeleteController = (id, role) => {

    const url = `http://localhost:8090/${role === "Student"? 'student': 'staff'}`;
  return axios.delete(`${url}/delete/${id}`)
}

export default userDeleteController