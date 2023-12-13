import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import Dashboard from '../views/Dashboard.vue'
import PatientDetail from '../views/PatientDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/doctor',
      name: 'dashboard',
      children: [
        {
          path: 'dashboard',
          component: () => import('../views/Dashboard.vue'),
        },
        {
          path: 'profile',
          component: () => import('../views/PatientDetail.vue'),
        },
      ]
    },
    // {
    //   path: '/:pathMatch(.*)*',
    //   component: () => import('../views/NotFound.vue'),
    // },
  ]
})

export default router