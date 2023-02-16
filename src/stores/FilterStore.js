import { FilterType } from '@/utils/constants.js'
import { isFuture, isPast } from '@/utils/filter-sort.js';
import { defineStore } from 'pinia';

const defaultFilter = FilterType.EVERYTHING;

export const useFiltersStore = defineStore('filterStore', {
	state: () => ({
		filters: Object.values(FilterType),
		selectedFilter: defaultFilter,
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
		},
		
		resetFilter() {
			this.selectedFilter = defaultFilter;
		}
	}
})