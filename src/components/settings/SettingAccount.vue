<template>
  <q-page>
    <div class="q-my-md row items-start justify-center text-h4">
      {{ $t('accountSettings.title') }}
    </div>
    <div class="row items-center justify-center">
      <q-card class="q-pa-md text-h5">
        <q-toggle
          size="xl"
          v-model="buttonJWT"
          :label="buttonJWT"
          :false-value="$t('accountSettings.toggleJWT.falseValue')"
          :true-value="$t('accountSettings.toggleJWT.trueValue')"
          @update:model-value="changeJWT"
        />
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { LocalStorage } from 'quasar';
const { t } = useI18n();

const buttonJWT = ref<string>(
  LocalStorage.getItem('JWT')
    ? t('accountSettings.toggleJWT.trueValue')
    : t('accountSettings.toggleJWT.falseValue')
);

function changeJWT() {
  if (buttonJWT.value === t('accountSettings.toggleJWT.trueValue'))
    LocalStorage.set('JWT', true);
  else LocalStorage.set('JWT', false);
}
</script>
