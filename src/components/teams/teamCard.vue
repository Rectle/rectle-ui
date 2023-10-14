<template>
  <q-card class="q-ma-xs card_style column" flat bordered>
    <q-item class="col-6" style="justify-items: center">
      <q-item-section avatar>
        <q-avatar size="50px">
          <img :src="props.logoUrl ?? EMPTY_IMAGE" />
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label class="text-h6 user-card-header">{{
          props.name
        }}</q-item-label>
      </q-item-section>
    </q-item>
    <div class="row q-px-xs col-6">
      <div class="details">
        <q-card-section>
          <q-item-label :caption="!$q.dark.isActive">
            {{ $t('projectCard.date') }} {{ formatDate(props.createDate) }}
          </q-item-label>
          <q-item-label :caption="!$q.dark.isActive">
            <div
              v-if="props.users && props.users.length"
              style="white-space: break-spaces"
            >
              {{ $t('projectCard.users') }} :
              {{ props.users.map((user) => user.name).join(', ') }}
            </div>
            <div v-else>0 {{ $t('projectCard.users') }}</div>
          </q-item-label>
        </q-card-section>
      </div>
    </div>
  </q-card>
</template>
<script setup lang="ts">
import moment from 'moment';
import { useQuasar } from 'quasar';
import { EMPTY_IMAGE } from 'src/shared/variable.shared';

const props = defineProps({
  name: String,
  users: Array,
  createDate: String,
  logoUrl: String,
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
  max-width: 280px;
  padding: 10px 10px 0px 10px;
  justify-content: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.details .q-card__section--vert {
  padding: 6px;
}
</style>
