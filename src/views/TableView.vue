<template>
    <section class="trip-points">
        <h2 class="visually-hidden">Trip events</h2>
        <PointSort
            class="trip-points__trip-sort"
            v-model="modelValue"
            @change="changeSort"
        />

        <ul class="trip-points__list">
            <li
                class="trip-points__item"
                v-for="point in points"
                :key="point.id"
            >
                <Component
                    :is="
                        this.editedPointId === point.id
                            ? 'PointForm'
                            : 'PointCard'
                    "
                    :point="point"
                    @toggleCardView="toggleCardView"
                    @deletePoint="deletePoint"
                    class="trip-points__card"
                />
            </li>
        </ul>
    </section>
</template>

<script>
import PointCard from '@/components/PointCard';
import PointForm from '@/components/PointForm';
import PointSort from '@/components/PointSort';

export default {
    name: 'TableView',
	components: {
        PointSort,
        PointCard,
        PointForm,
    },
    props: {
        points: {
            required: true,
            type: Array,
        },
        modelValue: {
            type: String,
        },
    },
    data() {
        return {
            editedPointId: null,
        };
    },
    methods: {
        changeSort(event) {
            this.$emit('update:modelValue', event.target.value);
        },
        toggleCardView(id) {
            if (id) {
                this.editedPointId = id;
                return;
            }
            this.editedPointId = null;
        },
        deletePoint(id) {
            this.$emit('deletePoint', id);
			this.editedPointId = null;
        },
    },
};
</script>

<style>
.trip-points__trip-sort {
    margin-bottom: 8px;
}

.trip-points__item {
    margin-bottom: 54px;
    margin-left: auto;
}

.trip-points__card {
    padding: 20px;
    font-size: 17px;
    line-height: 21px;
}
</style>
