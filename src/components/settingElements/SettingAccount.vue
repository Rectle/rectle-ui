<template>
  <q-page>
    <div class="q-my-md row items-start justify-center text-h4">
      {{ $t('accountSettings.title') }}
    </div>
    <div class="row items-center justify-center">
      <q-card class="q-pa-md text-h5">
        <q-toggle size="xl" 
          v-model="buttonJWT"
          :label="buttonJWT"
          :false-value="$t('accountSettings.toggleJWT.falseValue')"
          :true-value="$t('accountSettings.toggleJWT.trueValue')"/>
      </q-card>
      </div>
    </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const buttonJWT = ref(t('accountSettings.toggleJWT.trueValue'))
</script>
