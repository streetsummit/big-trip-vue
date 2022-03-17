import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://15.ecmascript.pages.academy/big-trip',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Basic streetsummit2021',
  },
});

export default {
  getPoints() {
    return apiClient.get('/points');
  },
};
