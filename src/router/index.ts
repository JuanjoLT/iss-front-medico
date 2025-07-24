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
    {
      path: '/Home',
      name: 'HomeSecond',
      component: () => import('@/modules/landing/views/HomeUser.vue'),
    },
    {
      path: '/PatientDetails',
      name: 'PatientDetails',
      component: () => import('@/modules/landing/views/PatientDetails.vue'),
    },
    {
      path: '/Daily',
      name: 'Daily',
      component: () => import('@/modules/landing/views/Daily.vue'),
    },
  ],
});

export default router;