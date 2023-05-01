import axios from 'axios' 
export const axiosInstance = axios.create({
    baseURL: 'https://viacep.com.br/ws/'
})