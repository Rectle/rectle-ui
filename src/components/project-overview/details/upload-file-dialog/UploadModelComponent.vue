<template>
  <q-dialog v-model="openDialog">
    <q-card v-if="!modelId" class="q-pa-md q-px-xl q-pb-xl">
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
        {{ $t('codePage.model.create') }}
      </div>

      <q-separator />
      <div class="items-start justify-start">
        <q-form @submit.prevent.stop="createModel" class="q-gutter-md q-mt-md">
          <q-input
            v-if="projectIDComputed"
            v-model="modelName"
            filled
            :disable="!projectIDComputed"
            :label="t('codePage.model.modelName')"
          />
          <q-input
            v-else
            v-model="modelName"
            filled
            disable
            label-color="red"
            :label="t('codePage.model.errorName')"
          />
          <div>
            <q-btn
              :disable="!projectIDComputed"
              label="Create"
              type="submit"
              color="primary"
              class="full-width"
              size="lg"
            />
          </div>
        </q-form>
      </div>
    </q-card>
    <q-card v-else class="q-pa-md q-px-xl q-pb-xl">
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
        {{ $t('codePage.model.title') }}
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
        <div class="q-mt-md">
          <q-btn
            :disable="disableCompileButton"
            label="Compile"
            color="primary"
            class="full-width"
            size="lg"
            @click="compile"
          />
        </div>
      </div>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';
import { sendModelFile } from 'src/api/postModelFile';
import { compileModelFile } from 'src/api/compileModel';
import { createModelByName } from 'src/api/createModel';

const props = defineProps({
  dialog: Boolean,
  projectID: {
    type: Number,
    default: 0
  }
});
const modelName = ref('');
const modelId = ref(0);
const emit = defineEmits(['closeDialog', 'compileIdEmit', 'modelNameEmit']);

const projectIDComputed = computed(() => {
  return props.projectID;
});

const openDialog = computed({
  get: () => props.dialog,
  set: (newValue) => emit('closeDialog', newValue)
});

const file = ref<File>();
const $q = useQuasar();
const { t } = useI18n();
const disableCompileButton = ref(true);
const fileId = ref(0);

const setResult = (result: number) => {
  if (result) {
    $q.notify({
      color: 'primary',
      message: t('codePage.successData'),
      timeout: 1000
    });
    disableCompileButton.value = false;
  } else {
    $q.notify({
      type: 'negative',
      message: t('codePage.errorData')
    });
  }
};

const compile = async () => {
  if (!disableCompileButton.value) {
    const result = await compileModelFile(fileId.value);
    setResult(result);
    emit('compileIdEmit', result);
  } else {
    $q.notify({
      type: 'negative',
      message: t('codePage.emptyData')
    });
  }
};

const createModel = async () => {
  if (modelName.value) {
    const result = await createModelByName(
      projectIDComputed.value,
      modelName.value
    );
    modelId.value = result;
    emit('modelNameEmit', modelName.value);
  } else {
    $q.notify({
      type: 'negative',
      message: t('codePage.emptyData')
    });
  }
};

const onSubmit = async () => {
  if (file.value) {
    const result = await sendModelFile(modelId.value, file.value);
    setResult(result);
    fileId.value = result;
  } else {
    $q.notify({
      type: 'negative',
      message: t('codePage.emptyData')
    });
  }
};
</script>
