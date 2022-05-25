import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/RegisterView')
  },
  {
    path: '/share',
    name: 'share',
    component: () => import('@/views/ShareView'),
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    // redirect: '/',
    component: () => import('@/views/NotFoundView')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: "exact-active",
})








export default router
