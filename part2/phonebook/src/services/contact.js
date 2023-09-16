import axios from 'axios'
const baseUrl = 'http://localhost:3002/contacts'

const getAll = () => {
  return axios.get(baseUrl).then(res => res.data)
}

const create = newObject => {
  return axios.post(baseUrl, newObject).then(res => res.data)
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject).then(res => res.data)
}

const deleteEntry = (id) => {
  return axios.delete(`${baseUrl}/${id}`).then(res => res)
}

export default { getAll, create, update, deleteEntry }