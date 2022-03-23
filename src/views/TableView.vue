<template>
  <EventSort />

  <ul class="trip-events__list" v-if="points">
    <li class="trip-events__item">
      <PointEdit v-bind="points[7]" />
    </li>
    <li class="trip-events__item" v-for="point in points" :key="point.id">
      <PointComponent v-bind="point" />
    </li>
  </ul>
</template>

<script>
import PointComponent from '@/components/PointComponent.vue';
import PointEdit from '@/components/PointEdit.vue';
import PointService from '@/services/PointService.js';
import EventSort from '@/components/EventSort.vue';

export default {
  name: 'TableView',
  components: {
    EventSort,
    PointComponent,
    PointEdit,
  },
  data() {
    return {
      points: null,
    };
  },
  created() {
    PointService.getPoints()
      .then((response) => {
        this.points = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
.trip-events__list {
  padding: 0;
  margin: 0;
  list-style: none;
}

.trip-events__item {
  margin-bottom: 54px;
  margin-left: auto;
}
</style>
