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

          <q-select
            filled
            v-model="teamId"
            :options="teamList"
            :label="t('addProject.form.team')"
            :option-value="
              (opt) => (Object(opt) === opt && 'id' in opt ? opt.id : null)
            "
            :option-label="
              (opt) =>
                Object(opt) === opt && 'desc' in opt ? opt.desc : '- Null -'
            "
            :option-disable="
              (opt) => (Object(opt) === opt ? opt.inactive === true : true)
            "
            emit-value
            map-options
            style="max-width: 300px"
          />

          <q-input
            v-model="description"
            type="textarea"
            filled
            :label="t('addProject.form.description')"
          />

          <q-select
            v-model="tags"
            filled
            :label="t('addProject.form.tags')"
            use-input
            use-chips
            multiple
            hide-dropdown-icon
            input-debounce="0"
            new-value-mode="add-unique"
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
import { ref, computed, onMounted } from 'vue';
import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';
import { createProject } from 'src/api/createProject';
import { getAllTeams } from 'src/api/getAllTeamsByUserId';

const props = defineProps({
  dialog: Boolean,
});

const emit = defineEmits(['closeDialog', 'projectIdEmit', 'reloadProjects']);

const openDialog = computed({
  get: () => props.dialog,
  set: (newValue) => emit('closeDialog', newValue),
});

const projectName = ref<string>('');
const description = ref<string>('');
const tags = ref<string[]>([]);
const baner = ref<File>();

interface SelectType {
  id: number;
  desc: string;
}

const teamList = ref<SelectType[]>([]);
const teamId = ref<number | null>(null);

onMounted(async () => {
  const list = (await getAllTeams()) as ITeam[];
  teamList.value = list.map((team: ITeam) => {
    return {
      id: team.id,
      desc: team.name,
    };
  }) as unknown as SelectType[];
});

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
    emit('closeDialog', !openDialog.value);
    emit('reloadProjects');
  } else {
    emit('projectIdEmit', 0);
    $q.notify({
      type: 'negative',
      message: t('codePage.project.errorData'),
    });
  }
};

const onSubmit = async () => {
  if (projectName.value && teamId.value) {
    const result = await createProject({
      name: projectName.value,
      description: description.value,
      tags: tags.value.join(','),
      file: baner.value,
      teamId: teamId.value.toString(),
    });
    setResult(result);
  } else {
    $q.notify({
      type: 'negative',
      message: t('codePage.emptyData'),
    });
  }
};
</script>
