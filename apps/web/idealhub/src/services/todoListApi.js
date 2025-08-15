import axios from 'axios'

const baseUrl = 'http://localhost:3000/api/todolist'

export const getAll = async (id) => {
    const url = `${baseUrl}/${id}`
    return await axios.get(url)
}
export const createTodo = async (data) => {
    const response = await axios.post(baseUrl, data, {headers: {'Content-Type': 'application/json'}})
    return {
        status: true,
        data: response.data,
    }
}
export const convertFinish = async (data) => {
    const response = await axios.patch(baseUrl, data, {headers: {'Content-Type': 'application/json'}})
    return {
        status: true
    }
}