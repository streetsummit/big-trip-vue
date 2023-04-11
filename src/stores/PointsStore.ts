import { defineStore } from 'pinia';
import PointService from '@/services/PointService';
import { useFiltersStore } from '@/stores/FilterStore';
import { adaptToClient, adaptToServer } from '@/utils/adapter';
import type { ClientPoint, ClientLocalPoint, ServerPoint } from '@/types/types';

export const usePointsStore = defineStore('pointsStore', {
  state: () => ({
    pointsData: [] as ClientPoint[],
  }),

  getters: {
    filteredPoints: (state): ClientPoint[] => {
      const filterStore = useFiltersStore();
      return filterStore.getFilteredPoints(state.pointsData);
    },

    isPointsListNotEmpty: state => {
      return Boolean(state.pointsData.length);
    },
  },

  actions: {
    async fetchPoints() {
      const response = await PointService.getPoints();
      this.pointsData = response.data.map((point: ServerPoint) =>
        adaptToClient(point)
      );
    },
    async deletePoint(id: string | number) {
      const stringifiedId = String(id);
      // todo обработать возможную ошибку сервера
      await PointService.deletePoint(stringifiedId);
      this.pointsData = this.pointsData.filter(
        point => point.id !== stringifiedId
      );
    },
    async updatePoint(point: ClientPoint) {
      // todo обработать возможную ошибку сервера
      const adaptedPoint = adaptToServer(point);
      await PointService.updatePoint(adaptedPoint);
      this.pointsData = this.pointsData.map(el => {
        return +el.id === +point.id ? point : el;
      });
    },
    async addPoint(point: ClientLocalPoint) {
      // todo обработать возможную ошибку сервера
      await PointService.addPoint(adaptToServer(point));
      await this.fetchPoints();
    },
  },
});
