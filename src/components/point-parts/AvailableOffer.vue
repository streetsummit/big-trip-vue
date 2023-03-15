<template>
  <label class="offer">
    <input
      v-model="localCheckedOffers"
      class="offer__checkbox visually-hidden"
      type="checkbox"
      name="point-edit-offers[]"
      :value="offer"
    />
    <span class="offer__label">
      {{ offer.title }} &plus;&euro;&nbsp;
      {{ offer.price }}
    </span>
  </label>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { OfferItem } from '@/types/types';

export default defineComponent({
  name: 'AvailableOffer',
  props: {
    checkedOffers: {
      type: Array as PropType<number[]>,
      default: () => {
        [];
      },
    },
    offer: {
      type: Object as PropType<OfferItem>,
      required: true,
    },
  },
  emits: { 'update:checkedOffers': null },

  computed: {
    localCheckedOffers: {
      get() {
        return this.checkedOffers;
      },
      set(val: number[]) {
        this.$emit('update:checkedOffers', val);
      },
    },
  },
});
</script>

<style scoped>
.offer__label {
  display: block;
  padding: 20px 30px;
  font-size: 17px;
  line-height: 21px;
  user-select: none;
  background-color: #f2f2f2;
  border-radius: 32px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.offer__label:hover {
  background-color: rgba(13, 138, 228, 0.6);
}

.offer__checkbox:checked + .offer__label {
  background-color: #0d8ae4;
}
</style>
