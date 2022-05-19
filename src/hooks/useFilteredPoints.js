import { FilterType } from '@/utils/constants.js';
import { computed, ref } from 'vue';

export default function useFilteredPoints(points) {
	const filters = Object.values(FilterType);

	const selectedFilter = ref(FilterType.EVERYTHING);

	const filteredPoints = computed(() => {
		switch (selectedFilter.value) {
			case FilterType.EVERYTHING:
				return [...points.value];
			case FilterType.FUTURE:
				return [...points.value].filter(({ dateFrom }) => new Date(dateFrom) >= new Date());
			case FilterType.PAST:
				return [...points.value].filter(({ dateTo }) => new Date(dateTo) <= new Date());
		}
	});

	return { filters, selectedFilter, filteredPoints };
}