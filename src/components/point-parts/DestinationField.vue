<template>
    <div>
        <Dropdown
            v-model="selectedDestination"
            :options="destinationsData"
            option-label="name"
            option-value="name"
            @change="onDestinationChange"
        />
    </div>
</template>

<script>
import Dropdown from 'primevue/dropdown';

export default {
    name: 'DestinationField',
    components: { Dropdown },
    props: {
        selectedDestination: String,
        destinationsData: Array,
    },
    emits: ['update:selected-destination'],
    methods: {
        onDestinationChange(event) {
            this.$emit('update:selected-destination', event.value);
        },
    },
};
</script>
