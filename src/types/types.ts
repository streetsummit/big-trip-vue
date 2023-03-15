interface DestinationPicture {
  description: string;
  src: string;
}

interface Destination {
  id: number;
  name: string;
  description: string;
  pictures: DestinationPicture[];
}

interface OfferItem {
  id: number;
  title: string;
  price: number;
}

interface Offer {
  type: string;
  offers: OfferItem[];
}

interface ClientLocalPoint {
  price: number;
  dateFrom: string;
  dateTo: string;
  destination: number;
  isFavorite: boolean;
  offers: number[];
  type: string;
}

interface ClientPoint extends ClientLocalPoint {
  id: string;
}

interface ServerLocalPoint {
  base_price: number;
  date_from: string;
  date_to: string;
  destination: number;
  is_favorite: boolean;
  offers: number[];
  type: string;
}

interface ServerPoint extends ServerLocalPoint {
  id: string;
}

export type {
  Destination,
  Offer,
  OfferItem,
  ClientLocalPoint,
  ClientPoint,
  ServerPoint,
  ServerLocalPoint,
};
