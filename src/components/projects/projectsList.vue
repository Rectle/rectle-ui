<template>
  <div class="row">
    <div
      class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3"
      v-for="item of props.list"
      v-bind:key="item.title"
    >
      <project-card
        :image="item.image"
        :author="item.author"
        :avatar="item.avatar"
        :title="item.title"
        :date="item.date"
        :users="item.users"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import projectCard from './projectCard.vue';

interface IProjectCard {
  image: string;
  author: string;
  avatar: string;
  title: string;
  date: string;
  users: string;
}

interface IList {
  list: IProjectCard[];
}

const props = defineProps<IList>();
</script>
