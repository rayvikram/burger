import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-2b667.firebaseio.com'
});

export default instance;