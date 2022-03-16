<template>
  <div class="event">
    <time
      class="event__date"
      :datetime="this.$dayjs(point.date_from).format('YYYY-MM-DD')"
      >{{ this.$dayjs(point.date_from).format('MMM DD') }}
    </time>
    <div class="event__type">
      <img
        class="event__type-icon"
        width="42"
        height="42"
        :src="eventIcon"
        alt="Event type icon"
      />
    </div>
    <h3 class="event__title">{{ eventTitle }}</h3>
    <div class="event__schedule">
      <p class="event__time">
        <time
          class="event__start-time"
          :datetime="this.$dayjs(point.date_from).format('YYYY-MM-DDTHH:mm')"
          >{{ this.$dayjs(point.date_from).format('HH:mm') }}
        </time>
        &mdash;
        <time
          class="event__end-time"
          :datetime="this.$dayjs(point.date_to).format('YYYY-MM-DDTHH:mm')"
          >{{ this.$dayjs(point.date_to).format('HH:mm') }}
        </time>
      </p>
      <p class="event__duration">{{ eventDuration }}</p>
    </div>
    <p class="event__price">
      &euro;&nbsp;<span class="event__price-value">
        {{ point.base_price }}</span
      >
    </p>
    <h4 class="visually-hidden">Offers:</h4>
    <OffersList :offers="point.offers" />
    <button
      class="event__favorite-btn"
      :class="point.is_favorite ? favoriteClass : ''"
      type="button"
    >
      <span class="visually-hidden">Add to favorite</span>
      <svg
        class="event__favorite-icon"
        width="28"
        height="28"
        viewBox="0 0 28 28"
      >
        <path
          d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"
        />
      </svg>
    </button>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </div>
</template>

<script>
import OffersList from '@/components/point-parts/OffersList.vue';
export default {
  name: 'PointComponent',
  components: {
    OffersList,
  },
  props: {
    point: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      favoriteClass: 'event__favorite-btn--active',
    };
  },
  computed: {
    eventIcon() {
      return require(`../assets/img/icons/${this.point.type}.png`);
    },
    eventTitle() {
      return `${this.point.type} ${this.point.destination.name}`;
    },

    eventDuration() {
      const MIN_IN_DAY = 1440;
      const MIN_IN_HOUR = 60;

      const getDuration = (end, start) =>
        this.$dayjs(end).diff(this.$dayjs(start), 'm');

      const formatDuration = (duration) => {
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

      const createEventDurationTemplate = (start, end) => {
        const eventDuration = getDuration(end, start);
        return formatDuration(eventDuration);
      };

      return createEventDurationTemplate(
        this.point.date_from,
        this.point.date_to
      );
    },
  },
};
</script>

<style>
.event {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 20px;
  font-size: 17px;
  line-height: 21px;
}

.event__date {
  display: block;
  min-width: 80px;
  font-size: 13px;
  line-height: 16px;
  text-transform: uppercase;
  text-align: left;
}

.event__type-icon {
  display: block;
  width: 17px;
  height: 17px;
}

.event__title {
  flex-shrink: 0;
  width: 298px;
  margin: 0;
  margin-right: 15px;
  font-weight: 400;
  font-size: inherit;
}
.event__title::first-letter {
  text-transform: capitalize;
}

.event__schedule {
  flex-shrink: 0;
  width: 230px;
  margin-right: 15px;
}

.event__time {
  margin: 0;
  margin-bottom: 4px;
}

.event__duration {
  margin: 0;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: #999999;
  opacity: 0.9;
}

.event__price {
  flex-shrink: 0;
  width: 90px;
  margin: 0;
  margin-right: 15px;
}

.event__rollup-btn {
  position: relative;
  display: block;
  width: 40px;
  height: 40px;
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.event__rollup-btn::after {
  content: '';
  position: absolute;
  top: calc(50% - 5px);
  left: 50%;
  width: 10px;
  height: 10px;
  border-right: 2px solid #000000;
  border-bottom: 2px solid #000000;
  transform: translate(-50%, -50%) rotate(45deg);
  transition: border-color 0.2s, transform 0.6s;
}
.event__rollup-btn:hover::after {
  border-color: #0d8ae4;
}

.event--edit .event__rollup-btn {
  margin-left: auto;
}
.event--edit .event__rollup-btn::after {
  top: calc(50% + 3px);
  transform: translate(-50%, -50%) rotate(225deg);
}

.event__favorite-btn {
  margin: 0 10px;
  margin-left: auto;
  color: #ebebeb;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  transition: color 0.2s;
}
.event__favorite-btn:hover,
.event__favorite-btn:focus {
  color: rgba(255, 208, 84, 0.6);
}
.event__favorite-btn--active {
  color: #ffd054;
}

.event__favorite-icon {
  display: block;
  width: 28px;
  height: 28px;
  fill: currentColor;
  transition: fill 0.2s;
}
</style>
