import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://tiktokdb.herokuapp.com',
});

export default instance;