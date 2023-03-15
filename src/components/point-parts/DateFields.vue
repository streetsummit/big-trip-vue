<template>
  <Calendar
    v-model="date"
    selection-mode="range"
    :show-time="true"
    @update:model-value="onChange"
  />
</template>

<script lang="ts">
import Calendar from 'primevue/calendar';
import { formatDate } from '@/utils/date';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DateFields',
  components: { Calendar },
  props: {
    dateFrom: {
      type: String,
      required: true,
    },
    dateTo: {
      type: String,
      required: true,
    },
  },
  emits: {
    'update:dateFrom': null,
    'update:dateTo': null,
  },
  data() {
    return {
      date: [new Date(this.dateFrom), new Date(this.dateTo)],
    };
  },
  methods: {
    onChange(date: Date[]) {
      let [newDateFrom, newDateTo] = date;
      this.$emit(
        'update:dateFrom',
        formatDate(newDateFrom, 'YYYY-MM-DDTHH:mm:ss[Z]')
      );
      this.$emit(
        'update:dateTo',
        formatDate(newDateTo, 'YYYY-MM-DDTHH:mm:ss[Z]')
      );
    },
  },
});
</script>
