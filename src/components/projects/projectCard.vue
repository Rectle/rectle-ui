<template>
  <q-card class="cursor-pointer q-ma-xs card_style column" flat bordered>
    <q-img :src="props.image ?? EMPTY_BACKGROUND" class="col-5">
      <div class="absolute-bottom layout_image">
        <q-avatar class="outher cursor-pointer" v-ripple.early>
          <q-avatar class="absolute-center">
            <img :src="avatar ?? EMPTY_AVATAR" />
          </q-avatar>
        </q-avatar>
      </div>
    </q-img>

    <div class="row q-px-xs col-7">
      <div class="details col-11">
        <q-card-section>
          <q-item-label class="text-h6">{{ props.title }}</q-item-label>
          <q-item-label :caption="!$q.dark.isActive">
            {{ $t('projectCard.team') }} {{ props.team }}
          </q-item-label>
          <q-item-label :caption="!$q.dark.isActive">
            {{ $t('projectCard.date') }} {{ formatDate(props.date) }}
          </q-item-label>
          <q-item-label :caption="!$q.dark.isActive" v-if="props.description">
            {{ $t('projectCard.description') }} {{ props.description }}
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
import { useQuasar } from 'quasar';
import { formatDate } from 'src/shared/formatters/date.formatter';
import { EMPTY_AVATAR, EMPTY_BACKGROUND } from 'src/shared/variable.shared';

const props = defineProps({
  image: String,
  avatar: String,
  title: String,
  team: String,
  description: String,
  date: String,
});

const $q = useQuasar();
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
