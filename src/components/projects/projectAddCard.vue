<template>
  <q-card
    class="cursor-pointer q-ma-xs card_style column text-center"
    flat
    bordered
  >
    <div class="div_style">
      <q-icon
        v-if="props.tab === $t('tabs.creator')"
        name="o_add"
        color="grey-4"
        size="200px"
      />
      <div v-else class="text-h2 text-grey-4">
        {{ $t('addProject.browse.title') }}
      </div>
    </div>
  </q-card>
</template>
<script setup lang="ts">
const props = defineProps({
  tab: String,
});
</script>
<style scoped>
.card_style {
  height: 220px;
}

.div_style {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
