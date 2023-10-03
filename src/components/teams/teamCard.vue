<template>
  <q-card class="cursor-pointer q-ma-xs card_style column" flat bordered>
    <q-item class="col-6" style="justify-items: center">
      <q-item-section avatar>
        <q-avatar size="50px">
          <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label class="text-h6">{{ props.name }}</q-item-label>
      </q-item-section>
    </q-item>
    <div class="row q-px-xs col-6">
      <div class="details">
        <q-card-section>
          <q-item-label :caption="!$q.dark.isActive">
            {{ $t('projectCard.date') }} {{ formatDate(props.date) }}
          </q-item-label>
          <q-item-label :caption="!$q.dark.isActive">
            {{ props.users?.length ? props.users.join(', ') : '0' }}
            {{ $t('projectCard.users') }}
          </q-item-label>
        </q-card-section>
      </div>
    </div>
  </q-card>
</template>
<script setup lang="ts">
import moment from 'moment';
import { useQuasar } from 'quasar';

const props = defineProps({
  image: String,
  name: String,
  users: Array,
  date: String,
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
  height: 120px;
  max-width: 250px;
  padding: 10px 10px 0px 10px;
  justify-content: center;
}

.details .q-card__section--vert {
  padding: 6px;
}
</style>
