import axios from 'axios';

export const client = axios.create({
	baseURL: 'http://3.37.39.179:3000',
});
