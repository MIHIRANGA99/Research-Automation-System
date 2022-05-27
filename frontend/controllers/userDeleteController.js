import axios from 'axios'

const userDeleteController = (id) => {

    const url = "http://localhost:8090/student";
  return axios.delete(`${url}/delete/${id}`)
}

export default userDeleteController