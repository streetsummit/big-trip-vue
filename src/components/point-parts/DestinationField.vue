<template>
    <div>
        <Dropdown
            v-model="destination"
            :options="destinationsData"
            option-label="name"
            option-value="name"
            @change="onDestinationChange"
        />
    </div>
</template>

<script>
import Dropdown from 'primevue/dropdown';
import { useDestinationsStore } from '@/stores/DestinationsStore.js';
import { storeToRefs } from 'pinia';

export default {
    name: 'DestinationField',
    components: { Dropdown },
    props: {
        selectedDestination: {
            type: String,
            required: true,
        },
    },
    emits: ['update:selected-destination'],
    setup() {
        const { destinationsData } = storeToRefs(useDestinationsStore());
        return { destinationsData };
    },
    computed: {
        destination: {
            get() {
                return this.selectedDestination;
            },
            set(val) {
                this.$emit('update:selected-destination', val);
            },
        },
    },
    methods: {
        onDestinationChange(event) {
            this.$emit('update:selected-destination', event.value);
        },
    },
};
</script>
