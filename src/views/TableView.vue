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
                    v-bind="point"
                    class="trip-points__card"
                />
            </li>
        </ul>
        <!-- <p
            class="trip-points__msg"
            v-else
        >
            Loading...
        </p> -->
    </section>
</template>

<script>
import PointCard from '@/components/PointCard';
import PointEdit from '@/components/PointEdit';
import PointSort from '@/components/PointSort';
// import PointService from '@/services/PointService.js';

export default {
    name: 'TableView',
    // data() {
    //     return {
    //         points: [],
    //     };
    // },
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
    // methods: {
    //     async fetchPoints() {
    //         try {
    //             const response = await PointService.getPoints();
    // 			this.points = response.data;

    //         } catch (e) {
    //             console.log(e);
    //         }
    //     },
    // },
    // created() {
    //     this.fetchPoints();
    // },
    computed: {
        editPoint() {
            return this.points[1];
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

.trip-points__msg {
    margin: 0;
    margin-top: 280px;
    font-weight: 500;
    font-size: 44px;
    line-height: 60px;
    text-align: center;
    color: #ffffff;
    opacity: 0.89;
}
</style>
