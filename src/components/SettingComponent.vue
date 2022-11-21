<template>
  <div class="q-my-md row items-start justify-center text-h4">
    {{ $t('settingPage.title') }}
  </div>
  <q-separator/>
  <q-list class="text-h6" separator>
    <q-item class="q-py-lg" v-for="item of listOfSettings" v-bind:key="item.title">
      <q-item-section avatar>
        <q-icon :name="item.icon" />
      </q-item-section>
      <q-item-section>{{item.title}}</q-item-section>
      <q-item-section avatar>
        <q-icon name="arrow_forward_ios" />
      </q-item-section>
    </q-item>
  </q-list>
  <q-separator/>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const listOfSettings = [
  {title: t('settingPage.list.account.title'), icon: t('settingPage.list.account.icon')},
  {title: t('settingPage.list.notification.title'), icon: t('settingPage.list.notification.icon')},
  {title: t('settingPage.list.privacy.title'), icon: t('settingPage.list.privacy.icon')},
  {title: t('settingPage.list.help.title'), icon: t('settingPage.list.help.icon')},
  {title: t('settingPage.list.about.title'), icon: t('settingPage.list.about.icon')},
  {title: t('settingPage.list.logout.title'), icon: t('settingPage.list.logout.icon')},
]

</script>

