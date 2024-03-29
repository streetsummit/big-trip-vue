<template>
  <div class="filters">
    <label
      v-for="filter in filters"
      :key="filter"
      class="filters__filter"
    >
      <input
        class="filters__filter-input visually-hidden"
        type="radio"
        name="filter"
        :value="filter"
        :checked="selectedFilter === filter"
        @change="onFilterChange"
      />
      <span class="filters__filter-label">
        {{ capitalizeFirstLetter(filter) }}
      </span>
    </label>
  </div>
</template>

<script lang="ts">
import { capitalizeFirstLetter } from '@/utils/common';
import { useFiltersStore } from '@/stores/FilterStore';
import usePointsList from '@/composables/usePointsList';
import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';
import type { FilterType } from '@/utils/constants';

export default defineComponent({
  name: 'PointFilters',
  setup() {
    const { filters, selectedFilter } = storeToRefs(useFiltersStore());
    const { changeFilter } = useFiltersStore();
    const { closeEditForm } = usePointsList();

    const onFilterChange = (evt: Event) => {
      changeFilter((evt.target as HTMLInputElement).value as FilterType);
      closeEditForm();
    };

    return {
      filters,
      selectedFilter,
      onFilterChange,
    };
  },
  methods: {
    capitalizeFirstLetter,
  },
});
</script>

<style>
.filters {
  display: flex;
  flex-wrap: wrap;
}

.filters__filter:not(:last-of-type) {
  margin-right: 19px;
}

.filters__filter-label {
  font-weight: 800;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  user-select: none;
  opacity: 0.6;
  cursor: pointer;
  transition: opacity 0.2s;
}
.filters__filter-label:hover {
  opacity: 1;
}
.filters__filter-label:active {
  opacity: 0.6;
}
.filters__filter-input:checked + .filters__filter-label {
  opacity: 1;
  cursor: default;
}
.filters__filter-input:disabled + .filters__filter-label {
  opacity: 0.4;
  cursor: default;
}
</style>
