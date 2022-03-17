<template>
  <ul class="trip-events__list">
    <li class="trip-events__item">
      <PointEdit :point="points[0]" />
    </li>
    <li class="trip-events__item" v-for="point in points" :key="point.id">
      <PointComponent :point="point" />
    </li>
  </ul>
</template>

<script>
import PointComponent from '@/components/PointComponent.vue';
import PointEdit from '@/components/PointEdit.vue';
import PointService from '@/services/PointService.js';

export default {
  name: 'TableView',
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
  components: {
    PointComponent,
    PointEdit,
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
