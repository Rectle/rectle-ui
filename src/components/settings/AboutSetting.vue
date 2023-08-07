<template>
  <div class="q-my-md row items-start justify-center text-h4">
    {{ $t('settingPage.about.title') }}
  </div>
  <q-card flat bordered class="my-card">
    <q-card-section>
      <pre style="white-space: pre-line">{{ text }}</pre>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import xss from 'xss';

const { t } = useI18n();

const text = computed(() => {
  return xss(t('settingPage.about.description'));
});
</script>
