<template>
  <section class="event__section event__section--offers">
    <h3 class="event__section-title event__section-title--offers">Offers</h3>
    <div class="event__available-offers">
      <AvailableOffer
        v-for="availableOffer in availableOffers"
        :availableOffer="availableOffer"
        :currentOffers="currentOffers"
        :key="availableOffer.title"
      />
    </div>
  </section>
</template>

<script>
import AvailableOffer from './AvailableOffer.vue';
export default {
  name: 'OffersElement',
  components: {
    AvailableOffer,
  },
  props: {
    availableOffers: {
      type: Array,
      required: false,
    },
    currentOffers: {
      type: Array,
      required: false,
    },
  },
};
</script>
