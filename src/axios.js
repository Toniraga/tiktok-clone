import axios from 'axios';

// Axios uses this as a url base
const instance = axios.create({
	baseURL: 'https://tiktokdb.herokuapp.com',
});

export default instance;