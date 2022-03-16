<template>
  <form class="trip-filters" action="#" method="get">
    <div class="trip-filters__filter">
      <input
        id="filter-everything"
        class="trip-filters__filter-input visually-hidden"
        type="radio"
        name="trip-filter"
        value="everything"
      />
      <label class="trip-filters__filter-label" for="filter-everything"
        >Everything</label
      >
    </div>

    <div class="trip-filters__filter">
      <input
        id="filter-future"
        class="trip-filters__filter-input visually-hidden"
        type="radio"
        name="trip-filter"
        value="future"
      />
      <label class="trip-filters__filter-label" for="filter-future"
        >Future</label
      >
    </div>

    <div class="trip-filters__filter">
      <input
        id="filter-past"
        class="trip-filters__filter-input visually-hidden"
        type="radio"
        name="trip-filter"
        value="past"
        checked
      />
      <label class="trip-filters__filter-label" for="filter-past">Past</label>
    </div>

    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>
</template>

<script>
export default {
  name: "EventFilters",
};
</script>

<style>
.trip-filters {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}
.trip-filters--hidden {
  display: none;
}

.trip-filters__filter:not(:last-of-type) {
  margin-right: 19px;
}

.trip-filters__filter-label {
  font-weight: 800;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  user-select: none;
  opacity: 0.6;
  cursor: pointer;
  transition: opacity 0.2s;
}
.trip-filters__filter-label:hover {
  opacity: 1;
}
.trip-filters__filter-label:active {
  opacity: 0.6;
}
.trip-filters__filter-input:checked + .trip-filters__filter-label {
  opacity: 1;
  cursor: default;
}
.trip-filters__filter-input:disabled + .trip-filters__filter-label {
  opacity: 0.4;
  cursor: default;
}
</style>
