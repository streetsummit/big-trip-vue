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
            required
            @input="onInput"
        />
    </label>
</template>

<script>
export default {
    name: 'PriceField',
    props: {
        price: {
            type: Number,
            required: true,
        },
    },
    emits: { 'update:price': price => typeof price === "number" },
    methods: {
        onInput(evt) {
            this.$emit('update:price', parseFloat(evt.target.value));
        },
    },
};
</script>

<style scoped>
.price {
    display: flex;
}
</style>
