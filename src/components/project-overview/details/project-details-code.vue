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
    :toolbar-bg="toolbarColor"
    min-height="5rem"
    style="white-space: break-spaces"
  />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();

// TODO: download code text/ file form databse by id
// const props = defineProps({
//   id: String
// });

const toolbarColor = computed(() => ($q.dark.isActive ? 'grey-10' : 'grey-1'));

const exampleText = `# exampleProgram

for x in range(5):
    print("Rectle!")`;

const editor = ref(exampleText);

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
</script>
