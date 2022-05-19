<template>
    <div class="point">
        <time
            class="point__date"
            :datetime="formatDate(dateFrom, 'YYYY-MM-DD')"
        >
            {{ formatDate(dateFrom, 'MMM DD') }}
        </time>

        <PointTypeIcon
            class="point__type"
            :point-type="type"
        />

        <h3 class="point__title">{{ pointTitle }}</h3>
        <div class="point__schedule">
            <p class="point__time">
                <time
                    class="point__start-time"
                    :datetime="formatDate(dateFrom, 'YYYY-MM-DDTHH:mm')"
                >
                    {{ formatDate(dateFrom, 'HH:mm') }}
                </time>
                &mdash;
                <time
                    class="point__end-time"
                    :datetime="formatDate(dateTo, 'YYYY-MM-DDTHH:mm')"
                >
                    {{ formatDate(dateTo, 'HH:mm') }}
                </time>
            </p>
            <p class="point__duration">{{ pointDuration }}</p>
        </div>
        <p class="point__price">
            &euro;&nbsp;
            <span class="point__price-value">{{ price }}</span>
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
            :class="{ 'point__favorite-btn--active': isFavorite }"
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
import { formatDate, getPointDuration } from '@/utils/date';
import RollupButton from '@/components/point-parts/RollupButton';
import PointTypeIcon from '@/components/point-parts/PointTypeIcon';
import { capitalizeFirstLetter } from '@/utils/common.js';

export default {
    name: 'PointCard',
    components: {
        RollupButton,
        PointTypeIcon,
    },
    props: {
        id: String,
        type: String,
        dateFrom: String,
        dateTo: String,
        destination: Object,
        price: Number,
        isFavorite: Boolean,
        offers: Array,
    },
    computed: {
        pointTitle() {
            return `${capitalizeFirstLetter (this.type)} ${this.destination.name}`;
        },
        pointDuration() {
            return this.getPointDuration(this.dateFrom, this.dateTo);
        },
    },
    methods: {
        formatDate,
        getPointDuration,
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
