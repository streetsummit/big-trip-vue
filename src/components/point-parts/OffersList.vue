<template>
  <ul class="event__selected-offers">
    <li v-for="offer in offers" :key="offer.id" class="event__offer">
      <span class="event__offer-title">{{ offer.title }}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">{{ offer.price }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "OffersList",
  props: {
    offers: {
      type: Array,
      required: true,
    },
  },
  computed() {},
};
</script>

<style>
.event__selected-offers {
  width: 220px;
  padding: 0;
  margin: 0;
  font-weight: 600;
  list-style: none;
}

.event__offer::first-letter {
  text-transform: capitalize;
}
</style>
