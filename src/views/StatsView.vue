<template>
  <div class="about" v-if="points">
    <h1>This is an about page</h1>
    <p>There is {{ points.length }} points</p>
  </div>
</template>

<script>
export default {
  name: 'StatsView',
  props: {
    points: {
      type: Array,
    },
  },
};
</script>
