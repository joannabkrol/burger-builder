import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-builder-20a21.firebaseio.com/'
});

export default instance;