enum FilterType {
  EVERYTHING = 'everything',
  FUTURE = 'future',
  PAST = 'past',
}

enum SortType {
  DAY = 'day',
  EVENT = 'event',
  TIME = 'time',
  PRICE = 'price',
  OFFERS = 'offers',
}

const DisabledSortType = [SortType.OFFERS, SortType.EVENT];

const localStorageKeys = {
  AUTH_KEY: 'authKey',
  NICKNAME: 'nickname',
};

export { FilterType, SortType, DisabledSortType, localStorageKeys };
