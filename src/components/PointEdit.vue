<template>
  <form class="event event--edit" action="#" method="post">
    <header class="event__header">
      <div class="event__type-wrapper">
        <label class="event__type event__type-btn" for="event-type-toggle-1">
          <span class="visually-hidden">Choose event type</span>
          <img
            class="event__type-icon"
            width="17"
            height="17"
            :src="eventIcon"
            alt="Event type icon"
          />
        </label>
        <input
          class="event__type-toggle visually-hidden"
          id="event-type-toggle-1"
          type="checkbox"
        />

        <div class="event__type-list">
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Event type</legend>
            <TypesListElement
              v-for="type in types"
              :key="type.id"
              :type="type"
            />
          </fieldset>
        </div>
      </div>

      <div class="event__field-group event__field-group--destination">
        <label
          class="event__label event__type-output"
          for="event-destination-1"
        >
          {{ type }}
        </label>
        <input
          class="event__input event__input--destination"
          id="event-destination-1"
          type="text"
          name="event-destination"
          :value="destination.name"
          list="destination-list-1"
          required
        />
        <DestinationsList v-if="destinations" :destinations="destinations" />
      </div>

      <div class="event__field-group event__field-group--time">
        <label class="visually-hidden" for="event-start-time-1">From</label>
        <input
          class="event__input event__input--time"
          id="event-start-time-1"
          type="text"
          name="event-start-time"
          :value="this.$dayjs(date_from).format('DD/MM/YY HH:mm')"
        />
        &mdash;
        <label class="visually-hidden" for="event-end-time-1">To</label>
        <input
          class="event__input event__input--time"
          id="event-end-time-1"
          type="text"
          name="event-end-time"
          :value="this.$dayjs(date_to).format('DD/MM/YY HH:mm')"
        />
      </div>

      <div class="event__field-group event__field-group--price">
        <label class="event__label" for="event-price-1">
          <span class="visually-hidden">Price</span>
          &euro;
        </label>
        <input
          class="event__input event__input--price"
          id="event-price-1"
          type="number"
          name="event-price"
          :value="base_price"
          min="0"
          required
        />
      </div>

      <button class="event__save-btn btn btn--blue" type="submit">Save</button>
      <button class="event__reset-btn" type="button">
        <span v-if="isNewPoint">Cancel</span>
        <span v-else>Delete</span>
      </button>

      <button v-if="!isNewPoint" class="event__rollup-btn" type="button">
        <span class="visually-hidden">Close event</span>
      </button>
    </header>
    <section class="event__details">
      <OffersElement
        v-if="offersData && availableOffers.length"
        :availableOffers="availableOffers"
        :currentOffers="currentOffers"
      />
      <section
        v-if="destination.pictures.length || destination.description"
        class="event__section event__section--destination"
      >
        <h3 class="event__section-title event__section-title--destination">
          Destination
        </h3>
        <p class="event__destination-description">
          {{ destination.description }}
        </p>
        <div v-if="destination.pictures.length" class="event__photos-container">
          <div class="event__photos-tape">
            <img
              v-for="photo in destination.pictures"
              class="event__photo"
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
import TypesListElement from '@/components/point-parts/TypesListElement';
import DestinationsList from '@/components/point-parts/DestinationsList';
import OffersElement from '@/components/point-parts/OffersElement';
import PointService from '@/services/PointService';

