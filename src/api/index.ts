import axios from 'axios';
const request = axios.create({
    baseURL: "http://127.0.0.1:4523/m1/4087634-0-default",
    timeout: 5000
})
export default request;