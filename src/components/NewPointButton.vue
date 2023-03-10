<template>
    <button
        class="new-point-btn"
        type="button"
        :disabled="isNewPointAdding"
        @click="onClick"
    >
        New event
    </button>
</template>

<script>
import { useFiltersStore } from '@/stores/FilterStore.js';
import useSortedPoints from '@/composables/useSortedPoints.js';

import usePointsList from '@/composables/usePointsList.js';

export default {
    name: 'NewPointButton',
    setup() {
        const { resetFilter } = useFiltersStore();
        const { resetSort } = useSortedPoints();
        const { openEditForm, isNewPointAdding } = usePointsList();
        return { resetFilter, resetSort, openEditForm, isNewPointAdding };
    },
    methods: {
        onClick() {
            this.$router.push('/');
            this.resetFilter();
            this.resetSort();
            this.openEditForm();
        },
    },
};
</script>

<style lang="scss" scoped>
.new-point-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 17px 29px 16px;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    border-radius: 27px;
    transition: opacity 0.2s;
    color: #424242;
    background-color: #ffd054;
}

.new-point-btn::before {
    content: '\002B\000A0';
}

.new-point-btn:hover {
    opacity: 0.8;
}

.new-point-btn:active {
    opacity: 0.6;
}

.new-point-btn:disabled {
    background-color: #f1f1f1;
    color: #d2d2d2;
    pointer-events: none;
}
</style>
