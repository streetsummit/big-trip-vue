<template>
    <label>
        <input
            class="point-edit__offer-checkbox visually-hidden"
            type="checkbox"
            name="point-edit-offers[]"
            v-model="proxyModel"
            :value="propValue"
        />
        <span class="point-edit__offer-label">
            <slot></slot>
        </span>
    </label>
</template>

<script>
export default {
    name: 'AvailableOffer',
    props: {
        modelValue: { type: Array },
        propValue: { type: Object },
    },
    computed: {
        proxyModel: {
            get() {
                return this.modelValue;
            },
            set(val) {
                this.$emit('update:modelValue', val);
            },
        },
    },
};
</script>

<style>
.point-edit__offer-label {
    display: block;
    padding: 22px 30px 21px;
    font-size: 17px;
    line-height: 21px;
    user-select: none;
    background-color: #f2f2f2;
    border-radius: 32px;
    cursor: pointer;
    transition: background-color 0.2s;
}
.point-edit__offer-label:hover {
    background-color: rgba(13, 138, 228, 0.6);
}
.point-edit__offer-label::first-letter {
    text-transform: capitalize;
}

.point-edit__offer-checkbox:checked + .point-edit__offer-label {
    background-color: #0d8ae4;
}
</style>
