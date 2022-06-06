import { SortType, DisabledSortType } from '@/utils/constants.js';
import { sortByDay, sortByPrice, sortByTime } from '@/utils/filter-sort.js';
import { computed, ref } from 'vue';

export default function useSortedPoints(filteredPoints) {
	const sortControls = Object.values(SortType);
	const selectedSort = ref(SortType.DAY);

	const sortedPoints = computed(() => {
		switch (selectedSort.value) {
			case SortType.DAY:
				return [...filteredPoints.value].sort(sortByDay);
			case SortType.PRICE:
				return [...filteredPoints.value].sort(sortByPrice);
			case SortType.TIME:
				return [...filteredPoints.value].sort(sortByTime);
		}
	});

	const isDisabled = (control) => DisabledSortType.includes(control);

	return { selectedSort, sortedPoints, sortControls, isDisabled };
}