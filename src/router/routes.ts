import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '', 
        component: () => import('pages/IndexPage.vue'), 
        meta: {
          requiresAuth: true
        },
      },
      { 
        path: '/setting', 
        component: () => import('pages/SettingPage.vue') 
      }
    ],
  },
  {
    path: '/auth',
    component: () => import('layouts/AuthLayout.vue'),
    meta: {
      redirectAuth: true
    },
    children: [
      { 
        path: 'login', 
        component: () => import('pages/auth/SignIn.vue')
      },
      { 
        path: 'register', 
        component: () => import('pages/auth/SignUp.vue')
      }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
