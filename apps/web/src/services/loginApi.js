import axios from 'axios'

const baseUrl = 'http://localhost:3000/api/login'

export const login = async (data) => {
    const response = await axios.post(baseUrl, data)
    return {
        status: true,
        data: response.data
    }
}