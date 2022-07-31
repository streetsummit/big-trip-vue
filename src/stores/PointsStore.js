import { defineStore } from 'pinia';
import PointService from '@/services/PointService.js';
import { useFiltersStore } from './FilterStore.js';
import { adaptToClient } from '@/utils/adapter.js';

export const usePointsStore = defineStore('pointsStore', {
	state: () => ({
		pointsData: [],
		isPointsLoading: false,
		error: null,
	}),

	getters: {
		filteredPoints: (state) => {
			const filterStore = useFiltersStore();
			return filterStore.getFilteredPoints(state.pointsData);
		},
		isPointsListNotEmpty: (state) => {
			return Boolean(state.pointsData.length);
		}
	},

	actions: {
		async fetchPoints() {
			this.pointsData = [];
			this.isPointsLoading = true;
			try {
				const response = await PointService.getPoints();
				this.pointsData = response.data.map(point => adaptToClient(point));
			} catch (error) {
				this.error = error;
			} finally {
				this.isPointsLoading = false;
			}
		},
		deletePoint(id) {
            PointService.deletePoint(id);
            this.pointsData = this.pointsData.filter(point => point.id !== id);
        },
	}
});