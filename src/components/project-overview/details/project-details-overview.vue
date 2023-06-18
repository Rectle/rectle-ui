<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<template>
  <div class="q-ma-md">
    <q-scroll-area style="height: 500px">
      <div class="q-pa-md q-gutter-sm">
        <q-editor
          v-if="props.page == $t('link.yourworkspace.link')"
          v-model="editor"
          :dense="$q.screen.lt.md"
          :toolbar="[
            [
              {
                label: $q.lang.editor.align,
                icon: $q.iconSet.editor.align,
                fixedLabel: true,
                list: 'only-icons',
                options: ['left', 'center', 'right', 'justify']
              }
            ],
            [
              'bold',
              'italic',
              'strike',
              'underline',
              'subscript',
              'superscript'
            ],
            ['token', 'hr', 'link', 'custom_btn'],
            ['print', 'fullscreen'],
            [
              {
                label: $q.lang.editor.formatting,
                icon: $q.iconSet.editor.formatting,
                list: 'no-icons',
                options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code']
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
                  'size-7'
                ]
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
                  'verdana'
                ]
              },
              'removeFormat'
            ],
            ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

            ['undo', 'redo'],
            ['viewsource']
          ]"
          :fonts="{
            arial: 'Arial',
            arial_black: 'Arial Black',
            comic_sans: 'Comic Sans MS',
            courier_new: 'Courier New',
            impact: 'Impact',
            lucida_grande: 'Lucida Grande',
            times_new_roman: 'Times New Roman',
            verdana: 'Verdana'
          }"
          :toolbar-bg="toolbarColor"
        />
        <q-card v-else flat bordered>
          <q-card-section v-html="editor" />
        </q-card>
      </div>
    </q-scroll-area>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useQuasar } from 'quasar';

// TODO: download overview text form databse by id
// const props = defineProps({
//   id: String
// });
const $q = useQuasar();

const props = defineProps({
  page: String
});

const toolbarColor = computed(() => ($q.dark.isActive ? 'grey-10' : 'grey-1'));

const exampleText = `<p><strong>What is a Getting Started competition?</strong></p>
      <p>
        Getting Started competitions were created by Kaggle data scientists for
        people who have little to no machine learning background. They are a
        great place to begin if you are new to data science or just finished a
        MOOC and want to get involved in Kaggle.
      </p>
      <p>
        Getting Started competitions are a non-competitive way to get familiar
        with Kaggle’s platform, learn basic machine learning concepts, and start
        meeting people in the community. They have no cash prize and are on a
        rolling timeline.
      </p>
      <p><strong>How do I create and manage a team?</strong></p>
      <p>
        When you accept the competition rules, a team will be created for you.
        You can invite others to your team, accept a merger with another team,
        and update basic information like team name by going to the
        <em>More > Team</em> page.
      </p>
      <p>
        We've heard from many Kagglers that teaming up is the best way to learn
        new skills <strong>AND</strong> have fun. If you don't have a teammate
        already, consider asking if anyone wants to team up in the discussion
        forum.
      </p>
      <p><strong>What are Notebooks?</strong></p>
      <p>
        Kaggle Notebooks is a cloud computational environment that enables
        reproducible and collaborative analysis. Notebooks support scripts in
        Python and R, Jupyter Notebooks, and RMarkdown reports. You can visit
        the <em>Notebooks</em> tab to view all of the publicly shared code for
        the Titanic competition. For more on how to use Notebooks to learn data
        science, check out our <em>Courses</em>!
      </p>
      <p><strong>Why did my team disappear from the leaderboard?</strong></p>
      <p>
        To keep with the spirit of getting-started competitions, we have
        implemented a two month rolling window on submissions. Once a submission
        is more than two months old, it will be invalidated and no longer count
        towards the leaderboard.
      </p>
      <p>
        If your team has no submissions in the previous two months, the team
        will also drop from the leaderboard. This will keep the leaderboard at a
        manageable size, freshen it up, and prevent newcomers from getting lost
        in a sea of abandoned scores.
      </p>
      <p>
        "I worked so hard to get that score! Give it back!" Read more about our
        decision to implement a rolling leaderboard <a href="#">here</a>.
      </p>
      <p><strong>How do I contact Support?</strong></p>
      <p>
        Kaggle does not have a dedicated support team so you’ll typically find
        that you receive a response more quickly by asking your question in the
        appropriate forum. (For this competition, you’ll want to use the Titanic
        discussion forum).
      </p>
      <p>
        Support is only able to help with issues that are being experienced by
        all participants. Before contacting support, please check the discussion
        forum for information on your problem. If you can’t find it, you can
        post your problem in the forum so a fellow participant or a Kaggle team
        member can provide help. The forums are full of useful information on
        the data, metric, and different approaches. We encourage you to use the
        forums often. If you share your knowledge, you'll find that others will
        share a lot in turn!
      </p>
      <p>
        If your problem persists or it seems to be effective all participants
        then please contact us.
      </p>`;

const editor = ref(exampleText);
</script>
