import axios from 'axios';

const instance = axios.create({
    baseURL: "https://tv360api-dev.parrotanalytics.com/"
});

export default instance;