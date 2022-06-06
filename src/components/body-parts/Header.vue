<template>
    <header class="page-header">
        <div class="container">
            <div class="page-header__wrapper">
                <img
                    class="page-header__logo"
                    src="@/assets/img/logo.png"
                    width="42"
                    height="42"
                    alt="Trip logo"
                />

                <div class="trip-main">
                    <TripInfo class="trip-main__info" />

                    <div class="trip-main__controls">
                        <MainMenu class="trip-main__navigation" />

                        <PointFilters
                            v-model="modelValue"
                            class="trip-main__filters"
                            :filters="filters"
                            @change="changeFilter"
                        />
                    </div>

                    <button
                        class="trip-main__point-add-btn new-point-btn"
                        type="button"
                    >
                        New event
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import MainMenu from '@/components/MainMenu';
import TripInfo from '@/components/TripInfo';
import PointFilters from '@/components/PointFilters';

export default {
    name: 'PageHeader',
    components: {
        MainMenu,
        TripInfo,
        PointFilters,
    },
    props: {
        modelValue: {
            type: String,
        },
        filters: {
            type: Array,
        },
    },
    methods: {
        changeFilter(event) {
            this.$emit('update:modelValue', event.target.value);
        },
    },
};
</script>

<style>
.page-header {
    padding-top: 23px;
    padding-bottom: 10px;
    color: #ffffff;
    background-color: #078ff0;
    background-image: url('@/assets/img/header-bg.png');
    background-size: cover;
    background-repeat: no-repeat;
}

.page-header__wrapper {
    display: flex;
    align-items: flex-start;
    padding-left: 100px;
}

.page-header__logo {
    width: 42px;
    height: 42px;
    margin-right: 18px;
}

.trip-main {
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
}

.trip-main__info {
    width: 100%;
    margin-bottom: 35px;
}

.trip-main__controls {
    margin-right: 30px;
}

.trip-main__navigation {
    margin-bottom: 9px;
}

.trip-main__point-add-btn {
    min-width: 170px;
}

.trip-main__point-add-btn::before {
    content: '\002B\000A0';
}

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

.new-point-btn:hover {
    opacity: 0.8;
}

.new-point-btn:active {
    opacity: 0.6;
}
</style>
