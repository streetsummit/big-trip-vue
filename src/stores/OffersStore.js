import { defineStore } from 'pinia';
import PointService from '@/services/PointService.js';

export const useOffersStore = defineStore('offersStore', {
	state: () => ({
		offersData: [],
	}),

	getters: {
		getAvailableOffers(state) {
			return function (type) {
				return state.offersData.find(el => el.type === type)?.offers || [];
			};
		},

		getOffersByIds() {
			const getAvailableOffers = this.getAvailableOffers;

			return function (point) {
				const availableOffers = getAvailableOffers(point.type);
				return point.offers.map(id => availableOffers.find(offer => offer.id === id));
			};
		},
		availableTypes(state) {
			return state.offersData.map(el => el.type)
		},
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