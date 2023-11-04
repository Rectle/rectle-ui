<template>
  <q-editor
    v-if="props.page == $t('link.yourworkspace.link')"
    v-model="editor"
    :toolbar-rounded="true"
    :definitions="{
      downloadProject: {
        icon: 'o_file_download',
        label: 'Download project',
        handler: downloadProject,
      },
      projectFromFile: {
        icon: 'attach_file',
        label: 'Upload Project',
        handler: uploadProjectFromFile,
      },
      modelFromCode: {
        label: 'Code',
        icon: 'code',
        handler: uploadModelFromCode,
      },
    }"
    :toolbar="[
      [
        {
          label: $q.lang.editor.formatting,
          icon: $q.iconSet.editor.formatting,
          list: 'no-icons',
          options: ['code'],
        },
      ],
      ['modelFromCode'],
      ['modelFromFile', 'projectFromFile'],
      ['downloadProject'],
    ]"
    :toolbar-bg="toolbarColor"
    min-height="5rem"
    style="white-space: break-spaces"
  />
  <div v-else>
    <q-btn
      class="q-mb-md"
      align="between"
      :label="$t('codePage.project.downloadCodeButton')"
      icon="o_file_download"
      outline
      @click="downloadProject"
    />
    <q-card flat bordered>
      <q-card-section>
        <pre style="white-space: pre-line">{{ editor }}</pre>
      </q-card-section>
    </q-card>
  </div>
  <UploadProjectComponent
    :dialog="uploadProjectFile"
    :id="props.id"
    @projectIdEmit="(e) => (projectId = e)"
    @closeDialog="(e) => (uploadProjectFile = e)"
  />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useQuasar } from 'quasar';
import UploadProjectComponent from './upload-file-dialog/UploadProjectComponent.vue';
import { downloadProjectFile } from 'src/api/downloadProjectFile';
import { downloadFileFromUrl } from 'src/api/downloadFileFromUrl';
import { useI18n } from 'vue-i18n';
const $q = useQuasar();

const props = defineProps({
  page: String,
  id: String,
  projectName: String,
});

const { t } = useI18n();
const projectId = ref(0);
const uploadProjectFile = ref(false);
const toolbarColor = computed(() => ($q.dark.isActive ? 'grey-10' : 'grey-1'));

const exampleText = `# exampleProgram

for x in range(5):
    print("Rectle!")`;

const editor = ref(exampleText);

const uploadModelFromCode = () => {
  $q.notify({
    message: t('codePage.alerts.comingSoon'),
    color: 'red-5',
    textColor: 'white',
    icon: 'cloud_done',
  });
};

const uploadProjectFromFile = () =>
  (uploadProjectFile.value = !uploadProjectFile.value);

const downloadProject = async () => {
  if (props.id) {
    const url = await downloadProjectFile(props.id);

    url
      ? downloadFileFromUrl(url, props.projectName ?? 'project')
      : $q.notify({
          type: 'negative',
          message: t('codePage.alerts.emptyProject'),
        });
  }
};
</script>
