import axios from "axios"
// const baseUrl = 'http://localhost:3001/api/persons'
// const baseUrl = 'https://backend-quiet-dream-1891.fly.dev/api/persons'
const baseUrl = '/api/persons'

const getAll = () => {
	const request = axios.get(baseUrl)
	return request.then(response => response.data)
}

const create = newObject => {
	const request = axios.post(baseUrl, newObject)
	return request.then(response => response.data)
}

const deletePerson = id => {
	const request = axios.delete(`${baseUrl}/${id}`)
	return request.then(response => response.data)
}

const update = (id, newObject) => {
	const request = axios.put(`${baseUrl}/${id}`, newObject)
	return request.then(response => response.data)
}

const phoneService = { getAll, create, deletePerson, update }

export default phoneService

