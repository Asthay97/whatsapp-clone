import axios from 'axios';

const instance = axios.create({
    baseURL : "<enter ur base url>",
});

export default instance;
