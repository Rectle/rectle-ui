<template>
TEST
  <CodeEditor :language_selector="true" :languages="[['javascript', 'JS'],['python', 'Python']]"></CodeEditor>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n';
import CodeEditor from 'simple-code-editor';

const { t } = useI18n();

</script>
