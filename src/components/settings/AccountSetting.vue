<template>
  <div class="q-my-md row items-start justify-center text-h4">
    {{ $t('settingPage.accountSettings.title') }}
  </div>
  <q-card flat bordered class="my-card">
    <q-card-section
      :class="$q.screen.lt.sm ? 'column items-center' : 'row justify-start'"
    >
      <div class="col-4">
        <q-avatar
          class="account-avatar"
          rounded
          size="140px"
          font-size="120px"
          text-color="grey-3"
          icon="o_person"
        />
      </div>
      <div class="col-7 q-mt-sm">
        <div class="text-h6">
          {{ userStore.getUser.given_name }}
        </div>
        <div class="text-subtitle1">
          {{ userStore.getUser.email }}
        </div>
        <div class="text-subtitle1">
          ID: {{ userStore.getUser.id }}
        </div>
      </div>
      <div class="col-1">
        <q-btn flat round icon="more_vert" />
      </div>
    </q-card-section>
    <q-separator />
    <q-card-section>
      <q-toggle
        v-model="buttonJWT"
        :label="buttonJWT"
        :false-value="$t('settingPage.accountSettings.toggleJWT.falseValue')"
        :true-value="$t('settingPage.accountSettings.toggleJWT.trueValue')"
        @update:model-value="changeJWT"
      />
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { LocalStorage, useQuasar } from 'quasar';

import { useUserStore } from 'src/stores/user';
const userStore = useUserStore();

const { t } = useI18n();
const $q = useQuasar();

const buttonJWT = ref<string>(
  LocalStorage.getItem('JWT')
    ? t('settingPage.accountSettings.toggleJWT.trueValue')
    : t('settingPage.accountSettings.toggleJWT.falseValue')
);

const changeJWT = () => {
  if (buttonJWT.value === t('settingPage.accountSettings.toggleJWT.trueValue'))
    LocalStorage.set('JWT', true);
  else LocalStorage.set('JWT', false);
};
</script>
<style scoped>
.account-avatar {
  border: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
