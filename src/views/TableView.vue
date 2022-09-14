<template>
    <section class="trip-points">
        <h2 class="visually-hidden">Trip events</h2>
        <PointSort class="trip-points__trip-sort" />

        <ul class="trip-points__list">
            <li
                v-for="point in sortedPoints"
                :key="point.id"
                class="trip-points__item"
            >
                <Component
                    :is="currentCardView(point.id)"
                    :point="point"
                    class="trip-points__card"
                    @toggle-card-view="toggleCardView"
                />
            </li>
        </ul>
    </section>
</template>

<script>
import PointCard from '@/components/PointCard.vue';
import PointForm from '@/components/PointForm.vue';
import PointSort from '@/components/PointSort.vue';
import useSortedPoints from '@/hooks/useSortedPoints.js';
import { computed } from 'vue';
import usePointsList from '@/hooks/usePointsList.js';

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
    },
    setup(props) {
        const { editedPointId, toggleCardView } = usePointsList();
        const { getSortedPoints } = useSortedPoints();
        const sortedPoints = computed(() => getSortedPoints(props.points));

        return { sortedPoints, editedPointId, toggleCardView };
    },
    methods: {
        currentCardView(id) {
            return this.editedPointId === id ? 'PointForm' : 'PointCard';
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
