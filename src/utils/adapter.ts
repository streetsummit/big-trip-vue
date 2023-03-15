import type { ClientLocalPoint, ServerLocalPoint } from '@/types/types';

export const adaptToClient = <T extends ServerLocalPoint>(point: T) => {
  const adaptedPoint: Partial<typeof point> = {
    ...point,
    price: point['base_price'],
    dateFrom: point['date_from'],
    dateTo: point['date_to'],
    isFavorite: point['is_favorite'],
  };

  delete adaptedPoint['base_price'];
  delete adaptedPoint['date_from'];
  delete adaptedPoint['date_to'];
  delete adaptedPoint['is_favorite'];

  return adaptedPoint as any;
};

export const adaptToServer = <T extends ClientLocalPoint>(point: T) => {
  const adaptedPoint: Partial<typeof point> = {
    ...point,
    'base_price': point.price,
    'date_from': point.dateFrom,
    'date_to': point.dateTo,
    'is_favorite': point.isFavorite,
  };

  delete adaptedPoint.price;
  delete adaptedPoint.dateFrom;
  delete adaptedPoint.dateTo;
  delete adaptedPoint.isFavorite;

  return adaptedPoint as any;
};
