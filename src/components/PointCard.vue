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
        <FavoriteButton
            class="point__favorite-btn"
            :is-active="localeIsFavorite"
            @click="onFavoriteClick"
        />
        <RollupButton @click="onEditClick">Open event</RollupButton>
    </div>
</template>

<script>
import { formatDate, getFormattedPointDuration } from '@/utils/date.js';
import RollupButton from '@/components/point-parts/RollupButton.vue';
import FavoriteButton from '@/components/point-parts/FavoriteButton.vue';
import PointTypeIcon from '@/components/point-parts/PointTypeIcon.vue';
import { capitalizeFirstLetter } from '@/utils/common.js';
import PointService from '@/services/PointService.js';

export default {
    name: 'PointCard',
    components: {
        RollupButton,
        PointTypeIcon,
        FavoriteButton,
    },
    props: {
        id: {
            required: true,
			type: String,
        },
        type: {
            required: true,
			type: String,
        },
        dateFrom: {
            required: true,
			type: String,
        },
        dateTo: {
            required: true,
			type: String,
        },
        destination: {
            required: true,
			type: Object,
        },
        price: {
            required: true,
			type: Number,
        },
        offers: {
            required: true,
			type: Array,
        },
        isFavorite: {
            required: true,
			type: Boolean,
        },
    },
    emits: ['toggleCardView'],
	data() {
		return {
			localeIsFavorite: this.isFavorite,
		};
	},
    computed: {
        pointTitle() {
            return `${capitalizeFirstLetter(this.type)} ${
                this.destination.name
            }`;
        },
        pointDuration() {
            return this.getFormattedPointDuration(this.dateFrom, this.dateTo);
        },
    },
    methods: {
        formatDate,
        getFormattedPointDuration,
		
        onFavoriteClick() {
            this.localeIsFavorite = !this.localeIsFavorite;

            PointService.updatePoint({
                id: this.id,
				type: this.type,
				dateFrom: this.dateFrom,
				dateTo: this.dateTo,
				destination: this.destination,
				price: this.price,
				offers: this.offers,
                isFavorite: this.localeIsFavorite,
            });
        },
        onEditClick() {
            this.$emit('toggleCardView', this.id);
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
    margin-right: 10px;
    margin-left: auto;
}
</style>
