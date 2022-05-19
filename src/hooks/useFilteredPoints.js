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
				return [...points.value].filter(({ date_from }) => new Date(date_from) >= new Date());
			case FilterType.PAST:
				return [...points.value].filter(({ date_to }) => new Date(date_to) <= new Date());
		}
	});

	return { filters, selectedFilter, filteredPoints };
}