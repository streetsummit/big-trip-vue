<template>
  <span class="point-type">
    <img
      width="17"
      height="17"
      :src="pointIcon"
      alt=""
    />
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PointTypeIcon',
  props: {
    pointType: {
      type: String,
      required: true,
    },
  },
  computed: {
    pointIcon() {
      const url = `/img/icons/${this.pointType}.png`;
      return url;
    },
  },
});
</script>

<style>
.point-type {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  background-color: #ffffff;
  border-radius: 50%;
}
</style>
