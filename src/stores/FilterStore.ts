import type { ClientPoint } from '@/types/types';
import { FilterType } from '@/utils/constants';
import { isFuture, isPast } from '@/utils/filter-sort';
import { defineStore } from 'pinia';

const defaultFilter = FilterType.EVERYTHING;

export const useFiltersStore = defineStore('filterStore', {
  state: () => ({
    filters: Object.values(FilterType),
    selectedFilter: defaultFilter,
  }),
  getters: {
    getFilteredPoints: state => {
      return (points: ClientPoint[]) => {
        switch (state.selectedFilter) {
          case FilterType.EVERYTHING:
            return points;
          case FilterType.FUTURE:
            return points.filter(isFuture);
          case FilterType.PAST:
            return points.filter(isPast);
          default:
            return [];
        }
      };
    },
  },
  actions: {
    changeFilter(newVal: FilterType): void {
      this.selectedFilter = newVal;
    },

    resetFilter(): void {
      this.selectedFilter = defaultFilter;
    },
  },
});
