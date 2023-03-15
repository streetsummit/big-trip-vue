import { defineStore } from 'pinia';
import PointService from '@/services/PointService';
import { useFiltersStore } from '@/stores/FilterStore';
import { adaptToClient, adaptToServer } from '@/utils/adapter';
import type { ClientPoint, ClientLocalPoint, ServerPoint } from '@/types/types';

export const usePointsStore = defineStore('pointsStore', {
  state: () => ({
    pointsData: [] as ClientPoint[],
    isPointsLoading: false,
    error: null,
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
      this.pointsData = [];
      this.isPointsLoading = true;
      try {
        const response = await PointService.getPoints();
        this.pointsData = response.data.map((point: ServerPoint) =>
          adaptToClient(point)
        );
      } catch (err: any) {
      } catch (err) {
        this.error = err.response.data.message || err.message;
        this.error =
          err instanceof Error ? err.message : err.response.data.message;
      } finally {
        this.isPointsLoading = false;
      }
    },
    async deletePoint(id: string | number) {
      // todo обработать возможную ошибку сервера
      await PointService.deletePoint(id);
      await PointService.deletePoint(+id);
      this.pointsData = this.pointsData.filter(point => +point.id !== +id);
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
