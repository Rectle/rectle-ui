<template>
    <AceEditor
        ref="editor"
        v-model:codeContent="value" 
        v-model:editor="editor"
        :options="options"
        :theme= "theme"
        :lang="lang"
        width="100%" 
        height="300px" 
      />
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import AceEditor from "ace-editor-vue3";
import "brace/mode/javascript";
import "brace/theme/monokai";
import "brace/theme/xcode";
import { ref, watch, onMounted } from 'vue'
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const $q = useQuasar();



let value = `console.log("hello ok.")`;
let options = {"showPrintMargin": false};
let lang = "javascript";
let theme = $q.dark.isActive ? "monokai" : "xcode";
const editor = ref();




 const setTheme = () => {
  if(editor.value){
    editor.value.setTheme($q.dark.isActive ? "brace/theme/monokai" : "brace/theme/xcode")
  }
 }
  
watch(() => $q.dark.isActive, setTheme)




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
</style>