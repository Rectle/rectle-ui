<template>
  <q-dialog v-model="openDialog">
    <q-card class="q-pa-md q-px-xl q-pb-xl">
      <div class="absolute-right">
        <q-btn
          flat
          class="dialog-button q-ma-none q-pa-none"
          round
          color="dark"
          icon="close"
          @click="emit('closeDialog', !openDialog)"
        />
      </div>
      <div class="q-my-md row items-start justify-center text-h3">
        {{ $t('codePage.project.title') }}
      </div>

      <q-separator />
      <div class="items-start justify-start">
        <q-form @submit.prevent.stop="onSubmit" class="q-gutter-md q-mt-md">
          <q-file v-model="file" :label="$t('codePage.uploadLabel')" filled>
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>

          <div>
            <q-btn
              label="Submit"
              type="submit"
              color="primary"
              class="full-width"
              size="lg"
            />
          </div>
        </q-form>
      </div>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';
import { sendFile } from 'src/api/postFile';

const props = defineProps({
  dialog: Boolean
});

const emit = defineEmits(['closeDialog', 'projectIdEmit']);

const openDialog = computed({
  get: () => props.dialog,
  set: (newValue) => emit('closeDialog', newValue)
});

const file = ref<File>();
const $q = useQuasar();
const { t } = useI18n();

const setResult = (result: number) => {
  if (result) {
    emit('projectIdEmit', result);
    $q.notify({
      color: 'primary',
      message: t('codePage.successData'),
      timeout: 1000
    });
  } else {
    emit('projectIdEmit', 0);
    $q.notify({
      type: 'negative',
      message: t('codePage.errorData')
    });
  }
};

const onSubmit = async () => {
  if (file.value) {
    const result = await sendFile(file.value);
    setResult(result);
  } else {
    $q.notify({
      type: 'negative',
      message: t('codePage.emptyData')
    });
  }
};
</script>
