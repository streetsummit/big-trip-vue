import dayjs from 'dayjs';
import type { ConfigType } from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

const getTimestamp = (str: string) => Date.parse(str);
const formatDate = (date: ConfigType, pattern: string) =>
  dayjs(date).format(pattern);

const MIN_IN_DAY = 1440;
const MIN_IN_HOUR = 60;

const getDuration = (start: ConfigType, end: ConfigType) =>
  dayjs(end).diff(dayjs(start), 'm');

const formatDuration = (duration: number) => {
  const days = Math.floor(duration / MIN_IN_DAY);
  const hours = Math.floor((duration - days * MIN_IN_DAY) / MIN_IN_HOUR);
  const minutes = duration - days * MIN_IN_DAY - hours * MIN_IN_HOUR;

  if (days) {
    return `${days.toString().padStart(2, '0')}D ${hours
      .toString()
      .padStart(2, '0')}H ${minutes.toString().padStart(2, '0')}M`;
  } else if (hours) {
    return `${hours.toString().padStart(2, '0')}H ${minutes
      .toString()
      .padStart(2, '0')}M`;
  }
  return `${minutes.toString().padStart(2, '0')}M`;
};

const getFormattedPointDuration = (start: ConfigType, end: ConfigType) => {
  const pointDuration = getDuration(start, end);
  return formatDuration(pointDuration);
};

export { getTimestamp, formatDate, getDuration, getFormattedPointDuration };
