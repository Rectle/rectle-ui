<template>
  <tabs-component :tabs="tabs" @tab="(e: string) => type = e" />
  <search-bar
    @search="(e: string) => search = e"
    @active="(e: boolean)=> active = e"
    @finished="(e:boolean)=> finished = e"
    @sort="sortByDate"
    class="q-pa-sm"
  />
  <projects-list
    :list="sortedListOfCompetitions.filter((e) => e.type == type)"
    :page="$t('link.yourworkspace.link')"
    :tab="type"
    @reloadProjects="reloadProjects"
  />
</template>
<script setup lang="ts">
import searchBar from './competitions/searchBar.vue';
import projectsList from './projects/projectsList.vue';
import tabsComponent from './workspace/tabsComponent.vue';
import { ISortMock } from 'src/mock/sort.mock';
import { ref, watch, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { IWorkspace } from 'src/types/project.type';
import { formatWorkspaceListData } from 'src/shared/formatters/projects.formatter';
import { getAllUserProjects } from 'src/api/getAllUserProjects';

const { t } = useI18n();

const active = ref<boolean>(true);
const finished = ref<boolean>(false);
const search = ref<string>('');
const sort = ref<ISort>(ISortMock);

const tabs = [t('tabs.creator'), t('tabs.participant')];
const type = ref<string>(tabs[0]);

const userProjects = ref<IWorkspace[]>([]);

const listOfCompetitions = ref(userProjects);

const getBase = () =>
  userProjects.value.filter(
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
  userProjects.value = formatWorkspaceListData(await getAllUserProjects());
  sortedListOfCompetitions.value = search.value ? getSearchBase() : getBase();
});

watch([active, finished, search], async () => {
  userProjects.value = formatWorkspaceListData(await getAllUserProjects());
  sortedListOfCompetitions.value = search.value ? getSearchBase() : getBase();
});

const reloadProjects = async () => {
  userProjects.value = formatWorkspaceListData(await getAllUserProjects());
  sortedListOfCompetitions.value = search.value ? getSearchBase() : getBase();
};
</script>
