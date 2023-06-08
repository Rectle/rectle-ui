<template>
  <q-card class="cursor-pointer q-ma-xs card_style column" flat bordered>
    <q-img :src="props.image" class="col-5">
      <div class="absolute-bottom layout_image">
        <q-avatar class="outher cursor-pointer" v-ripple.early>
          <q-avatar class="absolute-center">
            <img :src="avatar" />
          </q-avatar>
        </q-avatar>
      </div>
    </q-img>

    <div class="row q-px-xs col-7">
      <div class="details col-11">
        <q-card-section>
          <q-item-label class="text-h6">{{ props.title }}</q-item-label>
          <q-item-label :caption="!$q.dark.isActive">
            {{ $t('projectCard.author') }} {{ props.author }} |
            {{ props.users }} {{ $t('projectCard.users') }}
          </q-item-label>
          <q-item-label :caption="!$q.dark.isActive">
            {{ $t('projectCard.date') }} {{ formatDate(props.date) }}
          </q-item-label>
        </q-card-section>
      </div>
      <q-card-section class="q-pa-none col-1">
        <div class="q-mr-xs">
          <q-btn flat icon="more_vert" rounded class="q-px-none q-mx-none" />
        </div>
      </q-card-section>
    </div>
  </q-card>
</template>
<script setup lang="ts">
import moment from 'moment';
import { useQuasar } from 'quasar';

const props = defineProps({
  image: String,
  avatar: String,
  title: String,
  author: String,
  users: String,
  date: String
});

const $q = useQuasar();

const formatDate = (date: string | undefined) => {
  return moment(date).format('DD.MM.YYYY');
};
</script>
<style scoped>
.layout_image {
  background-color: rgba(0, 0, 0, 0) !important;
}

.outher {
  padding: 25px;
  border: 5px solid white;
}

.card_style {
  height: 220px;
}

.details .q-card__section--vert {
  padding: 6px;
}
</style>
