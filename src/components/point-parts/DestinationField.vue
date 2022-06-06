<template>
    <div>
        <input
            class="point-edit__input point-edit__input--destination"
            type="text"
            name="point-edit-destination"
            :value="selectedDestination"
            list="destination-list"
            required
            @change="$emit('update:selected-destination', $event.target.value)"
        />
        <datalist id="destination-list">
            <option
                v-for="destination in destinationsData"
                :key="destination.name"
                :value="destination.name"
            ></option>
        </datalist>
    </div>
</template>

<script>
export default {
    name: 'DestinationField',
    props: {
        selectedDestination: String,
        destinationsData: Array,
    },
    emits: ['update:selected-destination'],
};
</script>
