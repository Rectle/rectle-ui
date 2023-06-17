<template>
  <div class="row justify-center q-gutter-sm">
    <div v-if="!approaches.length">{{ $t('approcheTab.empty') }}</div>
    <q-intersection
      v-for="approache in approaches"
      :key="approache.id"
      transition="scale"
      class="example-item"
    >
      <ProjectDetailsApproacheCard
        :projectId="props.projectId"
        :approacheID="approache.id"
        :compiletId="props.compileId"
        :points="approache.points"
        :score="approache.score"
        :status="approache.status"
        :title="props.title"
        :modelName="approache.name"
      />
    </q-intersection>
  </div>
</template>

<script setup lang="ts">
import ProjectDetailsApproacheCard from './project-details-approacheCard.vue';
import { ref, onMounted } from 'vue';

// TODO: download approaches form databse by projectid
const props = defineProps({
  id: String,
  title: String,
  projectId: Number,
  compileId: Number,
  modelName: {
    type: String,
    required: true
  }
});

interface IApprocheDetail {
  id: number;
  name: string;
  points?: number;
  score?: number;
  status?: string;
}

const approaches = ref<IApprocheDetail[]>([]);

onMounted(() => {
  if (props.compileId) {
    approaches.value.push({
      id: props.compileId,
      name: props.modelName
    });
  }
});

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
