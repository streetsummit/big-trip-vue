import { defineStore } from 'pinia';
import PointService from '@/services/PointService';

import type { Offer } from '@/types/types';

export const useOffersStore = defineStore('offersStore', {
  state: () => ({
    offersData: [] as Offer[],
  }),

  getters: {
    getAvailableOffers(state) {
      return function (type: string) {
        return state.offersData.find(el => el.type === type)?.offers || [];
      };
    },

    getOffersByIds() {
      const getAvailableOffers = this.getAvailableOffers;

      return function <T extends { type: string; offers: number[] }>(point: T) {
        const availableOffers = getAvailableOffers(point.type);

        return availableOffers.filter(offer => point.offers.includes(offer.id));
      };
    },

    availableTypes(state): string[] {
      return state.offersData.map(el => el.type);
    },
  },

  actions: {
    async fetchOffers() {
      try {
        const response = await PointService.getOffers();
        this.offersData = response.data;
      } catch (e) {
        console.log(e);
      }
    },
  },
});
