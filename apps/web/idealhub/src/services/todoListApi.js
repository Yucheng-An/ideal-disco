import axios from 'axios'
const baseUrl = 'http://localhost:3000/api/todolist'

export const getAll = async (id) =>{
    const url = `${baseUrl}/${id}`
    const response = await axios.get(url)
    return response.data
}