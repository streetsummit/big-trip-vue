<template>
    <Calendar
        v-model="date"
        selectionMode="range"
		:showTime="true"
		@update:modelValue="onChange"
    />
</template>

<script>
import Calendar from 'primevue/calendar';
import { formatDate } from '@/utils/date.js';

export default {
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
	data() {
		return {
			date: [new Date(this.dateFrom), new Date(this.dateTo)],
		}
	},
	methods: {
        onChange(date) {
			let [newDateFrom, newDateTo] = date;
			this.$emit('update:dateFrom', formatDate(newDateFrom, 'YYYY-MM-DDTHH:mm:ss[Z]'))
            this.$emit('update:dateTo', formatDate(newDateTo, 'YYYY-MM-DDTHH:mm:ss[Z]'))
        },
    },
};
</script>
