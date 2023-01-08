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
import { sendFile } from 'src/api/postFile';
import { useRouter } from 'vue-router';

const file = ref<File>()
const $q = useQuasar()
const { t } = useI18n();
const router = useRouter();


const setResult = (result: boolean) => {
  if(result){
      $q.notify({
        color: 'primary',
        message: t('codePage.successData'),
        timeout: 1000
      })
      router.push({ name: 'home' });
    }
    else{
      $q.notify({
        type: 'negative',
        message: t('codePage.errorData')
      })
    }
}


const onSubmit = async () => {
  let result = true; 
  if(file.value){
    result = await sendFile(file.value)
    setResult(result)
  }
  else{
    $q.notify({
      type: 'negative',
      message: t('codePage.emptyData')
    })
  }
}

</script>