<template>
  <div>
    <Dropdown
      v-model="localeDestination"
      :options="destinationsData"
      option-label="name"
      option-value="id"
    />
  </div>
</template>

<script lang="ts">
import Dropdown from 'primevue/dropdown';
import { useDestinationsStore } from '@/stores/DestinationsStore';
import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DestinationField',
  components: { Dropdown },
  props: {
    destination: {
      type: Number,
      required: true,
    },
  },
  emits: { 'update:destination': null },
  setup() {
    const { destinationsData } = storeToRefs(useDestinationsStore());
    return { destinationsData };
  },
  computed: {
    localeDestination: {
      get() {
        return this.destination;
      },
      set(newDestId: number) {
        this.$emit('update:destination', newDestId);
      },
    },
  },
});
</script>
