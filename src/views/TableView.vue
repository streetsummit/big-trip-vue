<template>
    <section class="trip-points">
        <h2 class="visually-hidden">Trip events</h2>
        <PointSort class="trip-points__trip-sort" />

        <ul class="trip-points__list">
            <li class="trip-points__item">
                <PointEdit
                    v-bind="editPoint"
                    class="trip-points__card"
                />
            </li>
            <li
                class="trip-points__item"
                v-for="point in points"
                :key="point.id"
            >
                <PointCard
                    :point="point"
                    class="trip-points__card"
                />
            </li>
        </ul>
    </section>
</template>

<script>
import PointCard from '@/components/PointCard';
import PointEdit from '@/components/PointEdit';
import PointSort from '@/components/PointSort';

export default {
    name: 'TableView',
    props: {
        points: {
            required: true,
            type: Array,
        },
    },
    components: {
        PointSort,
        PointCard,
        PointEdit,
    },
    computed: {
        editPoint() {
            return this.points[0];
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
