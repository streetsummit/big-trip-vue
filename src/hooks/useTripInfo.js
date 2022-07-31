import { computed } from 'vue';
import { usePointsStore } from '@/stores/PointsStore.js';
import { sort } from '@/utils/filter-sort.js';
import dayjs from 'dayjs';

const MAX_POINTS_SHOW = 3;

export function useTripInfo() {
	const points = computed(() => usePointsStore().pointsData);

	const getFullPointPrice = (point) => point.offers.reduce((sum, current) => sum + current.price, point.price);
	const tripPrice = computed(() => points.value.reduce(((sum, point) => sum + getFullPointPrice(point)), 0));

	const tripDates = computed(() => {
		const sortedPoints = points.value.slice().sort(sort.BY_DAY);
		const dayStart = dayjs(sortedPoints[0]?.dateFrom).format('MMM D');
		const dayEnd = dayjs(sortedPoints.at(-1)?.dateTo).format('MMM D');
		return `${dayStart}\u00A0\u2014\u00A0${dayEnd}`;
	});

	const tripRoute = computed(() => {
		if (points.value.length <= MAX_POINTS_SHOW) {
			const point1 = points.value[0] ? points.value[0].destination.name : '';
			const point2 = points.value[1] ? ` \u2014 ${points.value[1].destination.name}` : '';
			const point3 = points.value[2] ? ` \u2014 ${points.value[2].destination.name}` : '';

			return `${point1}${point2}${point3}`;
		}

		return `${points.value[0].destination.name} \u2014 ... \u2014
		  ${points.value.at(-1).destination.name}`;
	});

	return { tripPrice, tripDates, tripRoute };
}