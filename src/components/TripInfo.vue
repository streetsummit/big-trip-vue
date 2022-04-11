<template>
    <section class="trip-info">
        <div class="trip-info__main">
            <h1 class="trip-info__title">
                Amsterdam &mdash; Chamonix &mdash; Geneva
            </h1>

            <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>
        </div>

        <p class="trip-info__cost">
            Total: &euro;&nbsp;
            <span class="trip-info__cost-value">1230</span>
        </p>
    </section>
</template>

<script>
export default {
    name: 'TripInfo',
};
</script>

<style>
.trip-info {
    display: flex;
    align-items: center;
}

.trip-info__main {
    margin-right: 30px;
}

.trip-info__title {
    margin-bottom: 4px;
    font-weight: 800;
    font-size: 17px;
    line-height: 21px;
}

.trip-info__dates {
    font-weight: 800;
    font-size: 13px;
    line-height: 16px;
    text-transform: uppercase;
    opacity: 0.8;
}

.trip-info__cost {
    width: 170px;
    margin-left: auto;
    font-weight: 700;
    font-size: 21px;
    line-height: 25px;
    text-align: center;
}
</style>
