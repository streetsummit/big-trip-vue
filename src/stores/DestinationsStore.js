import { defineStore } from 'pinia';
import PointService from '@/services/PointService.js';

export const useDestinationsStore = defineStore('destinationsStore', {
	state: () => ({
		destinationsData: [],
	}),
	getters: {
		getDestinationById: (state) => {
			return (destId) => state.destinationsData.find((dest) => dest.id === destId);
		}
	},

	actions: {
		async fetchDestinations() {
			try {
				const response = await PointService.getDestinations();
				this.destinationsData = response.data.map((el) => {
					return {
						...el,
						pictures: el.pictures.map((pic) => {
							return {
								...pic,
								src: `https://loremflickr.com/300/200/city,${el.name}?random=${Math.random()}`,
							};
						}),
					};
				});
			} catch (e) {
				console.log(e);
			}
		},
	}
});