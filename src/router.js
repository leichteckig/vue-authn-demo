import { createRouter, createWebHashHistory } from 'vue-router' 
import Home from './views/HomeView.vue';
import Login from './views/LoginView.vue';
import Dashboard from './views/DashboardView.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },

  // Protected route
  { path: '/dashboard', component: Dashboard, meta: { /* Enter protection here */ } }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;