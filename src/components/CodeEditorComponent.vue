<template>
      <v-ace-editor
        v-model:value="content"
        :lang="lang"
        :theme="theme"
        class="code-editor" />

</template>

<script setup lang="ts">
import { SessionStorage, useQuasar } from 'quasar';
import { ref, watch } from 'vue'
import { VAceEditor } from 'vue3-ace-editor';
import "brace/mode/python";
import "brace/theme/monokai";
import "brace/theme/xcode";

const $q = useQuasar();
let content = ref<string>(SessionStorage.getItem('code') ?? `#${process.env.APP_NAME}`);
let theme = ref<string>($q.dark.isActive ? "monokai" : "xcode");
const lang = ref<string>('python');

const setTheme = () => {
  theme.value = $q.dark.isActive ? "monokai" : "xcode";
}

const saveContentInStore = () => {
  SessionStorage.set('code', content.value)
}
  
watch(() => $q.dark.isActive, setTheme)
watch(() => content.value, saveContentInStore)

</script>
<style scoped>
  /* required class */
  .my-editor {
    /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
    background: #2d2d2d;
    color: #ccc;

    /* you must provide font-family font-size line-height. Example: */
    font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
    font-size: 14px;
    line-height: 1.5;
    padding: 5px;
  }

  /* optional class for removing the outline */
  .prism-editor__textarea:focus {
    outline: none;
  }
  .code-editor{
    height: 300px;
  }
</style>