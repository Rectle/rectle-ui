<template>
  <div class="row">
    <div
      v-if="props.page === $t('link.yourworkspace.link')"
      class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3"
    >
      <project-add-card :tab="props.tab" @click="addProject" />
    </div>
    <div
      class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3"
      v-for="item of props.list"
      v-bind:key="item.id"
    >
      <project-card
        :image="item.image"
        :team="item.team"
        :description="item.description"
        :avatar="item.avatar"
        :title="item.title"
        :date="item.date"
        @click="displayProject(item)"
      />
    </div>
  </div>

  <create-project
    :dialog="projectDialog"
    @projectIdEmit="(e:number) => projectId = e"
    @closeDialog="(e:boolean) => projectDialog = e"
    @reloadProjects="reloadProjects"
  />
</template>
<script setup lang="ts">
import projectCard from './projectCard.vue';
import projectAddCard from './projectAddCard.vue';
import createProject from './createProject.vue';
import { useRouter } from 'vue-router';
import type { PropType } from 'vue';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { IProject } from 'src/types/project.type';

const props = defineProps({
  list: { type: Array as PropType<IProject[]>, required: true },
  page: String,
  tab: String,
});
const emit = defineEmits(['reloadProjects']);

const router = useRouter();

const projectDialog = ref(false);
const projectId = ref(0);

const { t } = useI18n();

const reloadProjects = () => {
  emit('reloadProjects');
};

const addProject = () => {
  if (props.tab === t('tabs.creator')) {
    projectDialog.value = !projectDialog.value;
  } else {
    router.push({ name: 'competitions' });
  }
};

const displayProject = (item: IProject) => {
  router.push({
    path: `project-overview/${item.id}`,
    query: {
      id: item.id,
      item: item.image,
      team: item.team,
      avatar: item.avatar,
      title: item.title,
      date: item.date,
      description: item.description,
      technologies: item.technologies,
      page: props.page,
    },
  });
};
</script>
