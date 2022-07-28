import { defineStore } from 'pinia';
import PointService from '@/services/PointService.js';

export const useDestinationsStore = defineStore('destinationsStore', {
	state: () => ({
		destinationsData: [],
	}),

	actions: {
		async fetchDestinations() {
			try {
				const response = await PointService.getDestinations();
				this.destinationsData = response.data;
			} catch (e) {
				console.log(e);
			}
		},
	}
});