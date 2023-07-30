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
        {{ $t('addProject.form.title') }}
      </div>

      <q-separator />
      <div class="items-start justify-start">
        <q-form @submit.prevent.stop="onSubmit" class="q-gutter-md q-mt-md">
          <q-input
            v-model="projectName"
            filled
            :label="t('addProject.form.projectName')"
          />

          <q-input
            v-model="description"
            type="textarea"
            filled
            :label="t('addProject.form.description')"
          />

          <q-file v-model="baner" :label="$t('addProject.form.baner')" filled>
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

const props = defineProps({
  dialog: Boolean,
});

const emit = defineEmits(['closeDialog', 'projectIdEmit']);

const openDialog = computed({
  get: () => props.dialog,
  set: (newValue) => emit('closeDialog', newValue),
});

const projectName = ref<string>('');
const description = ref<string>('');
const baner = ref<File>();

const $q = useQuasar();
const { t } = useI18n();

const setResult = (result: number) => {
  if (result) {
    emit('projectIdEmit', result);
    $q.notify({
      color: 'primary',
      message: t('codePage.successData'),
      timeout: 1000,
    });
  } else {
    emit('projectIdEmit', 0);
    $q.notify({
      type: 'negative',
      message: t('codePage.errorData'),
    });
  }
};

const onSubmit = async () => {
  if (projectName.value) {
    const result = 0; //TODO: Create method to add new project
    setResult(result);
  } else {
    $q.notify({
      type: 'negative',
      message: t('codePage.emptyData'),
    });
  }
};
</script>
