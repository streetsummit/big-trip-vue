<template>
    <form
        class="point-edit"
        action="#"
        method="post"
    >
        <header class="point-edit__header">
            <div class="point-edit__type-wrapper">
                <label for="point-type-toggle">
                    <span class="visually-hidden">Choose event type</span>
                    <PointTypeIcon
                        :point-type="type"
                        class="point-edit__type-btn"
                    />
                </label>

                <input
                    class="point-edit__type-toggle visually-hidden"
                    id="point-type-toggle"
                    type="checkbox"
                />

                <div class="point-edit__type-list">
                    <fieldset class="point-edit__type-group">
                        <legend class="visually-hidden">Event type</legend>
                        <TypesListItem
                            v-for="type in availableTypes"
                            :key="type.id"
                            :type="type"
                            class="point-edit__type-item"
                        />
                    </fieldset>
                </div>
            </div>

            <div
                class="point-edit__field-group point-edit__field-group--destination"
            >
                <label
                    class="point-edit__label point-edit__type-output"
                    for="point-edit-destination-1"
                >
                    {{ type }}
                </label>
                <input
                    class="point-edit__input point-edit__input--destination"
                    id="point-edit-destination-1"
                    type="text"
                    name="point-edit-destination"
                    :value="destination.name"
                    list="destination-list-1"
                    required
                />
                <DestinationsList
                    v-if="destinationsData.length"
                    :destinations="destinationsData"
                />
            </div>

            <div class="point-edit__field-group point-edit__field-group--time">
                <label
                    class="visually-hidden"
                    for="point-edit-start-time-1"
                >
                    From
                </label>
                <input
                    class="point-edit__input point-edit__input--time"
                    id="point-edit-start-time-1"
                    type="text"
                    name="point-edit-start-time"
                    :value="formatDate(date_from, 'DD/MM/YY HH:mm')"
                />
                &mdash;
                <label
                    class="visually-hidden"
                    for="point-edit-end-time-1"
                >
                    To
                </label>
                <input
                    class="point-edit__input point-edit__input--time"
                    id="point-edit-end-time-1"
                    type="text"
                    name="point-edit-end-time"
                    :value="formatDate(date_to, 'DD/MM/YY HH:mm')"
                />
            </div>

            <div class="point-edit__field-group point-edit__field-group--price">
                <label
                    class="point-edit__label"
                    for="point-edit-price-1"
                >
                    <span class="visually-hidden">Price</span>
                    &euro;
                </label>
                <input
                    class="point-edit__input point-edit__input--price"
                    id="point-edit-price-1"
                    type="number"
                    name="point-edit-price"
                    :value="base_price"
                    min="0"
                    required
                />
            </div>

            <button
                class="point-edit__save-btn btn btn--blue"
                type="submit"
            >
                Save
            </button>
            <button
                class="point-edit__reset-btn"
                type="button"
            >
                <span v-if="isNewPoint">Cancel</span>
                <span v-else>Delete</span>
            </button>

            <rollup-button
                v-if="!isNewPoint"
                class="point-edit__close-button"
                :is-opened="true"
            >
                Close event
            </rollup-button>
        </header>

        <section class="point-edit__details">
            <section
                class="point-edit__section point-edit__section--offers"
                v-if="offersData && availableOffers.length"
            >
                <h3
                    class="point-edit__section-title point-edit__section-title--offers"
                >
                    Offers
                </h3>
                <div class="point-edit__available-offers">
                    <AvailableOffer
                        class="point-edit__offer-selector"
                        v-for="availableOffer in availableOffers"
                        :key="availableOffer.title"
                        :prop-value="availableOffer"
                        v-model="proxyCheckedOffers"
                    >
                        {{ availableOffer.title }} &plus;&euro;&nbsp;
                        {{ availableOffer.price }}
                    </AvailableOffer>
                </div>
            </section>

            <section
                v-if="destination.pictures.length || destination.description"
                class="point-edit__section point-edit__section--destination"
            >
                <h3
                    class="point-edit__section-title point-edit__section-title--destination"
                >
                    Destination
                </h3>
                <p class="point-edit__destination-description">
                    {{ destination.description }}
                </p>
                <div
                    v-if="destination.pictures.length"
                    class="point-edit__photos-container"
                >
                    <div class="point-edit__photos-tape">
                        <img
                            v-for="photo in destination.pictures"
                            class="point-edit__photo"
                            :src="photo.src"
                            :alt="photo.description"
                            :key="photo.src"
                        />
                    </div>
                </div>
            </section>
        </section>
    </form>
