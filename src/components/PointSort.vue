<template>
    <div class="trip-sort">
        <div
            v-for="sort in sortControls"
            :key="sort"
            class="trip-sort__item"
            :class="`trip-sort__item--${sort}`"
        >
            <label>
                <input
                    v-model="modelValue"
                    class="trip-sort__input visually-hidden"
                    type="radio"
                    name="trip-sort"
                    :value="sort"
                    :disabled="isDisabled(sort)"
                    @change="changeSort"
                />
                <span class="trip-sort__btn">{{ formatLabel(sort) }}</span>
            </label>
        </div>
    </div>
</template>

<script>
import { capitalizeFirstLetter } from '@/utils/common.js';
import useSortedPoints from '@/hooks/useSortedPoints.js';
export default {
    name: 'PointSort',
    props: {
        modelValue: {
            type: String,
        },
    },
	emits: ['update:modelValue'],
    setup() {
        const { sortControls, isDisabled } = useSortedPoints();
        return { sortControls, isDisabled };
    },
    methods: {
        formatLabel(sort) {
            return capitalizeFirstLetter(sort);
        },
        changeSort(event) {
            this.$emit('update:modelValue', event.target.value);
        },
    },
};
</script>

<style>
.trip-sort {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}

.trip-sort__item {
    margin-right: 15px;
    font-weight: 800;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.6px;
    text-transform: uppercase;
    color: #b4b4b4;
    cursor: default;
    transition: color 0.2s;
}
.trip-sort__item:last-child {
    margin-right: 0;
}
.trip-sort__item--day {
    width: 55px;
    text-align: center;
    margin-right: 83px;
}
.trip-sort__item--event {
    width: 300px;
}
.trip-sort__item--time {
    width: 225px;
}
.trip-sort__item--price {
    width: 90px;
}

.trip-sort__btn {
    display: inline-flex;
    align-items: center;
    padding: 7px 15px 6px 22px;
    border: 1px solid transparent;
    border-radius: 14px;
    cursor: pointer;
}
.trip-sort__btn:hover {
    color: #000000;
}
.trip-sort__input:checked + .trip-sort__btn {
    position: relative;
    color: #000000;
    border-color: #000000;
}
.trip-sort__input:checked + .trip-sort__btn::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 8px;
    width: 8px;
    height: 8px;
    background-color: #ffd054;
    border-radius: 50%;
    transform: translateY(-50%);
}

.trip-sort__input:disabled + .trip-sort__btn {
    opacity: 0.6;
}
.trip-sort__input:disabled + .trip-sort__btn:hover {
    color: #b4b4b4;
    cursor: default;
}
</style>
