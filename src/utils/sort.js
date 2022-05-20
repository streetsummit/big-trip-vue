import { getDuration, getTimestamp } from './date.js';

export const sortByDay = (pointA, pointB) => getTimestamp(pointA.dateFrom) - getTimestamp(pointB.dateFrom);

export const sortByPrice = (pointA, pointB) => pointA.price - pointB.price;

export const sortByTime = (pointA, pointB) => getDuration(pointA.dateFrom, pointA.dateTo) - getDuration(pointB.dateFrom, pointB.dateTo);