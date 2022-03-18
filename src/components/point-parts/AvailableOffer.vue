<template>
  <div class="event__offer-selector">
    <input
      class="event__offer-checkbox visually-hidden"
      :id="`event-offer-${id}-1`"
      type="checkbox"
      :name="`event-offer-${id}`"
      :data-title="availableOffer.title"
      :checked="isChecked"
    />
    <label class="event__offer-label" :for="`event-offer-${id}-1`">
      <span class="event__offer-title">{{ availableOffer.title }}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">{{ availableOffer.price }}</span>
    </label>
  </div>
</template>

<script>
import { makeId } from '@/utils/common';
export default {
  name: 'AvailableOffer',
  props: {
    currentOffers: {
      type: Array,
      required: false,
    },
    availableOffer: {
      type: Object,
      required: false,
    },
  },
  computed: {
    isChecked() {
      const isMatch = (offer) => offer.title === this.availableOffer.title;
      return this.currentOffers.some(isMatch);
    },
    id() {
      return makeId(6);
    },
  },
};
</script>
