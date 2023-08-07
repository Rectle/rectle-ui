<template>
  <q-page class="q-pa-md items-start row justify-center">
    <div class="col-xs-12 col-sm-11 col-md-10 col-lg-10 col-xl-9">
      <DesktopSetting v-if="$q.screen.gt.sm" :settings="listOfSettings" />
      <MobileSetting v-else :settings="listOfSettings" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import DesktopSetting from 'components/settings/DesktopSetting.vue';
import MobileSetting from 'components/settings/MobileSetting.vue';
import { useUserStore } from 'src/stores/user';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
const { t } = useI18n();

const router = useRouter();
const userStore = useUserStore();

const listOfSettings: ISetting[] = [
  {
    title: t('settingPage.list.account.title'),
    icon: t('settingPage.list.account.icon'),
    click: () => router.push({ path: '/setting/account' }),
  },
  {
    title: t('settingPage.list.notification.title'),
    icon: t('settingPage.list.notification.icon'),
    click: () => router.push({ path: '/setting/notifications' }),
  },
  {
    title: t('settingPage.list.privacy.title'),
    icon: t('settingPage.list.privacy.icon'),
  },
  {
    title: t('settingPage.list.help.title'),
    icon: t('settingPage.list.help.icon'),
  },
  {
    title: t('settingPage.list.about.title'),
    icon: t('settingPage.list.about.icon'),
  },
  {
    title: t('settingPage.list.logout.title'),
    icon: t('settingPage.list.logout.icon'),
    click: async () => {
      userStore.signOut();
      await router.push('/');
    },
  },
];
</script>
