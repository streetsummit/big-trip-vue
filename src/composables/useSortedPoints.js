import { SortType, DisabledSortType } from '@/utils/constants.js';
import { sort } from '@/utils/filter-sort.js';
import { computed, ref } from 'vue';

const currentSort = ref(SortType.DAY);

export default function useSortedPoints() {
	const sortControls = Object.values(SortType);

	const changeSort = (newValue) => {
		currentSort.value = newValue;
	};

	const getSortedPoints = (points) => {
		switch (currentSort.value) {
			case SortType.DAY:
				return [...points].sort(sort.BY_DAY);
			case SortType.PRICE:
				return [...points].sort(sort.BY_PRICE);
			case SortType.TIME:
				return [...points].sort(sort.BY_TIME);
		}
	};

	const isDisabled = (control) => DisabledSortType.includes(control);

	const resetSort = () => currentSort.value = SortType.DAY;

	return {
		selectedSort: computed(() => currentSort.value),
		getSortedPoints,
		sortControls,
		isDisabled,
		changeSort,
		resetSort,
	};
}