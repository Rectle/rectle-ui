<template>
  <q-btn
    class="q-mb-md"
    align="between"
    label="Create model"
    icon="o_attach_file"
    outline
    rounded
    @click="uploadModelFromFile"
  />

  <div class="row justify-center q-gutter-sm">
    <div v-if="!approaches.length">{{ $t('approcheTab.empty') }}</div>
    <q-intersection
      v-for="approache in approaches"
      :key="approache.id"
      transition="scale"
      class="example-item"
    >
      <ProjectDetailsApproacheCard
        :projectId="props.id ? Number(props.id) : 0"
        :approacheID="approache.id"
        :points="approache.points"
        :score="approache.score"
        :status="approache.status"
        :title="props.title"
        :modelName="approache.name"
      />
    </q-intersection>
  </div>

  <UploadModelComponent
    :dialog="uploadModelFile"
    :projectId="props.id ? Number(props.id) : 0"
    @closeDialog="(e) => (uploadModelFile = e)"
    @compileIdEmit="(e) => (compileId = e)"
    @modelNameEmit="(e) => (modelName = e)"
  />
</template>

<script setup lang="ts">
import { getApproaches } from 'src/api/getApproaches';
import ProjectDetailsApproacheCard from './project-details-approachCard.vue';
import UploadModelComponent from './upload-file-dialog/UploadModelComponent.vue';
import { onMounted, ref, watch } from 'vue';

// TODO: download approaches form databse by projectid
const props = defineProps({
  id: String,
  title: String,
});

interface IApprocheDetail {
  id: number;
  name: string;
  createDate: string;
  points?: number;
  score?: number;
  status?: string;
}

const uploadModelFile = ref(false);
const modelName = ref('');
const compileId = ref(0);

const approaches = ref<IApprocheDetail[]>([]);

onMounted(async () => {
  approaches.value = props.id ? await getApproaches(props.id) : [];
});

watch([compileId.value], async () => {
  approaches.value = props.id ? await getApproaches(props.id) : [];
});

const uploadModelFromFile = () =>
  (uploadModelFile.value = !uploadModelFile.value);

// onMounted(() => {
//   if (props.compileId) {
//     approaches.value.push({
//       id: props.compileId,
//       name: props.modelName,
//     });
//   }
// });

// const exampleApproaches = [
//   {
//     id: uuid.v4(),
//     points: 123125,
//     score: 0.86743,
//     status: 'pending'
//   },
//   {
//     id: uuid.v4(),
//     points: 132513,
//     score: 0.24335,
//     status: 'pending'
//   },
//   {
//     id: uuid.v4(),
//     points: 125313,
//     score: 0.6532,
//     status: 'done'
//   },
//   {
//     id: uuid.v4(),
//     points: 103125,
//     score: 0.36743,
//     status: 'done'
//   },
//   {
//     id: uuid.v4(),
//     points: 532541,
//     score: 0.1231,
//     status: 'done'
//   }
// ];
</script>
