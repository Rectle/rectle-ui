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
        {{
          tab === 'create' ? $t('addTeam.form.title') : $t('addTeam.join.title')
        }}
      </div>
      <q-tabs v-model="tab" class="text-primary">
        <q-tab name="create" :label="$t('addTeam.form.tab')" />
        <q-tab name="join" :label="$t('addTeam.join.tab')" />
      </q-tabs>
      <q-separator />
      <div class="items-start justify-start">
        <q-form
          v-if="tab === 'create'"
          @submit.prevent.stop="onSubmit"
          class="q-gutter-md q-mt-md"
        >
          <q-input
            v-model="teamName"
            filled
            :label="t('addTeam.form.teamName')"
          />

          <q-file v-model="avatar" :label="$t('addTeam.form.avatar')" filled>
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
        <div v-else class="q-my-sm">
          <q-virtual-scroll
            style="max-height: 400px"
            :items="['test5', 'test6', 'test7', 'test8']"
            separator
            v-slot="{ item, index }"
          >
            <q-item :key="index" dense>
              <q-item-section>
                <q-item-label class="text-h6" style="text-align: center">
                  <q-btn
                    flat
                    color="primary"
                    :label="item"
                    @click="requestDialog(item)"
                  />
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-virtual-scroll>
        </div>
      </div>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';
import { createTeam } from 'src/api/createTeam';

const props = defineProps({
  dialog: Boolean,
});

const emit = defineEmits(['closeDialog', 'projectIdEmit']);

const requestDialog = (item: string) => {
  $q.dialog({
    title: 'Almost there!',
    message: `Your request to join the ${item} team is pending approval`,
    cancel: true,
    persistent: true,
  })
    .onOk(() => {
      // console.log('>>>> OK')
    })
    .onCancel(() => {
      // console.log('>>>> Cancel')
    })
    .onDismiss(() => {
      // console.log('I am triggered on both OK and Cancel')
    });
};

const openDialog = computed({
  get: () => props.dialog,
  set: (newValue) => emit('closeDialog', newValue),
});

const teamName = ref<string>('');
const avatar = ref<File>();

const tab = ref<string>('create');

const $q = useQuasar();
const { t } = useI18n();

const setResult = (result: number) => {
  if (result) {
    emit('projectIdEmit', result);
    $q.notify({
      color: 'primary',
      message: t('codePage.project.successData'),
      timeout: 1000,
    });
  } else {
    emit('projectIdEmit', 0);
    $q.notify({
      type: 'negative',
      message: t('codePage.project.errorData'),
    });
  }
};

const onSubmit = async () => {
  debugger;
  if (teamName.value) {
    const result = await createTeam(teamName.value, avatar.value);
    setResult(result);
  } else {
    $q.notify({
      type: 'negative',
      message: t('codePage.emptyData'),
    });
  }
};
</script>
