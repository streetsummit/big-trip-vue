import { computed } from 'vue';
import { usePointsStore } from '@/stores/PointsStore.js';
import { useOffersStore } from '@/stores/OffersStore.js';
import { useDestinationsStore } from '@/stores/DestinationsStore.js';
import { sort } from '@/utils/filter-sort.js';
import dayjs from 'dayjs';

const MAX_POINTS_SHOW = 3;
const getOffersByIds = computed(() => useOffersStore().getOffersByIds);
const getDestinationById = computed(() => useDestinationsStore().getDestinationById);
const points = computed(() => usePointsStore().pointsData);

const getDestinationName = (pointIndex) => {
	return getDestinationById.value(points.value[pointIndex].destination).name;
}

export default function useTripInfo() {	

	const getFullPointPrice = (point) => {
		const pointOffers = getOffersByIds.value(point);
		return pointOffers.reduce((sum, current) => sum + current.price, point.price)
	};
	
	const tripPrice = computed(() => points.value.reduce(((sum, point) => sum + getFullPointPrice(point)), 0));

	const tripDates = computed(() => {
		const sortedPoints = points.value.slice().sort(sort.BY_DAY);
		const dayStart = dayjs(sortedPoints[0]?.dateFrom).format('MMM D');
		const dayEnd = dayjs(sortedPoints.at(-1)?.dateTo).format('MMM D');
		return `${dayStart}\u00A0\u2014\u00A0${dayEnd}`;
	});

	const tripRoute = computed(() => {
		if (points.value.length <= MAX_POINTS_SHOW) {
			const point1 = points.value[0] ? getDestinationName(0) : '';
			const point2 = points.value[1] ? ` \u2014 ${getDestinationName(1)}` : '';
			const point3 = points.value[2] ? ` \u2014 ${getDestinationName(2)}` : '';

			return `${point1}${point2}${point3}`;
		}

		return `${getDestinationName(0)} \u2014 ... \u2014
		  ${getDestinationName(points.value.length - 1)}`;
	});

	return { tripPrice, tripDates, tripRoute };
}