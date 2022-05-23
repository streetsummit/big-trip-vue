import { getDuration, getTimestamp } from './date.js';

export const sortByDay = (pointA, pointB) => getTimestamp(pointA.dateFrom) - getTimestamp(pointB.dateFrom);

export const sortByPrice = (pointA, pointB) => pointA.price - pointB.price;

export const sortByTime = (pointA, pointB) => getDuration(pointA.dateFrom, pointA.dateTo) - getDuration(pointB.dateFrom, pointB.dateTo);

export  const isFuture = point => getTimestamp(point.dateFrom) >= getTimestamp(new Date());

export  const isPast = point => getTimestamp(point.dateTo) <= getTimestamp(new Date());