export default {
  name: 'PointEdit',
  components: {
    TypesListElement,
    DestinationsList,
    OffersElement,
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
      favoriteClass: 'event__favorite-btn--active',
      destinations: null,
      offersData: null,
      availableOffers: null,
    };
  },
  created() {
    PointService.getDestinations()
      .then((response) => {
        this.destinations = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    PointService.getOffers()
      .then((response) => {
        this.offersData = response.data;
        this.availableOffers = this.getAvailableOffers(this.offersData);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed: {
    eventIcon() {
      return require(`../assets/img/icons/${this.type}.png`);
    },
    types() {
      return this.offersData?.map((offer) => offer.type);
    },
    currentOffers() {
      return this.offers;
    },
    isNewPoint() {
      return false;
    },
  },
  methods: {
    getAvailableOffers(data) {
      return data.find((el) => el.type === this.type).offers;
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

.event--edit {
  display: block;
  margin-left: 80px;
  padding: 0;
  background-color: #ffffff;
  border-radius: 18px;
  box-shadow: 0 11px 20px rgba(0, 0, 0, 0.043);
}

.event__header {
  display: flex;

  align-items: center;
  padding: 20px;
}

.event__type-wrapper {
  position: relative;
}

.event__type {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 42px;
  height: 42px;
  margin-right: 18px;
  background-color: #ffffff;
  border-radius: 50%;
}

.event__type-btn {
  padding: 0;
  border: 1px solid #0d8ae4;
  user-select: none;
  cursor: pointer;
}

.event__type-icon {
  display: block;
  width: 17px;
  height: 17px;
}

.event__type-list {
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

.event__type-toggle:checked + .event__type-list {
  display: block;
}

.event__type-group {
  padding: 13px 0 11px;
  margin: 0;
  border: none;
}
.event__type-group:not(:last-of-type) {
  border-bottom: 1px solid rgba(151, 151, 151, 0.33);
}

.event__type-item:not(:last-child) {
  margin-bottom: 5px;
}

.event__type-label {
  position: relative;
  display: block;
  padding: 5px 10px 5px 62px;
  font-size: 17px;
  line-height: 21px;
  user-select: none;
  cursor: pointer;
  transition: color 0.2s;
}
.event__type-label::before {
  content: '';
  position: absolute;
  top: calc(50% - 3px);
  left: 32px;
  width: 17px;
  height: 17px;
  background-position: 0 0;
  background-size: 17px 17px;
  background-repeat: no-repeat;
  transform: translateY(-50%);
}
.event__type-label--taxi::before {
  background-image: url('../assets/img/icons/taxi.png');
}
.event__type-label--bus::before {
  background-image: url('../assets/img/icons/bus.png');
}
.event__type-label--train::before {
  background-image: url('../assets/img/icons/train.png');
}
.event__type-label--ship::before {
  background-image: url('../assets/img/icons/ship.png');
}
.event__type-label--transport::before {
  background-image: url('../assets/img/icons/transport.png');
}
.event__type-label--drive::before {
  background-image: url('../assets/img/icons/drive.png');
}
.event__type-label--flight::before {
  background-image: url('../assets/img/icons/flight.png');
}
.event__type-label--check-in::before {
  background-image: url('../assets/img/icons/check-in.png');
}
.event__type-label--sightseeing::before {
  background-image: url('../assets/img/icons/sightseeing.png');
}
.event__type-label--restaurant::before {
  background-image: url('../assets/img/icons/restaurant.png');
}
.event__type-label:hover {
  color: #ffd054;
}

.event__type-label::first-letter {
  text-transform: capitalize;
}

.event__type-input:checked + .event__type-label {
  color: #000000;
  background-color: #ffd054;
}
.event__type-input:checked + .event__type-label::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 11px;
  width: 8px;
  height: 8px;
  background-color: #ffffff;
  border-radius: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
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

.event__field-group {
  display: flex;

  align-items: center;
  padding: 5px 2px;
  margin-right: 18px;
  border-bottom: 1px solid #0d8ae4;
}
.event__field-group--destination {
  width: 290px;
}

.event__label {
  margin-right: 5px;
  cursor: pointer;
}
.event__label::first-letter {
  text-transform: capitalize;
}

.event__input {
  flex-grow: 1;
  padding: 0;
  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  appearance: none;
  border: none;
}
.event__input--destination {
  width: 150px;
}
.event__input--destination::-webkit-calendar-picker-indicator {
  display: none;
}
.event__input--time {
  width: 130px;
  text-align: center;
}
.event__input--price {
  width: 66px;
}

.event__save-btn {
  margin-right: 18px;
}

.event__reset-btn {
  display: block;
  padding: 0;
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
  font-family: inherit;
  user-select: none;
  color: #0d8ae4;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s;
}
.event__reset-btn:hover {
  opacity: 0.8;
}
.event__reset-btn:active {
  opacity: 0.6;
}

.event__details {
  padding: 20px 0 27px;
  border-top: 2px solid #ffd054;
}

.event--blocked .event__details {
  position: relative;
}
.event--blocked .event__details::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 0 0 18px 18px;
}

.event__details-title {
  padding-left: 20px;
  margin: 0;
  margin-bottom: 24px;
  font-weight: 500;
  font-size: 23px;
  line-height: 27px;
}

.event__section:not(:last-child) {
  margin-bottom: 28px;
}

.event__section--offers {
  padding: 0 20px;
}

.event__section-title {
  margin: 0;
  font-weight: 800;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: #ffd054;
}
.event__section-title--offers {
  margin-bottom: 15px;
}
.event__section-title--destination {
  margin-bottom: 8px;
  margin-left: 20px;
}

.event__available-offers {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -6px;
}

.event__offer-selector {
  margin-bottom: 6px;
}
.event__offer-selector:not(:last-of-type) {
  margin-right: 6px;
}

.event__offer-label {
  display: block;
  padding: 22px 30px 21px;
  font-size: 17px;
  line-height: 21px;
  user-select: none;
  background-color: #f2f2f2;
  border-radius: 32px;
  cursor: pointer;
  transition: background-color 0.2s;
}
.event__offer-label:hover {
  background-color: rgba(13, 138, 228, 0.6);
}
.event__offer-label::first-letter {
  text-transform: capitalize;
}

.event__offer-checkbox:checked + .event__offer-label {
  background-color: #0d8ae4;
}

.event__destination-description {
  width: 560px;
  margin: 0;
  margin-bottom: 16px;
  margin-left: 20px;
  font-size: 15px;
  line-height: 18px;
}

.event__photos-container {
  width: 100%;
  overflow-x: scroll;
}

.event__photos-tape {
  display: flex;
  align-items: flex-start;
}

.event__photo {
  display: block;
  height: 152px;
  width: auto;
  border-radius: 4px;
}
.event__photo:first-child {
  padding-left: 20px;
}
.event__photo:last-child {
  padding-right: 20px;
}
.event__photo:not(:last-child) {
  margin-right: 5px;
}
</style>
