<template>
    <form
        class="point-edit"
        action="#"
        method="post"
    >
        <header class="point-edit__header">
            <TypeField v-model:selected-type="pointState.type" />
            <DestinationField
                v-model:selected-destination="destName"
                class="point-edit__field-group point-edit__field-group--destination"
            />

            <DateFields
                v-model:date-from="pointState.dateFrom"
                v-model:date-to="pointState.dateTo"
                class="point-edit__field-group point-edit__field-group--time"
            />

            <PriceField
                v-model:price.number="pointState.price"
                class="point-edit__field-group point-edit__field-group--price point-edit__label"
            />

            <button
                class="point-edit__save-btn btn btn--blue"
                type="button"
                @click="onSaveClick"
            >
                Save
            </button>
            <button
                v-if="isNewPoint"
                class="point-edit__reset-btn"
                type="button"
            >
                Cancel
            </button>
            <button
                v-else
                class="point-edit__reset-btn"
                type="button"
                @click="deletePoint(point.id)"
            >
                Delete
            </button>

            <rollup-button
                v-if="!isNewPoint"
                class="point-edit__close-button"
                :is-opened="true"
                @click="onEditClick"
            >
                Close event
            </rollup-button>
        </header>

        <section class="point-edit__details">
            <section
                v-if="hasOffers"
                class="point-edit__section point-edit__section--offers"
            >
                <h3 class="point-edit__title point-edit__title--offers">
                    Offers
                </h3>
                <div class="point-edit__available-offers">
                    <AvailableOffer
                        v-for="availableOffer in availableOffers"
                        :key="availableOffer.title"
                        v-model:checked-offers="proxyCheckedOffers"
                        class="point-edit__offer-selector"
                        :offer="availableOffer"
                    />
                </div>
            </section>

            <section
                v-if="hasDescription"
                class="point-edit__section point-edit__section--destination"
            >
                <h3 class="point-edit__title point-edit__title--destination">
                    Destination
                </h3>
                <p class="point-edit__destination-description">
                    {{ pointState.destination.description }}
                </p>
                <div
                    v-if="pointState.destination.pictures?.length"
                    class="point-edit__photos-container"
                >
                    <div class="point-edit__photos-tape">
                        <img
                            v-for="photo in pointState.destination.pictures"
                            :key="photo.src"
                            class="point-edit__photo"
                            :src="photo.src"
                            :alt="photo.description"
                        />
                    </div>
                </div>
            </section>
        </section>
    </form>
</template>

<script>
import { storeToRefs } from 'pinia';

import { useDestinationsStore } from '@/stores/DestinationsStore.js';
import { useOffersStore } from '@/stores/OffersStore.js';
import { usePointsStore } from '@/stores/PointsStore.js';

import DestinationField from '@/components/point-parts/DestinationField.vue';
import TypeField from '@/components/point-parts/TypeField.vue';
import PriceField from '@/components/point-parts/PriceField.vue';
import DateFields from '@/components/point-parts/DateFields.vue';
import AvailableOffer from '@/components/point-parts/AvailableOffer.vue';
import RollupButton from '@/components/point-parts/RollupButton.vue';
import cloneDeep from 'lodash/cloneDeep';

export default {
    name: 'PointForm',
    components: {
        TypeField,
        DestinationField,
        PriceField,
        DateFields,
        AvailableOffer,
        RollupButton,
    },
    props: {
        point: {
            type: Object,
            required: true,
        },
    },
    emits: ['toggleCardView'],
    setup() {
        const { destinationsData } = storeToRefs(useDestinationsStore());
        const { offersData, getAvailableOffers } = storeToRefs(
            useOffersStore()
        );
        const { deletePoint, updatePoint } = usePointsStore();

        return {
            destinationsData,
            offersData,
            getAvailableOffers,
            deletePoint,
            updatePoint,
        };
    },

    data() {
        return {
            availableOffers: this.getAvailableOffers(this.point.type),
            pointState: cloneDeep(this.point),
        };
    },
    computed: {
        destName: {
            get() {
                return this.pointState.destination.name;
            },
            set(newName) {
                this.pointState.destination = this.destinationsData.find(
                    el => el.name === newName
                );
            },
        },
        isNewPoint() {
            return false;
        },
        proxyCheckedOffers: {
            get() {
                return [...this.pointState.offers];
            },
            set(newValue) {
                this.pointState.offers = newValue;
            },
        },
        hasDescription() {
            return (
                this.pointState.destination.pictures?.length ||
                this.pointState.destination.description
            );
        },
        hasOffers() {
            return this.offersData && this.availableOffers.length;
        },
    },
    watch: {
        'pointState.type'() {
            this.availableOffers = this.getAvailableOffers(
                this.pointState.type
            );
            this.pointState.offers = [];
        },
    },
    methods: {
        onEditClick() {
            this.$emit('toggleCardView');
        },
        onSaveClick() {
            this.updatePoint(this.pointState);
            this.$emit('toggleCardView');
        },
    },
};
</script>

