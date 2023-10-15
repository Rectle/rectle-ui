<template>
  <search-bar
    @search="(e: string) => search = e"
    @active="(e: boolean)=> active = e"
    @finished="(e:boolean)=> finished = e"
    @sort="sortByDate"
    class="q-pa-md"
  />
  <projects-list
    :list="sortedListOfCompetitions"
    :page="$t('link.competitions.link')"
    @reloadProjects="reloadProjects"
  />
</template>
<script setup lang="ts">
import { getAllProjects } from 'src/api/getAllProjects';
import searchBar from './competitions/searchBar.vue';
import projectsList from './projects/projectsList.vue';
import { ISortMock } from 'src/mock/sort.mock';
import { ref, watch, computed, onMounted } from 'vue';
import { formatProjectsListData } from 'src/shared/formatters/projects.formatter';
import { IProject } from 'src/types/project.type';

const active = ref<boolean>(true);
const finished = ref<boolean>(false);
const search = ref<string>('');
const sort = ref<ISort>(ISortMock);

const listExamples = ref<IProject[]>([]);

const listOfCompetitions = ref(listExamples);

const getBase = () =>
  listExamples.value.filter(
    (obj) => (active.value && obj.active) || (finished.value && obj.finished)
  );
const getSearchBase = () =>
  getBase().filter((obj) => {
    return (
      obj.title.toUpperCase().includes(search.value.toUpperCase()) ||
      obj.team.toUpperCase().includes(search.value.toUpperCase())
    );
  });

const sortedListOfCompetitions = computed({
  get() {
    return listOfCompetitions.value;
  },
  set(val) {
    listOfCompetitions.value = val;
  },
});

const sortByDate = (e: ISort) => {
  sort.value = e;
  sortByStartDate(sort.value);
};

const sortByStartDate = (sort: ISort) => {
  const base = search.value !== '' ? getSearchBase() : getBase();

  if (sort.sortOrder == 1) {
    sortedListOfCompetitions.value = base.sort((a, b) =>
      new Date(a.date) > new Date(b.date) ? -1 : 1
    );
  } else if (sort.sortOrder == 2) {
    sortedListOfCompetitions.value = base.sort((a, b) =>
      new Date(a.date) < new Date(b.date) ? -1 : 1
    );
  } else {
    sortedListOfCompetitions.value = base;
  }
};

onMounted(async () => {
  listExamples.value = formatProjectsListData(await getAllProjects());
  sortedListOfCompetitions.value = search.value ? getSearchBase() : getBase();
});

watch([active, finished, search], async () => {
  listExamples.value = formatProjectsListData(await getAllProjects());
  sortedListOfCompetitions.value = search.value ? getSearchBase() : getBase();
});

const reloadProjects = async () => {
  listExamples.value = formatProjectsListData(await getAllProjects());
  sortedListOfCompetitions.value = search.value ? getSearchBase() : getBase();
};
</script>
