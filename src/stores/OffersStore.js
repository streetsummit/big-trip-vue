import { defineStore } from 'pinia';
import PointService from '@/services/PointService.js';

export const useOffersStore = defineStore('offersStore', {
	state: () => ({
		offersData: [],
	}),

	getters: {
		getAvailableOffers: (state) => {
			return (type) => state.offersData.find(el => el.type === type).offers;
		},
		availableTypes: (state) => state.offersData.map(el => el.type),
	},

	actions: {
		async fetchOffers() {
			try {
				const response = await PointService.getOffers();
				this.offersData = response.data;
			} catch (e) {
				console.log(e);
			}
		},
	}
});