<style>
.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 16px 5px;
    font-weight: 500;
    font-size: 17px;
    line-height: 21px;
    font-family: inherit;
    text-decoration: none;
    user-select: none;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    transition: opacity 0.2s;
}

.btn:hover {
    opacity: 0.8;
}

.btn:active {
    opacity: 0.6;
}

.btn--blue {
    color: #ffffff;
    background-color: #0d8ae4;
}

.btn:disabled {
    opacity: 0.46;
    cursor: default;
}

.point-edit {
    display: block;
    margin-left: 80px;
    background-color: #ffffff;
    border-radius: 18px;
    box-shadow: 0 11px 20px rgba(0, 0, 0, 0.043);
}

.point-edit__header {
    position: relative;
    display: flex;
    align-items: center;
    padding-bottom: 20px;
}

.point-edit__header::after {
    content: '';
    position: absolute;
    left: -20px;
    right: -20px;
    bottom: 0;
    height: 2px;
    background-color: #ffd054;
}

.point-edit__close-button {
    margin-left: auto;
}

.point-edit__field-group {
    display: flex;
    align-items: center;
    padding: 5px 2px;
    margin-right: 18px;
    border-bottom: 1px solid #0d8ae4;
}

.point-edit__field-group--destination {
    width: 200px;
}

.point-edit__field-group--time {
    width: 310px;
}

.point-edit__label {
    margin-right: 5px;
    cursor: pointer;
}

.point-edit__input {
    flex-grow: 1;
    appearance: none;
    border: none;
}

.point-edit__input--destination {
    width: 150px;
}

.point-edit__input--destination::-webkit-calendar-picker-indicator {
    display: none;
}

.point-edit__input--time {
    width: 130px;
    text-align: center;
}

.point-edit__input--price {
    width: 66px;
}

.point-edit__save-btn {
    margin-right: 18px;
}

.point-edit__reset-btn {
    display: block;
    font-weight: 500;
    font-size: 17px;
    line-height: 21px;
    user-select: none;
    color: #0d8ae4;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: opacity 0.2s;
}
.point-edit__reset-btn:hover {
    opacity: 0.8;
}
.point-edit__reset-btn:active {
    opacity: 0.6;
}

.point-edit__details {
    padding-top: 27px;
}

/* .point-edit--blocked .point-edit__details {
    position: relative;
}
.point-edit--blocked .point-edit__details::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 0 0 18px 18px;
} */

.point-edit__details-title {
    padding-left: 20px;
    margin-bottom: 24px;
    font-weight: 500;
    font-size: 23px;
    line-height: 27px;
}

.point-edit__section:not(:last-child) {
    margin-bottom: 28px;
}

.point-edit__section--offers {
    padding: 0 20px;
}

.point-edit__title {
    font-weight: 800;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.6px;
    text-transform: uppercase;
    color: #ffd054;
}
.point-edit__title--offers {
    margin-bottom: 15px;
}
.point-edit__title--destination {
    margin-bottom: 8px;
    margin-left: 20px;
}

.point-edit__available-offers {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: -6px;
}

.point-edit__offer-selector {
    margin-bottom: 6px;
}
.point-edit__offer-selector:not(:last-of-type) {
    margin-right: 6px;
}

.point-edit__destination-description {
    width: 560px;
    margin-bottom: 16px;
    margin-left: 20px;
    font-size: 15px;
    line-height: 18px;
}

.point-edit__photos-container {
    width: 100%;
    overflow-x: scroll;
}

.point-edit__photos-tape {
    display: flex;
    align-items: flex-start;
}

.point-edit__photo {
    display: block;
    height: 152px;
    width: auto;
    border-radius: 4px;
}
.point-edit__photo:first-child {
    padding-left: 20px;
}
.point-edit__photo:last-child {
    padding-right: 20px;
}
.point-edit__photo:not(:last-child) {
    margin-right: 5px;
}
</style>
