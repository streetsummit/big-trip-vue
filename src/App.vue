<template>
  <header class="page-header">
    <div class="page-body__container page-header__container">
      <img
        class="page-header__logo"
        src="./assets/img/logo.png"
        width="42"
        height="42"
        alt="Trip logo"
      />

      <div class="trip-main">
        <TripInfo />

        <div class="trip-main__trip-controls trip-controls">
          <div class="trip-controls__navigation">
            <h2 class="visually-hidden">Switch trip view</h2>
            <MainMenu />
          </div>

          <div class="trip-controls__filters">
            <h2 class="visually-hidden">Filter events</h2>
            <EventFilters />
          </div>
        </div>

        <button
          class="trip-main__event-add-btn btn btn--big btn--yellow"
          type="button"
        >
          New event
        </button>
      </div>
    </div>
  </header>
  <main class="page-body__page-main page-main">
    <div class="page-body__container board-container">
      <section class="trip-events">
        <h2 class="visually-hidden">Trip events</h2>
        <router-view :points="points" />
      </section>
    </div>
  </main>
</template>

<script>
import PointService from '@/services/PointService.js';
import MainMenu from '@/components/MainMenu.vue';
import TripInfo from '@/components/TripInfo.vue';
import EventFilters from '@/components/EventFilters.vue';
import { watchEffect } from 'vue';

export default {
  name: 'App',
  components: {
    MainMenu,
    TripInfo,
    EventFilters,
  },
  data() {
    return {
      points: null,
    };
  },
  created() {
    watchEffect(() => {
      PointService.getPoints()
        .then((response) => {
          this.points = response.data;
        })
        .catch(() => {
          this.$router.push({ name: 'NetworkError' });
        });
    });
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
.btn--big {
  padding: 17px 29px 16px;
  font-size: 18px;
  line-height: 21px;
  border-radius: 27px;
}
.btn--yellow {
  color: #424242;
  background-color: #ffd054;
}
.btn--blue {
  color: #ffffff;
  background-color: #0d8ae4;
}
.btn:disabled {
  opacity: 0.46;
  cursor: default;
}
.page-header {
  padding-top: 23px;
  color: #ffffff;
  background-color: #078ff0;
  background-image: url('assets/img/header-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
}
@media (-webkit-min-device-pixel-ratio: 1.5),
  (min-resolution: 144dpi),
  (min-resolution: 1.5dppx) {
  .page-header {
    background-image: url('assets/img/header-bg@2x.png');
  }
}

.page-body__container {
  flex-grow: 1;
  position: relative;
  z-index: 0;
  box-sizing: border-box;
  width: 1200px;
  padding: 0 10px;
  margin: 0 auto;
}
.page-body__container::after {
  content: '';
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 130px;
  width: 2px;
  background-color: rgba(255, 255, 255, 0.58);
}

.page-header__container {
  display: flex;
  align-items: flex-start;
  padding-left: 110px;
}

main {
  display: block;
}

.page-header__logo {
  display: block;
  width: 42px;
  height: 42px;
  margin-right: 18px;
}

.trip-main {
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 10px;
}
.trip-main--hidden {
  display: none;
}

.trip-main__trip-controls {
  width: 600px;
}

.trip-main__event-add-btn {
  min-width: 170px;
}
.trip-main__event-add-btn::before {
  content: '\002B\000A0';
}
.trip-main__event-add-btn--hidden {
  display: none;
}

.page-body__page-main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.trip-events {
  padding-top: 22px;
}
.trip-events--hidden {
  display: none;
}
</style>
