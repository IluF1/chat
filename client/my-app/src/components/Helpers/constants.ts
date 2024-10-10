import axios from 'axios'

export const instance = axios.create({
    baseURL: 'http://localhost:4200',
    timeout: 5000,
    withCredentials: true
})
const accessToken = localStorage.getItem('accessToken')
instance.interceptors.request.use(
    function (config) {
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`
        }

        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)
