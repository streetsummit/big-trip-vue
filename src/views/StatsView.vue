<template>
    <section class="about">
        <h2>Trip statistic</h2>
        <p>There is {{ points.length }} points</p>
    </section>
</template>

<script>
export default {
    name: 'StatsView',
    props: {
        points: {
            type: Array,
            default: () => {
                [];
            },
        },
    },
};
</script>
