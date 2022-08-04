import { getDuration, getTimestamp } from '@/utils/date.js';

export const sort = {
	BY_DAY: (pointA, pointB) => getTimestamp(pointA.dateFrom) - getTimestamp(pointB.dateFrom),
	BY_PRICE: (pointA, pointB) => pointA.price - pointB.price,
	BY_TIME: (pointA, pointB) => getDuration(pointA.dateFrom, pointA.dateTo) - getDuration(pointB.dateFrom, pointB.dateTo),
};

export const isFuture = point => getTimestamp(point.dateFrom) >= getTimestamp(new Date());

export const isPast = point => getTimestamp(point.dateTo) <= getTimestamp(new Date());