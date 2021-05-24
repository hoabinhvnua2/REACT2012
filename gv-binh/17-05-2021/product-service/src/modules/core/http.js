import axios from "axios";

const httpClient = axios.create();

httpClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : '';
    if (localStorage.getItem('user')) {
        config.token = token
        config.headers = {'Content-Type': 'application/json'}
        config.params = config.data
    }

    return config
})

httpClient.interceptors.response.use()


export default httpClient;