import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

export const formatDate = (date, pattern) => dayjs(date).format(pattern);

const MIN_IN_DAY = 1440;
const MIN_IN_HOUR = 60;

const getDuration = (start, end) => dayjs(end).diff(dayjs(start), 'm');

const formatDuration = duration => {
	const days = Math.floor(duration / MIN_IN_DAY);
	const hours = Math.floor(
		(duration - days * MIN_IN_DAY) / MIN_IN_HOUR
	);
	const minutes =
		duration - days * MIN_IN_DAY - hours * MIN_IN_HOUR;

	if (days) {
		return `${days.toString().padStart(2, '0')}D ${hours
			.toString()
			.padStart(2, '0')}H ${minutes
				.toString()
				.padStart(2, '0')}M`;
	} else if (hours) {
		return `${hours.toString().padStart(2, '0')}H ${minutes
			.toString()
			.padStart(2, '0')}M`;
	}
	return `${minutes.toString().padStart(2, '0')}M`;
};

export const getPointDuration = (start, end) => {
	const pointDuration = getDuration(start, end);
	return formatDuration(pointDuration);
};