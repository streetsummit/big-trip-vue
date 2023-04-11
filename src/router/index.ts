import { createRouter, createWebHistory } from 'vue-router';
import Table from '@/views/TableView.vue';
import Stats from '@/views/StatsView.vue';
import Login from '@/views/LoginView.vue';
import { useAuthStore } from '@/stores/AuthStore';

// import WhereToGo from '@/views/WhereToGoView.vue';
import DestinationDetails from '@/components/DestinationDetails.vue';

const routes = [
  {
    path: '/',
    name: 'TableView',
    component: Table,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/login',
    name: 'LoginView',
    component: Login,
  },
  {
    path: '/stats',
    name: 'StatsView',
    component: Stats,
    meta: {
      requiresAuth: true,
    },
  },
  //   {
  //     path: '/where-to-go',
  //     name: 'WhereToGo',
  //     component: WhereToGo,
  //   },
  {
    path: '/destination/:name',
    name: 'DestinationDetails',
    component: DestinationDetails,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const { isAuthenticated } = useAuthStore();

  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;
