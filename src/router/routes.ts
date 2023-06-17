import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/IndexPage.vue'),
        meta: {
          requiresAuth: true
        },
      },
      {
        path: '/setting',
        name: 'setting',
        component: () => import('pages/SettingPage.vue')
      },
      {
        path: '/competitions',
        name: 'competitions',
        component: () => import('pages/CompetitionsPage.vue')
      },
      {
        path: '/yourworkspace',
        name: 'yourworkspace',
        component: () => import('pages/YourWorkspacePage.vue')
      },
      {
        path: '/project-overview/:id',
        name: 'projectOverview',
        component: () => import('pages/ProjectOverviewPage.vue')
      },
      {
        path: '/project-overview/:id/status/:id',
        name: 'approachStatus',
        component: () => import('pages/ApproachStatusPage.vue')
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
  {
    path: '/setting',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: 'account', name: 'accountSetting', component: () => import('pages/settings/AccountPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];


export default routes;
