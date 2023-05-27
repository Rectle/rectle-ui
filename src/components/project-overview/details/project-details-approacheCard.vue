<template>
  <q-card class="q-pa-md">
    <q-card-section horizontal>
      <q-list class="my-list q-mr-sm">
        <q-item>
          <q-item-section>
            <q-icon name="fingerprint" size="2em" />
          </q-item-section>

          <q-item-section>{{ props.points }}</q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-icon name="o_analytics" size="2em" />
          </q-item-section>

          <q-item-section>{{ props.score }}</q-item-section>
        </q-item>
      </q-list>

      <q-icon
        class="q-ma-md q-ml-lg"
        :name="status == 'done' ? 'o_check_circle' : 'o_pending'"
        :color="status == 'done' ? 'green' : 'orange'"
        size="4rem"
      />
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
const props = defineProps({
  points: Number,
  score: Number,
  status: String
});
</script>
<style>
.my-list .q-item__section--main + .q-item__section--main {
  margin-left: 0px !important;
}
.my-list .q-item {
  padding: 0px 5px;
}
</style>
