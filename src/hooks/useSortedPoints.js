import { SortType, DisabledSortType } from '@/utils/constants.js';
import { sort } from '@/utils/filter-sort.js';
import { computed, ref } from 'vue';

export default function useSortedPoints(filteredPoints) {
	const sortControls = Object.values(SortType);
	const selectedSort = ref(SortType.DAY);

	const sortedPoints = computed(() => {
		switch (selectedSort.value) {
			case SortType.DAY:
				return [...filteredPoints.value].sort(sort.BY_DAY);
			case SortType.PRICE:
				return [...filteredPoints.value].sort(sort.BY_PRICE);
			case SortType.TIME:
				return [...filteredPoints.value].sort(sort.BY_TIME);
		}
	});

	const isDisabled = (control) => DisabledSortType.includes(control);

	return { selectedSort, sortedPoints, sortControls, isDisabled };
}