</template>

<script>
import { formatDate } from '@/utils/date';
import AvailableOffer from '@/components/point-parts/AvailableOffer';
import TypesListItem from '@/components/point-parts/TypesListItem';
import DestinationsList from '@/components/point-parts/DestinationsList';
import PointService from '@/services/PointService';
import RollupButton from '@/components/point-parts/RollupButton';
import PointTypeIcon from '@/components/point-parts/PointTypeIcon';

export default {
    name: 'PointEdit',
    components: {
        AvailableOffer,
        TypesListItem,
        DestinationsList,
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
            availableOffers: [],
            offersData: [],
            destinationsData: [],
            checkedOffers: [...this.offers],
            selectedType: this.type,
        };
    },

    computed: {
        isNewPoint() {
            return false;
        },
        availableTypes() {
            return this.offersData.map(el => el.type);
        },
        proxyCheckedOffers: {
            get() {
                return [...this.checkedOffers];
            },
            set(newValue) {
                this.checkedOffers = newValue;
            },
        },
    },
    created() {
        this.fetchOffers();
        this.fetchDestinations();
    },
    methods: {
        async fetchOffers() {
            try {
                const response = await PointService.getOffers();
                this.offersData = response.data;
                this.availableOffers = this.getAvailableOffers(this.offersData);
            } catch (e) {
                console.log(e);
            }
        },
        async fetchDestinations() {
            try {
                const response = await PointService.getDestinations();
                this.destinationsData = response.data;
            } catch (e) {
                console.log(e);
            }
        },
        getAvailableOffers(data) {
            return data.find(el => el.type === this.selectedType).offers;
        },

        formatDate,
    },
    watch: {
        selectedType() {
			this.availableOffers = this.getAvailableOffers(this.offersData);
			console.log(this.availableOffers);
            this.checkedOffers = [];
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

.point-edit__type-wrapper {
    margin-right: 18px;
}

.point-edit__type-btn {
    border: 1px solid #0d8ae4;
    user-select: none;
    cursor: pointer;
}

.point-edit__type-list {
    position: absolute;
    z-index: 2;
    top: calc(100% + 7px);
    left: -20px;
    display: none;
    width: 180px;
    background-color: #ffffff;
    border: 1px solid rgba(151, 151, 151, 0.169724);
    box-shadow: 0 11px 20px rgba(0, 0, 0, 0.219146);
    border-radius: 4px;
}

.point-edit__type-toggle:checked + .point-edit__type-list {
    display: block;
}

.point-edit__type-group {
    padding: 13px 0 11px;
}
.point-edit__type-group:not(:last-of-type) {
    border-bottom: 1px solid rgba(151, 151, 151, 0.33);
}

.point-edit__type-item:not(:last-child) {
    margin-bottom: 5px;
}

.point-edit__close-button {
    margin-left: auto;
}

/* .point-edit .rollup-btn::after {
    top: calc(50% + 3px);
    transform: translate(-50%, -50%) rotate(225deg);
} */

.point-edit__field-group {
    display: flex;
    align-items: center;
    padding: 5px 2px;
    margin-right: 18px;
    border-bottom: 1px solid #0d8ae4;
}
.point-edit__field-group--destination {
    width: 290px;
}

.point-edit__label {
    margin-right: 5px;
    cursor: pointer;
}
.point-edit__label::first-letter {
    text-transform: capitalize;
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

.point-edit__section-title {
    font-weight: 800;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.6px;
    text-transform: uppercase;
    color: #ffd054;
}
.point-edit__section-title--offers {
    margin-bottom: 15px;
}
.point-edit__section-title--destination {
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
