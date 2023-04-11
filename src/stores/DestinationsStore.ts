import { defineStore } from 'pinia';
import type { Destination } from '@/types/types';
import PointService from '@/services/PointService';
import { slugify } from '@/utils/common';

const createPicUrl = (keyword: string) => {
  return `https://loremflickr.com/300/200/city,${slugify(
    keyword
  )}?random=${Math.random()}`;
};

const replacePictures = <
  U extends { src: string },
  T extends { pictures: U[]; name: string }
>(
  dest: T
) => {
  return {
    ...dest,
    pictures: dest.pictures.map(pic => {
      return {
        ...pic,
        src: createPicUrl(dest.name),
      };
    }),
  };
};

export const useDestinationsStore = defineStore('destinationsStore', {
  state: () => ({
    destinationsData: [] as Destination[],
  }),

  getters: {
    getDestinationById(state) {
      return function (destId: number): Destination | undefined {
        return state.destinationsData.find(dest => dest.id === destId);
      };
    },
  },

  actions: {
    async fetchDestinations() {
      const response = await PointService.getDestinations();
      this.destinationsData = response.data.map(replacePictures);
    },
  },
});
