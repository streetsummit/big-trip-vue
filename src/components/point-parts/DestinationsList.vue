<template>
    <datalist id="destination-list-1">
        <option
            v-for="destination in destinations"
            :value="destination.name"
            :key="destination.name"
        ></option>
    </datalist>
</template>

<script>
export default {
    name: 'DestinationsList',
    props: {
        destinations: {
            type: Array,
            required: true,
        },
    },
};
</script>
