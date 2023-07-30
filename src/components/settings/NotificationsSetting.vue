<template>
  <div class="q-my-md row items-start justify-center text-h4">
    {{ $t('settingPage.notificationsSettings.title') }}
  </div>
  <q-card flat bordered class="my-card">
    <q-card-section v-if="notifications.length">
      <q-virtual-scroll
        style="max-height: 500px"
        :items="notifications"
        separator
        v-slot="{ item, index }"
      >
        <q-item :key="index" dense>
          <q-item-section>
            <q-item-label>
              {{ item }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-virtual-scroll>
    </q-card-section>
    <q-card-section v-else>
      {{ $t('settingPage.notificationsSettings.empty') }}
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const notifications = ref<string[]>([]);
</script>
