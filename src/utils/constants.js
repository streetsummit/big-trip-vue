export const FilterType = {
	EVERYTHING: 'everything',
	FUTURE: 'future',
	PAST: 'past',
};

export const SortType = {
	DAY: 'day',
	EVENT: 'event',
	TIME: 'time',
	PRICE: 'price',
	OFFERS: 'offers',
};

export const DisabledSortType = [SortType.OFFERS, SortType.EVENT];