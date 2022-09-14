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

<script>
import Dropdown from 'primevue/dropdown';
import { useDestinationsStore } from '@/stores/DestinationsStore.js';
import { storeToRefs } from 'pinia';

export default {
    name: 'DestinationField',
    components: { Dropdown },
    props: {
        destination: {
            type: Number,
            required: true,
        },
    },
    emits: ['update:destination'],
    setup() {
        const { destinationsData } = storeToRefs(useDestinationsStore());
        return { destinationsData };
    },
    computed: {
        localeDestination: {
            get() {
                return this.destination;
            },
            set(val) {
                this.$emit('update:destination', val);
            },
        },
    },
    
};
</script>
