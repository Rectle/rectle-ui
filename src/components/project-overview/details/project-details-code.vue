<template>
  <q-editor
    v-model="editor"
    :toolbar-rounded="true"
    :definitions="{
      upload: {
        tip: 'Upload to cloud',
        icon: 'cloud_upload',
        label: 'Upload',
        handler: uploadIt
      },
      save: {
        tip: 'Save your work',
        icon: 'save',
        label: 'Save',
        handler: saveWork
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
      ['save', 'upload']
    ]"
    :toolbar-bg="!$q.dark.isActive ? 'grey-1' : 'grey-10'"
    min-height="5rem"
    style="white-space: break-spaces"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();

const saveWork = () => {
  $q.notify({
    message: 'Caming soon',
    color: 'red-5',
    textColor: 'white',
    icon: 'cloud_done'
  });
};

const uploadIt = () => {
  $q.notify({
    message: 'Caming soon',
    color: 'red-5',
    textColor: 'white',
    icon: 'warning'
  });
};

// TODO: download code text/ file form databse by id
// const props = defineProps({
//   id: String
// });

const exampleText = `# exampleProgram

for x in range(5):
    print("Rectle!")`;

const editor = ref(exampleText);
</script>
