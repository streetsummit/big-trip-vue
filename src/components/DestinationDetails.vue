<template>
  <div>
    <h2>destination.name</h2>
    <p>destination.description</p>
    <!-- <ul>
      <li v-for="photo in destination.pictures" :key="photo.src">
        <img :src="photo.src" alt="photo.description" />
      </li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: 'DestinationDetails',
};
</script>
