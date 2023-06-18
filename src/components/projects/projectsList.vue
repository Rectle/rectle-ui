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
        @click="displayProject(item)"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import projectCard from './projectCard.vue';
import { useRouter } from 'vue-router';

interface IList {
  list: IProjectCard[];
  page: string;
}

const props = defineProps<IList>();

const router = useRouter();

const displayProject = (item: IProjectCard) => {
  router.push({
    path: `project-overview/${item.id}`,
    query: {
      id: item.id,
      item: item.image,
      author: item.author,
      avatar: item.avatar,
      title: item.title,
      date: item.date,
      users: item.users,
      technologies: item.technologies,
      page: props.page
    }
  });
};
</script>
