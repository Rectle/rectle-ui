import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: '/competitions',
        name: 'competitions',
        component: () => import('pages/CompetitionsPage.vue'),
      },
      {
        path: '/yourworkspace',
        name: 'yourworkspace',
        component: () => import('pages/YourWorkspacePage.vue'),
      },
      {
        path: '/teams',
        name: 'teams',
        component: () => import('pages/TeamsPage.vue'),
      },
      {
        path: '/project-overview/:id',
        name: 'projectOverview',
        component: () => import('pages/ProjectOverviewPage.vue'),
      },
      {
        path: '/project-overview/:id/status/:id',
        name: 'approachStatus',
        component: () => import('pages/ApproachStatusPage.vue'),
      },
      {
        path: 'setting',
        name: 'setting',
        component: () => import('pages/SettingPage.vue'),
      },
      {
        path: 'setting/account',
        name: 'account',
        component: () => import('pages/settings/AccountPage.vue'),
      },
      {
        path: 'setting/notifications',
        name: 'notifications',
        component: () => import('pages/settings/NotificationsPage.vue'),
      },
      {
        path: 'setting/privacy&security',
        name: 'privacyAndSecurity',
        component: () => import('pages/settings/PrivacyAndSecurityPage.vue'),
      },
      {
        path: 'setting/help&support',
        name: 'helpAndSupport',
        component: () => import('pages/settings/HelpAndSupportPage.vue'),
      },
      {
        path: 'setting/about',
        name: 'about',
        component: () => import('pages/settings/AboutPage.vue'),
      },
    ],
  },
  {
    path: '/auth',
    component: () => import('layouts/AuthLayout.vue'),
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
