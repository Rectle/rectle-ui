<template>
  <q-editor
    v-if="props.page == $t('link.yourworkspace.link')"
    v-model="editor"
    :toolbar-rounded="true"
    :definitions="{
      projectFromFile: {
        icon: 'attach_file',
        label: 'Project',
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
    ]"
    :toolbar-bg="toolbarColor"
    min-height="5rem"
    style="white-space: break-spaces"
  />
  <div v-else>
    <q-btn
      class="q-mb-md"
      align="between"
      label="Download code"
      icon="o_file_download"
      outline
      rounded
    />
    <q-card flat bordered>
      <q-card-section>
        <pre style="white-space: pre-line">{{ editor }}</pre>
      </q-card-section>
    </q-card>
  </div>
  <UploadProjectComponent
    :dialog="uploadProjectFile"
    @projectIdEmit="(e) => (projectId = e)"
    @closeDialog="(e) => (uploadProjectFile = e)"
  />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useQuasar } from 'quasar';
import UploadProjectComponent from './upload-file-dialog/UploadProjectComponent.vue';
const $q = useQuasar();

// TODO: download code text/ file form databse by id
// const props = defineProps({
//   id: String
// });

const props = defineProps({
  page: String,
});

const projectId = ref(0);
const uploadProjectFile = ref(false);
const toolbarColor = computed(() => ($q.dark.isActive ? 'grey-10' : 'grey-1'));

const exampleText = `# exampleProgram

for x in range(5):
    print("Rectle!")`;

const editor = ref(exampleText);

const uploadModelFromCode = () => {
  $q.notify({
    message: 'Caming soon',
    color: 'red-5',
    textColor: 'white',
    icon: 'cloud_done',
  });
};

const uploadProjectFromFile = () =>
  (uploadProjectFile.value = !uploadProjectFile.value);
</script>
