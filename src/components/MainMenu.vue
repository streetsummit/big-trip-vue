<template>
  <nav class="trip-controls__trip-tabs trip-tabs">
    <router-link to="/" class="trip-tabs__btn trip-tabs__btn--active"
      >Table</router-link
    >
    <router-link to="/stats" class="trip-tabs__btn">Stats</router-link>
  </nav>
</template>

<script>
export default {
  name: 'MainMenu',
};
</script>

<style scoped>
.trip-controls__trip-tabs {
  margin-bottom: 9px;
}

.trip-tabs {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}

.trip-tabs__btn {
  display: block;
  font-weight: 500;
  font-size: 21px;
  line-height: 25px;
  text-decoration: none;
  user-select: none;
  color: inherit;
  opacity: 0.8;
  transition: opacity 0.2s;
}
.trip-tabs__btn:not(:last-of-type) {
  margin-right: 26px;
}
.trip-tabs__btn:hover {
  opacity: 1;
}
.trip-tabs__btn:active {
  opacity: 0.6;
}
.trip-tabs__btn--active,
.trip-tabs__btn--active:hover,
.trip-tabs__btn--active:active {
  opacity: 1;
  cursor: default;
}
</style>
