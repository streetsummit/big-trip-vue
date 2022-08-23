<template>
    <button
        class="rollup-btn"
        :class="{'rollup-btn--opened': isOpened}"
        type="button"
    >
        <span class="visually-hidden">
            <slot></slot>
        </span>
    </button>
</template>

<script>
export default {
    name: 'RollupButton',
    props: {
        isOpened: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style>
.rollup-btn {
    position: relative;
    display: block;
    width: 40px;
    height: 40px;
}
.rollup-btn::after {
    content: '';
    position: absolute;
    top: calc(50% - 5px);
    left: 50%;
    width: 10px;
    height: 10px;
    border-right: 2px solid #000000;
    border-bottom: 2px solid #000000;
    transform: translate(-50%, -50%) rotate(45deg);
    transition: border-color 0.2s, transform 0.6s;
}
.rollup-btn:hover::after {
    border-color: #0d8ae4;
}

.rollup-btn--opened::after {
    top: calc(50% + 3px);
    transform: translate(-50%, -50%) rotate(225deg);
}
</style>
