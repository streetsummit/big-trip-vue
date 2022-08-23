<template>
    <button
        class="favorite-btn"
        :class="{ 'favorite-btn--active': isActive }"
        type="button"
    >
        <span class="visually-hidden">Add to favorite</span>
        <svg
            class="favorite-icon"
            width="28"
            height="28"
            viewBox="0 0 28 28"
        >
            <path
                d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"
            />
        </svg>
    </button>
</template>

<script>
export default {
    name: 'FavouriteButton',
    props: {
        isActive: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style scoped>
.favorite-btn {
    color: #ebebeb;
}

.favorite-btn--active {
    color: #ffd054;
}

.favorite-btn:hover {
    color: rgba(255, 208, 84, 0.6);
}

.favorite-icon {
    display: block;
    width: 28px;
    height: 28px;
    fill: currentColor;
    transition: fill 0.2s;
}
</style>
