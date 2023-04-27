<template>
  <DesktopSetting v-if="$q.screen.gt.sm" :settings="listOfSettings" />
  <MobileSetting v-else :settings="listOfSettings" />
</template>
<script setup lang="ts">
import DesktopSetting from 'components/settings/DesktopSetting.vue';
import MobileSetting from 'components/settings/MobileSetting.vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const listOfSettings = [
  {
    title: t('settingPage.list.account.title'),
    icon: t('settingPage.list.account.icon'),
    to: '/setting/account'
  },
  {
    title: t('settingPage.list.notification.title'),
    icon: t('settingPage.list.notification.icon')
  },
  {
    title: t('settingPage.list.privacy.title'),
    icon: t('settingPage.list.privacy.icon')
  },
  {
    title: t('settingPage.list.help.title'),
    icon: t('settingPage.list.help.icon')
  },
  {
    title: t('settingPage.list.about.title'),
    icon: t('settingPage.list.about.icon')
  },
  {
    title: t('settingPage.list.logout.title'),
    icon: t('settingPage.list.logout.icon')
  }
];
</script>
