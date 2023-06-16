<template>
  <div class="row justify-center q-gutter-sm">
    <q-intersection
      v-for="approache in exampleApproaches"
      :key="approache.id"
      transition="scale"
      class="example-item"
    >
      <ProjectDetailsApproacheCard
        :projectId="props.id"
        :approacheID="approache.id"
        :points="approache.points"
        :score="approache.score"
        :status="approache.status"
        :title="props.title"
      />
    </q-intersection>
  </div>
</template>

<script setup lang="ts">
import ProjectDetailsApproacheCard from './project-details-approacheCard.vue';
import { uuid } from 'vue-uuid';

// TODO: download approaches form databse by id
const props = defineProps({
  id: String,
  title: String,
  compileId: Number
});

const exampleApproaches = [
  {
    id: uuid.v4(),
    points: 123125,
    score: 0.86743,
    status: 'pending'
  },
  {
    id: uuid.v4(),
    points: 132513,
    score: 0.24335,
    status: 'pending'
  },
  {
    id: uuid.v4(),
    points: 125313,
    score: 0.6532,
    status: 'done'
  },
  {
    id: uuid.v4(),
    points: 103125,
    score: 0.36743,
    status: 'done'
  },
  {
    id: uuid.v4(),
    points: 532541,
    score: 0.1231,
    status: 'done'
  }
];
</script>
