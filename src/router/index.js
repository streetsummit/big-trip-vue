import { createRouter, createWebHistory } from 'vue-router';
import Table from '../views/TableView.vue';
import Stats from '../views/StatsView.vue';
import WhereToGo from '../views/WhereToGoView.vue';
import DestinationDetails from '../components/DestinationDetails';

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
  {
    path: '/where-to-go',
    name: 'WhereToGo',
    component: WhereToGo,
  },
  {
    path: '/destination/:name',
    name: 'DestinationDetails',
    component: DestinationDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
