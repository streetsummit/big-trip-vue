import { adaptToServer } from '@/utils/adapter.js';
import axios from 'axios';

// Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE

const apiClient = axios.create({
	baseURL: 'https://18.ecmascript.pages.academy/big-trip',
	withCredentials: false,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
		Authorization: 'Basic streetsummit20212',
	},
});

export default {
	getPoints() {
		return apiClient.get('/points');
	},
	getOffers() {
		return apiClient.get('/offers');
	},
	getDestinations() {
		return apiClient.get('/destinations');
	},
	updatePoint(point) {
		return apiClient.put(`/points/${point.id}`, adaptToServer(point));
	},
	deletePoint(id) {
		return apiClient.delete(`/points/${id}`);
	}
};