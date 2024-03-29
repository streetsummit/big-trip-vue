<template>
  <section class="trip-points">
    <h2 class="visually-hidden">Trip events</h2>
    <PointSort class="trip-points__trip-sort" />

    <ul class="trip-points__list">
      <li
        v-if="isNewPointAdding"
        class="trip-points__item"
      >
        <PointForm
          is-new
          class="trip-points__card"
          @close-edit-form="closeEditForm"
        />
      </li>
      <li
        v-for="point in sortedPoints"
        :key="point.id"
        class="trip-points__item"
      >
        <PointForm
          v-if="editedPointId === point.id"
          :point="point"
          class="trip-points__card"
          @close-edit-form="closeEditForm"
        />

        <PointCard
          v-else
          :point="point"
          class="trip-points__card"
          @open-edit-form="openEditForm(point.id)"
        />
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { storeToRefs } from 'pinia';

import PointCard from '@/components/PointCard.vue';
import PointForm from '@/components/PointForm.vue';
import PointSort from '@/components/PointSort.vue';

import useSortedPoints from '@/composables/useSortedPoints';
import usePointsList from '@/composables/usePointsList';
import { usePointsStore } from '@/stores/PointsStore';

export default defineComponent({
  name: 'TableView',
  components: {
    PointSort,
    PointCard,
    PointForm,
  },
  beforeRouteLeave() {
    if (this.editedPointId || this.isNewPointAdding) {
      const answer = window.confirm(
        'Вы действительно хотите выйти без сохранения данных?'
      );
      if (answer) {
        this.closeEditForm();
      } else {
        return false;
      }
    }
  },

  setup() {
    const { filteredPoints } = storeToRefs(usePointsStore());
    const { editedPointId, isNewPointAdding, openEditForm, closeEditForm } =
      usePointsList();
    const { getSortedPoints } = useSortedPoints();
    const sortedPoints = computed(() => getSortedPoints(filteredPoints.value));

    return {
      sortedPoints,
      editedPointId,
      isNewPointAdding,
      openEditForm,
      closeEditForm,
    };
  },
});
</script>

<style>
.trip-points__trip-sort {
  margin-bottom: 8px;
}

.trip-points__item {
  margin-bottom: 54px;
  margin-left: auto;
}

.trip-points__card {
  padding: 20px;
}
</style>
