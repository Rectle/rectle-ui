<template>
  <q-editor
    v-model="editor"
    :toolbar-rounded="true"
    :definitions="{
      projectFromFile: {
        icon: 'attach_file',
        label: 'Project',
        handler: uploadProjectFromFile
      },
      modelFromFile: {
        icon: 'attach_file',
        label: 'Model',
        handler: uploadModelFromFile
      },
      modelFromCode: {
        label: 'Model',
        icon: 'code',
        handler: uploadModelFromCode
      }
    }"
    :toolbar="[
      [
        {
          label: $q.lang.editor.formatting,
          icon: $q.iconSet.editor.formatting,
          list: 'no-icons',
          options: ['code']
        }
      ],
      ['modelFromCode'],
      ['modelFromFile', 'projectFromFile']
    ]"
    :toolbar-bg="toolbarColor"
    min-height="5rem"
    style="white-space: break-spaces"
  />
  <UploadProjectComponent
    :dialog="uploadProjectFile"
    @projectIdEmit="(e:number) => {
      projectId = e;
      emit('projectIdEmit', e);
      }"
    @closeDialog="(e:boolean) => uploadProjectFile = e"
  />

  <UploadModelComponent
    :dialog="uploadModelFile"
    :projectID="projectId"
    @closeDialog="(e:boolean) => uploadModelFile = e"
    @compileIdEmit="(e:number) => emit('compileIdEmit', e)"
  />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useQuasar } from 'quasar';
import UploadProjectComponent from './upload-file-dialog/UploadProjectComponent.vue';
import UploadModelComponent from './upload-file-dialog/UploadModelComponent.vue';
const $q = useQuasar();

// TODO: download code text/ file form databse by id
// const props = defineProps({
//   id: String
// });

const projectId = ref(0);
const uploadProjectFile = ref(false);
const uploadModelFile = ref(false);
const emit = defineEmits(['projectIdEmit', 'compileIdEmit']);
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
    icon: 'cloud_done'
  });
};

const uploadProjectFromFile = () =>
  (uploadProjectFile.value = !uploadProjectFile.value);

const uploadModelFromFile = () =>
  (uploadModelFile.value = !uploadModelFile.value);
</script>
