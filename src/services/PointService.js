import axios from 'axios';

// Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE

const apiClient = axios.create({
	baseURL: 'https://19.ecmascript.pages.academy/big-trip',
	withCredentials: false,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
		Authorization: 'Basic streetsummit2022',
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
		return apiClient.put(`/points/${point.id}`, point);
	},
	deletePoint(id) {
		return apiClient.delete(`/points/${id}`);
	},
	addPoint(point) {
		return apiClient.post(`/points`, point);
	}
};