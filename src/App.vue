<template>
    <div>
        <page-header></page-header>
        <main class="page-body__page-main page-main">
            <div class="page-body__container board-container">
                <section class="trip-events">
                    <h2 class="visually-hidden">Trip events</h2>
                    <router-view
                        :points="points"
                        :destinations="destinations"
                    />
                </section>
            </div>
        </main>
    </div>
</template>

<script>
import PointService from '@/services/PointService.js';
import PageHeader from '@/components/body-parts/Header.vue';
import { watchEffect } from 'vue';

export default {
    name: 'App',
    components: {
        PageHeader,
    },
    data() {
        return {
            points: null,
            destinations: null,
        };
    },
    created() {
        watchEffect(() => {
            PointService.getPoints()
                .then(response => {
                    this.points = response.data;
                })
                .catch(() => {
                    this.$router.push({ name: 'NetworkError' });
                });
            PointService.getDestinations()
                .then(response => {
                    this.destinations = response.data;
                })
                .catch(() => {
                    this.$router.push({ name: 'NetworkError' });
                });
        });
    },
};
</script>

<style>
html {
    height: 100%;
    overflow-x: hidden;
    width: 100vw;
}

body {
    display: flex;
    flex-direction: column;
    min-width: 1200px;
    height: 100%;
    font-family: 'Montserrat', 'Arial', sans-serif;
    font-size: 17px;
    line-height: 1.2;
    color: #000000;
    background-color: #f2f2f2;
}

.visually-hidden {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    border: 0;
}

/* Проверить нужен ли класс */
.page-body__container {
    flex-grow: 1;
    position: relative;
    z-index: 0;
    width: 1200px;
    padding: 0 10px;
    margin: 0 auto;
}

.container {
    width: 1200px;
    margin: 0 auto;
    padding: 0 10px;
}

.page-body__container::after {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 130px;
    width: 2px;
    background-color: rgba(255, 255, 255, 0.58);
}

.page-body__page-main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

.trip-events {
    padding-top: 22px;
}
</style>
