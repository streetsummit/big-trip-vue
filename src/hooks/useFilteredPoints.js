import { FilterType } from '@/utils/constants.js';
import { isFuture, isPast } from '@/utils/filter-sort.js';
import { computed, ref } from 'vue';

export default function useFilteredPoints(points) {
	const filters = Object.values(FilterType);

	const selectedFilter = ref(FilterType.EVERYTHING);

	const filteredPoints = computed(() => {
		switch (selectedFilter.value) {
			case FilterType.EVERYTHING:
				return [...points.value];
			case FilterType.FUTURE:
				return [...points.value].filter(isFuture);
			case FilterType.PAST:
				return [...points.value].filter(isPast);
		}
	});

	return { filters, selectedFilter, filteredPoints };
}