<template>
  <search-bar
    @search="(e: string) => search = e"
    @sort="sortByDate"
    :showFilter="false"
    class="q-pa-sm"
  />
  <teams-list
    :list="sortedListOfTeams"
    :page="$t('link.yourworkspace.link')"
    :tab="type"
  />
</template>
<script setup lang="ts">
import { getAllTeams } from 'src/api/getAllTeamsByUserId';
import { ISortMock } from 'src/mock/sort.mock';
import { ref, watch, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import searchBar from './competitions/searchBar.vue';
import teamsList from './teams/teamsList.vue';

const { t } = useI18n();

const search = ref<string>('');
const sort = ref<ISort>(ISortMock);

const tabs = [t('tabs.creator'), t('tabs.participant')];
const type = ref<string>(tabs[0]);

interface ITeam {
  id: string;
  name: string;
  createDate: string;
  logoUrl: string;
  users?: { id: string; name: string }[];
}

const teamList = ref<ITeam[]>([]);

const listOfTeams = ref(teamList);

const getBase = () => [...teamList.value];

const getSearchBase = () =>
  getBase().filter((obj) => {
    return obj.name.toUpperCase().includes(search.value.toUpperCase());
  });

const sortedListOfTeams = computed({
  get() {
    return listOfTeams.value;
  },
  set(val) {
    listOfTeams.value = val;
  },
});

const sortByDate = (e: ISort) => {
  sort.value = e;
  sortByStartDate(sort.value);
};

const sortByStartDate = (sort: ISort) => {
  const base = search.value !== '' ? getSearchBase() : getBase();

  if (sort.sortOrder == 1) {
    sortedListOfTeams.value = base.sort((a, b) =>
      new Date(a.createDate) > new Date(b.createDate) ? -1 : 1
    );
  } else if (sort.sortOrder == 2) {
    sortedListOfTeams.value = base.sort((a, b) =>
      new Date(a.createDate) < new Date(b.createDate) ? -1 : 1
    );
  } else {
    sortedListOfTeams.value = base;
  }
};

onMounted(async () => {
  teamList.value = (await getAllTeams()) as ITeam[];
  sortedListOfTeams.value = search.value ? getSearchBase() : getBase();
});

watch([search], async () => {
  teamList.value = (await getAllTeams()) as ITeam[];
  sortedListOfTeams.value = search.value ? getSearchBase() : getBase();
});
</script>
