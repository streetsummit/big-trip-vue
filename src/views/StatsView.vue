<template>
  <section class="about">
    <h2>Trip statistic</h2>
    <p>There is {{ filteredPoints.length }} points</p>
  </section>
</template>

<script setup>
import { usePointsStore } from '@/stores/PointsStore';
import { storeToRefs } from 'pinia';

const { filteredPoints } = storeToRefs(usePointsStore());
</script>
