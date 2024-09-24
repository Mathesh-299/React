import axios from 'axios'
const API="https://66ee897f3ed5bb4d0bf131b4.mockapi.io"
const getProjects = () => axios.get(`${API}/projects`)
const getProjectbyID = (id) => axios.get(`${API}/projects/${id}`)
const addProject = (projectdata) => axios.post(`${API}/projects`, projectdata)
const editProject = (id, projectdata) => axios.put(`${API}/projects/${id}`, projectdata)
const deleteProject = (id) => axios.delete(`${API}/projects/${id}`)
export { addProject, deleteProject, editProject, getProjectbyID, getProjects }
