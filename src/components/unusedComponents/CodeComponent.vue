<template>
  <q-card class="q-pa-md q-px-xl q-pb-xl">
    <div class="q-my-md row items-start justify-center text-h3">
      {{ $t('codePage.title') }}
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
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';
import { sendFile } from 'src/api/postFile';
import { compileFile } from 'src/api/compileFile';

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
    // disableCompileButton.value = true;
  }
};

const compile = async () => {
  if (!disableCompileButton.value) {
    const result = await compileFile(fileId.value);

    setResult(+result);
  } else {
    $q.notify({
      type: 'negative',
      message: t('codePage.emptyData')
    });
  }
};

const onSubmit = async () => {
  if (file.value) {
    const result = await sendFile(file.value);
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
