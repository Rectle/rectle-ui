<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<template>
  <div class="q-ma-md">
    <q-scroll-area style="height: 500px">
      <q-editor
        v-if="props.page == $t('link.yourworkspace.link')"
        v-model="editor"
        :dense="$q.screen.lt.md"
        :toolbar="[
          ['save'],
          [
            {
              label: $q.lang.editor.align,
              icon: $q.iconSet.editor.align,
              fixedLabel: true,
              list: 'only-icons',
              options: ['left', 'center', 'right', 'justify'],
            },
          ],
          ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
          ['token', 'hr', 'link', 'custom_btn'],
          ['print', 'fullscreen'],
          [
            {
              label: $q.lang.editor.formatting,
              icon: $q.iconSet.editor.formatting,
              list: 'no-icons',
              options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code'],
            },
            {
              label: $q.lang.editor.fontSize,
              icon: $q.iconSet.editor.fontSize,
              fixedLabel: true,
              fixedIcon: true,
              list: 'no-icons',
              options: [
                'size-1',
                'size-2',
                'size-3',
                'size-4',
                'size-5',
                'size-6',
                'size-7',
              ],
            },
            {
              label: $q.lang.editor.defaultFont,
              icon: $q.iconSet.editor.font,
              fixedIcon: true,
              list: 'no-icons',
              options: [
                'default_font',
                'arial',
                'arial_black',
                'comic_sans',
                'courier_new',
                'impact',
                'lucida_grande',
                'times_new_roman',
                'verdana',
              ],
            },
            'removeFormat',
          ],
          ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

          ['undo', 'redo'],
          ['viewsource'],
        ]"
        :definitions="{
          save: {
            tip: 'Save your work',
            icon: 'save',
            label: 'Save',
            handler: save,
          },
        }"
        :fonts="{
          arial: 'Arial',
          arial_black: 'Arial Black',
          comic_sans: 'Comic Sans MS',
          courier_new: 'Courier New',
          impact: 'Impact',
          lucida_grande: 'Lucida Grande',
          times_new_roman: 'Times New Roman',
          verdana: 'Verdana',
        }"
        :toolbar-bg="toolbarColor"
      />
      <q-card v-else flat bordered>
        <q-card-section v-html="article" />
      </q-card>
    </q-scroll-area>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useQuasar } from 'quasar';
import xss from 'xss';
import { setOverview } from 'src/api/setOverview';
import { useI18n } from 'vue-i18n';

const $q = useQuasar();
const { t } = useI18n();

const props = defineProps({
  page: String,
  overview: String,
  projectId: String,
});

const save = async () => {
  const result =
    props.projectId && (await setOverview(props.projectId, editor.value));

  if (!result)
    $q.notify({
      type: 'negative',
      message: t('failed'),
    });
};

const toolbarColor = computed(() => ($q.dark.isActive ? 'grey-10' : 'grey-1'));

const editor = ref(props.overview ?? '');

const article = computed(() => {
  return xss(editor.value);
});
</script>
