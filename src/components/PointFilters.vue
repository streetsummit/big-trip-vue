<template>
    <form
        class="filters"
        action="#"
        method="get"
    >
        <div
            class="filters__filter"
            v-for="filter in filters"
            :key="filter.name"
        >
            <input
                :id="`filter-${filter.name}`"
                class="filters__filter-input visually-hidden"
                type="radio"
                name="filter"
                :value="filter.name"
            />
            <label
                class="filters__filter-label"
                :for="`filter-${filter.name}`"
            >
                {{ filter.label }}
            </label>
        </div>
    </form>
</template>

<script>
export default {
    name: 'PointFilters',
    data() {
        return {
            filters: [
                { name: 'everything', label: 'Everything' },
                { name: 'future', label: 'Future' },
                { name: 'past', label: 'Past' },
            ],
        };
    },
};
</script>

<style>
.filters {
    display: flex;
    flex-wrap: wrap;
}

.filters__filter:not(:last-of-type) {
    margin-right: 19px;
}

.filters__filter-label {
    font-weight: 800;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    user-select: none;
    opacity: 0.6;
    cursor: pointer;
    transition: opacity 0.2s;
}
.filters__filter-label:hover {
    opacity: 1;
}
.filters__filter-label:active {
    opacity: 0.6;
}
.filters__filter-input:checked + .filters__filter-label {
    opacity: 1;
    cursor: default;
}
.filters__filter-input:disabled + .filters__filter-label {
    opacity: 0.4;
    cursor: default;
}
</style>
