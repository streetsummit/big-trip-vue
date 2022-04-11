<template>
    <div class="point">
        <time
            class="point__date"
            :datetime="this.$dayjs(date_from).format('YYYY-MM-DD')"
        >
            {{ this.$dayjs(date_from).format('MMM DD') }}
        </time>

        <PointTypeIcon
            class="point__type"
            :pointType="type"
        />

        <h3 class="point__title">{{ pointTitle }}</h3>
        <div class="point__schedule">
            <p class="point__time">
                <time
                    class="point__start-time"
                    :datetime="
                        this.$dayjs(date_from).format('YYYY-MM-DDTHH:mm')
                    "
                >
                    {{ this.$dayjs(date_from).format('HH:mm') }}
                </time>
                &mdash;
                <time
                    class="point__end-time"
                    :datetime="this.$dayjs(date_to).format('YYYY-MM-DDTHH:mm')"
                >
                    {{ this.$dayjs(date_to).format('HH:mm') }}
                </time>
            </p>
            <p class="point__duration">{{ pointDuration }}</p>
        </div>
        <p class="point__price">
            &euro;&nbsp;
            <span class="point__price-value">{{ base_price }}</span>
        </p>
        <h4 class="visually-hidden">Offers:</h4>
        <ul class="point__selected-offers">
            <li
                v-for="offer in offers"
                :key="offer.id"
                class="point__offer"
            >
                <span class="point__offer-title">{{ offer.title }}</span>
                &plus;&euro;&nbsp;
                <span class="point__offer-price">{{ offer.price }}</span>
            </li>
        </ul>
        <button
            class="point__favorite-btn"
            :class="is_favorite ? favoriteClass : ''"
            type="button"
        >
            <span class="visually-hidden">Add to favorite</span>
            <svg
                class="point__favorite-icon"
                width="28"
                height="28"
                viewBox="0 0 28 28"
            >
                <path
                    d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"
                />
            </svg>
        </button>
        <rollup-button>Open event</rollup-button>
    </div>
</template>

<script>
import RollupButton from '@/components/point-parts/RollupButton';
import PointTypeIcon from '@/components/point-parts/PointTypeIcon';

export default {
    name: 'PointCard',
    components: {
        RollupButton,
        PointTypeIcon,
    },
    props: {
        id: String,
        type: String,
        date_from: String,
        date_to: String,
        destination: Object,
        base_price: Number,
        is_favorite: Boolean,
        offers: Array,
    },
    data() {
        return {
            favoriteClass: 'point__favorite-btn--active',
        };
    },
    computed: {
        pointTitle() {
            return `${this.type} ${this.destination.name}`;
        },
        pointDuration() {
            const MIN_IN_DAY = 1440;
            const MIN_IN_HOUR = 60;

            const getDuration = (end, start) =>
                this.$dayjs(end).diff(this.$dayjs(start), 'm');

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

            const createPointDurationTemplate = (start, end) => {
                const pointDuration = getDuration(end, start);
                return formatDuration(pointDuration);
            };

            return createPointDurationTemplate(this.date_from, this.date_to);
        },
    },
};
</script>

<style>
.point {
    display: flex;
    align-items: center;
}

.point__date {
    display: block;
    min-width: 80px;
    font-size: 13px;
    line-height: 16px;
    text-transform: uppercase;
    text-align: left;
}

.point__type {
    margin-right: 18px;
}

.point__title {
    flex-shrink: 0;
    width: 298px;
    margin-right: 15px;
    font-weight: 400;
    font-size: inherit;
}
.point__title::first-letter {
    text-transform: capitalize;
}

.point__schedule {
    flex-shrink: 0;
    width: 230px;
    margin-right: 15px;
}

.point__time {
    margin-bottom: 4px;
}

.point__duration {
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.6px;
    text-transform: uppercase;
    color: #999999;
    opacity: 0.9;
}

.point__price {
    flex-shrink: 0;
    width: 90px;
    margin-right: 15px;
}

.point__selected-offers {
    width: 220px;
    font-weight: 600;
}

.point__offer::first-letter {
    text-transform: capitalize;
}

.point__favorite-btn {
    margin: 0 10px;
    margin-left: auto;
    color: #ebebeb;
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    transition: color 0.2s;
}
.point__favorite-btn:hover,
.point__favorite-btn:focus {
    color: rgba(255, 208, 84, 0.6);
}
.point__favorite-btn--active {
    color: #ffd054;
}

.point__favorite-icon {
    display: block;
    width: 28px;
    height: 28px;
    fill: currentColor;
    transition: fill 0.2s;
}
</style>
