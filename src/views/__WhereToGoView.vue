<template>
    <section v-if="destinations">
        <h2>Where to go?</h2>
        <ul>
            <li
                v-for="destination in destinations"
                :key="destination.name"
                class="destination__item"
            >
                <router-link
                    class="destination__link"
                    :to="{
                        name: 'DestinationDetails',
                        params: { name: destination.name },
                    }"
                >
                    <h3>{{ destination.name }}</h3>
                    <p>{{ destination.description }}</p>
                </router-link>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'WhereToGo',
    props: {
        destinations: {
            type: Array,
        },
    },
};
</script>

<style>
.destination__item {
    position: relative;
    display: block;
    margin-bottom: 20px;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 18px;
    box-shadow: 0 11px 20px rgba(0, 0, 0, 0.04);
}

.destination__item:last-child {
    margin-bottom: 0;
}

.destination__link:after {
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 100;
}

/* .destinations__photos {
  display: flex;
  width: 100%;
  overflow-x: scroll;
} */
</style>
