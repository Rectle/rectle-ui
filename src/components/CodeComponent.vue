<template>
<q-card class="q-pa-md q-px-xl q-pb-xl">
  <div class="q-my-md row items-start justify-center text-h3">
    {{ $t('codePage.title') }}
  </div>
  <q-separator/>
 <div class="items-start justify-start">
    <q-form @submit.prevent.stop="onSubmit" class="q-gutter-md q-mt-md">
    
      <q-file
        v-model="file"
        :label="$t('codePage.uploadLabel')"
        filled
      >
        <template v-slot:prepend>
          <q-icon name="attach_file" />
        </template>
        </q-file>

      <div>
        <q-btn label="Submit" type="submit" color="primary" class="full-width" size="lg" />
      </div>
    </q-form>
  </div>
  </q-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n';

const file = ref(null)
const $q = useQuasar()
const { t } = useI18n();


function onSubmit (evt) {
  if(file.value)
    console.log('file was uploaded', file)
  else
    $q.notify({
      type: 'negative',
      message: t('codePage.emptyData')
    })
}

</script>