import axios from 'axios';

const instance = axios.create({
    baseURL: `https://get-a-bike-18.firebaseio.com/`
});

export default instance;