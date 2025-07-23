import HomePage from '@/modules/landing/views/HomePage.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/LoginWorker',
      name: 'LoginWorker',
      component: () => import('@/modules/landing/views/LoginWorker.vue'),
    },
    {
      path: '/ListingPage',
      name: 'ListingPage',
      component: () => import('@/modules/landing/views/ListingPage.vue'),
    },
    {
      path: '/NewPatient',
      name: 'NewPatient',
      component: () => import('@/modules/landing/views/NewPatient.vue'),
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: () => import('@/modules/landing/views/Profile.vue'),
    },
  ],
});

export default router;