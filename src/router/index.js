import { createRouter, createWebHistory } from 'vue-router';
import PaginaRestaurantes from '../views/PaginaRestaurante.vue';
import PaginaBares from '../views/PaginaBares.vue';
import PaginPrincipal from '@/views/PaginPrincipal.vue';
import PaginaCuriosidades from '../views/PaginaCuriosidades.vue'
import Fritos from '../views/Fritos.vue';

const routes = [
  {
    path: '/',
    redirect: '/principal'
  },
  {
    path:'/principal',
    component:PaginPrincipal,
    name:'ScamFree'
  },
  {
    path: '/Restaurantes',
    component: PaginaRestaurantes,
    name: 'Restaurantes'
  },
  {
    path: '/Bares',
    component: PaginaBares,
    name: 'Bares'
  },
  {
    path:'/Curiosidades',
    component: PaginaCuriosidades,
    name:'Curiosidades'
  },
  {
    path:'/Fritos',
    component: Fritos,
    name:'Fritos'
  },
  {
    path: '/Fritos',
    name: 'Fritos',
    component: () => import('../views/Fritos.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
