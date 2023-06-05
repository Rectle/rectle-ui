<template>
  <div class="row justify-center q-gutter-sm">
    <q-intersection
      v-for="approache in exampleApproaches"
      :key="approache.id"
      transition="scale"
      class="example-item"
    >
      <ProjectDetailsApproacheCard
        :points="approache.points"
        :score="approache.score"
        :status="approache.status"
      />
    </q-intersection>
  </div>
</template>

<script setup lang="ts">
import ProjectDetailsApproacheCard from './project-details-approacheCard.vue';

// TODO: download approaches form databse by id
// const props = defineProps({
//   id: String
// });

const exampleApproaches = [
  {
    id: 1,
    points: 123125,
    score: 0.86743,
    status: 'pending'
  },
  {
    id: 2,
    points: 132513,
    score: 0.24335,
    status: 'pending'
  },
  {
    id: 3,
    points: 125313,
    score: 0.6532,
    status: 'done'
  },
  {
    id: 4,
    points: 103125,
    score: 0.36743,
    status: 'done'
  },
  {
    id: 5,
    points: 532541,
    score: 0.1231,
    status: 'done'
  }
];
</script>
