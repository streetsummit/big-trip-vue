import { createRouter, createWebHistory } from 'vue-router';
import Table from '../views/TableView.vue';
import Stats from '../views/StatsView.vue';

const routes = [
  {
    path: '/',
    name: 'TableView',
    component: Table,
  },
  {
    path: '/stats',
    name: 'StatsView',
    component: Stats,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
