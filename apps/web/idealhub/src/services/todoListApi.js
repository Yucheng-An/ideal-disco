import axios from 'axios'
const baseUrl = 'http://localhost:3000/api/todolist'

export const getAll = async (id) =>{
    const url = `${baseUrl}/${id}`
    // console.log(url)
    const response = await axios.get(url)
    // console.log(response.data)
    return response.data
}