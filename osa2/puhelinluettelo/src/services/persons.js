import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const req = axios.get(baseUrl)
  return req.then(response => response.data)
}

const create = newObject => {
  const req = axios.post(baseUrl, newObject)
  return req.then(response => response.data)
}

const deletePers = pers => {
  const url = `${baseUrl}/${pers.id}`
  const req = axios.delete(url)
  return req.then(response => response)
}

//eslint-disable-next-line
export default { getAll, create, deletePers }
