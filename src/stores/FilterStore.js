import { FilterType } from '@/utils/constants.js'
import { isFuture, isPast } from '@/utils/filter-sort.js';
import { defineStore } from 'pinia'

export const useFiltersStore = defineStore('filterStore', {
	state: () => ({
		filters: Object.values(FilterType),
		selectedFilter: FilterType.EVERYTHING,
	}),
	getters: {
		getFilteredPoints: (state) => {
			return (points) => {
				switch (state.selectedFilter) {
					case FilterType.EVERYTHING:
						return points;
					case FilterType.FUTURE:
						return points.filter(isFuture);
					case FilterType.PAST:
						return points.filter(isPast);
				}
			}
		}
	},
	actions: {
		changeFilter(newVal) {
			this.selectedFilter = newVal;
		}
	}
})