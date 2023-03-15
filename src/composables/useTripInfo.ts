import { computed } from 'vue';
import { usePointsStore } from '@/stores/PointsStore';
import { useOffersStore } from '@/stores/OffersStore';
import { useDestinationsStore } from '@/stores/DestinationsStore';
import { sort } from '@/utils/filter-sort';
import dayjs from 'dayjs';
import type { ClientPoint } from '@/types/types';

const MAX_POINTS_SHOW = 3;
const UNKNOWN_DESTINATION: string = 'Unknown destination';
const getOffersByIds = computed(() => useOffersStore().getOffersByIds);
const getDestinationById = computed(
  () => useDestinationsStore().getDestinationById
);
const points = computed(() => usePointsStore().pointsData);

export default function useTripInfo() {
  const sortedPoints = computed(() => points.value.slice().sort(sort.BY_DAY));

  const getDestinationName = (pointIndex: number) => {
    return (
      getDestinationById.value(sortedPoints.value[pointIndex].destination)
        ?.name || UNKNOWN_DESTINATION
    );
  };

  const getFullPointPrice = (point: ClientPoint) => {
    const pointOffers = getOffersByIds.value(point);
    return pointOffers.reduce(
      (sum, current) => sum + current.price,
      point.price
    );
  };

  const tripPrice = computed(() =>
    points.value.reduce((sum, point) => sum + getFullPointPrice(point), 0)
  );

  const tripDates = computed(() => {
    const dayStart = dayjs(sortedPoints.value[0]?.dateFrom).format('MMM D');
    const dayEnd = dayjs(sortedPoints.value.at(-1)?.dateTo).format('MMM D');
    return `${dayStart}\u00A0\u2014\u00A0${dayEnd}`;
  });

  const tripRoute = computed(() => {
    if (sortedPoints.value.length <= MAX_POINTS_SHOW) {
      const point1 = sortedPoints.value[0] ? getDestinationName(0) : '';
      const point2 = sortedPoints.value[1]
        ? ` \u2014 ${getDestinationName(1)}`
        : '';
      const point3 = sortedPoints.value[2]
        ? ` \u2014 ${getDestinationName(2)}`
        : '';

      return `${point1}${point2}${point3}`;
    }

    return `${getDestinationName(0)} \u2014 ... \u2014
		  ${getDestinationName(sortedPoints.value.length - 1)}`;
  });

  return { tripPrice, tripDates, tripRoute };
}
