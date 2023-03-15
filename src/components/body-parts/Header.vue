<template>
  <header class="page-header">
    <div class="container">
      <div class="page-header__wrapper">
        <img
          class="page-header__logo"
          src="@/assets/img/logo.png"
          width="42"
          height="42"
          alt="Trip logo"
        />

        <div class="trip-main">
          <TripInfo
            v-if="isPointsListNotEmpty"
            class="trip-main__info"
          />

          <div class="trip-main__controls">
            <MainMenu class="trip-main__navigation" />

            <PointFilters class="trip-main__filters" />
          </div>

          <NewPointButton class="trip-main__point-add-btn" />
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import MainMenu from '@/components/MainMenu.vue';
import TripInfo from '@/components/TripInfo.vue';
import PointFilters from '@/components/PointFilters.vue';
import { usePointsStore } from '@/stores/PointsStore';
import { storeToRefs } from 'pinia';
import NewPointButton from '@/components/NewPointButton.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageHeader',
  components: {
    MainMenu,
    TripInfo,
    PointFilters,
    NewPointButton,
  },
  setup() {
    const { isPointsListNotEmpty } = storeToRefs(usePointsStore());
    return { isPointsListNotEmpty };
  },
});
</script>

<style>
.page-header {
  padding-top: 23px;
  padding-bottom: 10px;
  color: #ffffff;
  background-color: #078ff0;
  background-image: url('@/assets/img/header-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
}

.page-header__wrapper {
  display: flex;
  align-items: flex-start;
  padding-left: 100px;
}

.page-header__logo {
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
}

.trip-main__info {
  width: 100%;
  margin-bottom: 35px;
}

.trip-main__controls {
  margin-right: 30px;
}

.trip-main__navigation {
  margin-bottom: 9px;
}

.trip-main__point-add-btn {
  min-width: 170px;
}
</style>
