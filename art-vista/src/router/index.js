import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Api from '@/views/Api.vue';
import About from '@/views/About.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/api',
    name: 'Api',
    component: Api
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  // Redirect any unknown paths to Home
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router