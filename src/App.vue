<template>
  <div>
    <PageHeader />
    <main class="page-main">
      <div class="container">
        <p
          v-if="isPointsLoading"
          class="trip-points__msg"
        >
          Loading...
        </p>
        <p
          v-if="error"
          class="trip-points__msg"
        >
          Shit happens
          <br />
          {{ error }}
        </p>

        <router-view
          v-else-if="filteredPoints.length"
          :points="filteredPoints"
        />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import PageHeader from '@/components/body-parts/Header.vue';
import { useDestinationsStore } from '@/stores/DestinationsStore';
import { useFiltersStore } from '@/stores/FilterStore';
import { useOffersStore } from '@/stores/OffersStore';
import { usePointsStore } from '@/stores/PointsStore';
import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'App',
  components: {
    PageHeader,
  },
  setup() {
    const { fetchDestinations } = useDestinationsStore();
    const { fetchOffers } = useOffersStore();
    const { fetchPoints } = usePointsStore();
    const { filteredPoints, isPointsLoading, error } = storeToRefs(
      usePointsStore()
    );
    const { selectedFilter } = storeToRefs(useFiltersStore());

    async function fetchData() {
      await fetchDestinations();
      await fetchOffers();
      await fetchPoints();
    }

    fetchData();

    return {
      filteredPoints,
      isPointsLoading,
      error,
      selectedFilter,
    };
  },
});
</script>

<style>
html {
  height: 100%;
  overflow: overlay;
}

body {
  display: flex;
  flex-direction: column;
  min-width: 1200px;
  height: 100%;
  font-family: 'Montserrat', 'Arial', sans-serif;
  font-size: 17px;
  line-height: 1.2;
  color: #000000;
  background-color: #f2f2f2;
}

.visually-hidden {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  border: 0;
}

/* .page-body__container {
    flex-grow: 1;
    position: relative;
    z-index: 0;
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
} */

.page-main {
  padding-top: 22px;
}

.container {
  width: 1200px;
  margin: 0 auto;
  padding: 0 10px;
}

.trip-points__msg {
  margin-top: 280px;
  font-weight: 500;
  font-size: 44px;
  line-height: 60px;
  text-align: center;
  color: #ffffff;
  opacity: 0.9;
}
</style>
