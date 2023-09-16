import axios from 'axios'
const baseUrl = 'http://localhost:3001/notes'

// const getAll = () => {
//   return axios.get(baseUrl)
// }
const getAll = () => {
  const request = axios.get(baseUrl)
  const nonExisting = {
    id: 10000,
    content: 'This note is not saved to server',
    important: true,
  }
  return request.then(response => response.data.concat(nonExisting))
}

// const create = newObject => {
//   return axios.post(baseUrl, newObject)
// }
const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

// const update = (id, newObject) => {
//   return axios.put(`${baseUrl}/${id}`, newObject)
// }
const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}


export default { 
  getAll: getAll, 
  create: create, 
  update: update 
}