import { getDuration, getTimestamp } from '@/utils/date';

export const sort = {
  BY_DAY: <T extends { dateFrom: string }>(pointA: T, pointB: T) =>
    getTimestamp(pointA.dateFrom) - getTimestamp(pointB.dateFrom),
  BY_PRICE: <T extends { price: number }>(pointA: T, pointB: T) =>
    pointA.price - pointB.price,
  BY_TIME: <T extends { dateFrom: string; dateTo: string }>(
    pointA: T,
    pointB: T
  ) =>
    getDuration(pointA.dateFrom, pointA.dateTo) -
    getDuration(pointB.dateFrom, pointB.dateTo),
};

export const isFuture = <T extends { dateFrom: string }>(point: T) =>
  getTimestamp(point.dateFrom) >= Date.now();

export const isPast = <T extends { dateTo: string }>(point: T) =>
  getTimestamp(point.dateTo) <= Date.now();
