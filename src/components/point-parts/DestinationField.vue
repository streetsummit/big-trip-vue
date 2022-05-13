<template>
    <div>
        <input
            class="point-edit__input point-edit__input--destination"
            type="text"
            name="point-edit-destination"
            :value="selectedDestination"
            list="destination-list-1"
            @change="$emit('update:selected-destination', $event.target.value)"
            required
        />
        <datalist id="destination-list-1">
            <option
                v-for="destination in destinationsData"
                :value="destination.name"
                :key="destination.name"
            ></option>
        </datalist>
    </div>
</template>

<script>
export default {
    name: 'TypeAndDestinationField',
    props: {
        selectedDestination: String,
        destinationsData: Array,
    },
    emits: ['update:selected-destination'],
};
</script>
