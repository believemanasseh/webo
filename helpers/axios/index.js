// Custom Axios instance
import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.SERVER_URL,
	timeout: 0,
	headers: {
		// 'Authorization': `Token ${process.env.ADMIN_ACCESS_TOKEN}`,
		'Content-Type': 'application/json',
	},
});

export default instance;
