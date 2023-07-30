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
          redirectAuth: true,
        },
      },
      {
        path: '/competitions',
        name: 'competitions',
        component: () => import('pages/CompetitionsPage.vue'),
        meta: {
          redirectAuth: true,
        },
      },
      {
        path: '/yourworkspace',
        name: 'yourworkspace',
        component: () => import('pages/YourWorkspacePage.vue'),
        meta: {
          redirectAuth: true,
        },
      },
      {
        path: '/project-overview/:id',
        name: 'projectOverview',
        component: () => import('pages/ProjectOverviewPage.vue'),
        meta: {
          redirectAuth: true,
        },
      },
      {
        path: '/project-overview/:id/status/:id',
        name: 'approachStatus',
        component: () => import('pages/ApproachStatusPage.vue'),
        meta: {
          redirectAuth: true,
        },
      },
      {
        path: 'setting',
        name: 'setting',
        component: () => import('pages/SettingPage.vue'),
        meta: {
          redirectAuth: true,
        },
      },
      {
        path: 'setting/account',
        name: 'account',
        component: () => import('pages/settings/AccountPage.vue'),
        meta: {
          redirectAuth: true,
        },
      },
      {
        path: 'setting/notifications',
        name: 'notifications',
        component: () => import('pages/settings/NotificationsPage.vue'),
        meta: {
          redirectAuth: true,
        },
      },
    ],
  },
  {
    path: '/auth',
    component: () => import('layouts/AuthLayout.vue'),
    meta: {
      redirectAuth: true,
    },
    children: [
      {
        path: 'login',
        component: () => import('pages/auth/SignIn.vue'),
      },
      {
        path: 'register',
        component: () => import('pages/auth/SignUp.vue'),
      },
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
