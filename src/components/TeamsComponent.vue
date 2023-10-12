<template>
  <search-bar
    @search="(e: string) => search = e"
    @sort="sortByDate"
    :showFilter="false"
    class="q-pa-sm"
  />
  <teams-list
    :list="sortedListOfCompetitions"
    :page="$t('link.yourworkspace.link')"
    :tab="type"
  />
</template>
<script setup lang="ts">
import { getAllTeams } from 'src/api/getTeamsByUserId';
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

const listOfCompetitions = ref(teamList);

const getBase = () => [...teamList.value];

const getSearchBase = () =>
  teamList.value.filter((obj) => {
    return obj.name.toUpperCase().includes(search.value.toUpperCase());
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
      new Date(a.createDate) > new Date(b.createDate) ? -1 : 1
    );
  } else if (sort.sortOrder == 2) {
    sortedListOfCompetitions.value = base.sort((a, b) =>
      new Date(a.createDate) < new Date(b.createDate) ? -1 : 1
    );
  } else {
    sortedListOfCompetitions.value = base;
  }
};

onMounted(async () => {
  sortedListOfCompetitions.value = search.value ? getSearchBase() : getBase();
  teamList.value = (await getAllTeams(1)) as ITeam[];
});

watch([search], () => {
  sortedListOfCompetitions.value = search.value ? getSearchBase() : getBase();
});
</script>
