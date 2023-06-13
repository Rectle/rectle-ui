<template>
  <div class="q-my-md row items-start justify-center text-h4">
    {{ $t('settingPage.title') }}
  </div>
  <q-separator />
  <q-list class="text-h6" separator>
    <q-item
      class="q-py-lg cursor-pointer"
      v-for="item of (props.settings as ISetting[])"
      v-bind:key="item.title"
      @click="$router.push({ path: item.to ?? '/setting' })"
      v-ripple.early
    >
      <q-item-section avatar>
        <q-icon :name="item.icon" />
      </q-item-section>
      <q-item-section>{{ item.title }}</q-item-section>
      <q-item-section avatar>
        <q-icon name="arrow_forward_ios" />
      </q-item-section>
    </q-item>
  </q-list>
  <q-separator />
</template>
<script setup lang="ts">
const props = defineProps({
  settings: {
    type: Array,
    required: true
  }
});
</script>
