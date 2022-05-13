<template>
    <label class="price">
        <span class="visually-hidden">Price</span>
        &euro;&nbsp;
        <input
            class="point-edit__input point-edit__input--price"
            type="number"
            name="point-edit-price"
            :value="price"
            min="0"
            @input="onInput"
            required
        />
    </label>
</template>

<script>
export default {
    name: 'PriceField',
    props: {
        price: Number,
    },
    emits: ['update:price'],
    methods: {
        onInput(evt) {
            this.$emit('update:price', evt.target.value);
        },
    },
};
</script>

<style scoped>
.price {
    display: flex;
}
</style>
