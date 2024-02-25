import { createRouter, createWebHashHistory } from 'vue-router' 
import Home from './views/HomeView.vue';
import Login from './views/LoginView.vue';
import Dashboard from './views/DashboardView.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

// Route guard to check if the user is authenticated before accessing protected routes
router.beforeEach((to, from, next) => {
    // Careful with storing tokens in browser!!
  const token = localStorage.getItem('token');
  if (to.matched.some((route) => route.meta.requiresAuth)) {
    if (token) {
      // User is authenticated
      next();
    } else {
      // User is not authenticated; redirect to login
      next('/login');
    }
  } else {
    // Allow access to non-protected routes
    next();
  }
});

export default router;