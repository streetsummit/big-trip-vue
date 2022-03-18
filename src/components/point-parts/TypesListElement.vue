<template>
  <div class="event__type-item">
    <input
      :id="id"
      class="event__type-input visually-hidden"
      type="radio"
      name="event-type"
      :value="type"
    />
    <label class="event__type-label" :class="labelClass" :for="id">{{
      type
    }}</label>
  </div>
</template>

// ${currentType === type ? 'checked' : ''}

<script>
export default {
  name: 'TypesListElement',
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    id() {
      return `event-type-${this.type}-1`;
    },
    labelClass() {
      return `event__type-label--${this.type}`;
    },
  },
};
</script>
