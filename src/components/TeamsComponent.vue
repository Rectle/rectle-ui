<template>
  <search-bar
    @search="(e: string) => search = e"
    @sort="sortByDate"
    class="q-pa-sm"
  />
  <teams-list
    :list="sortedListOfCompetitions"
    :page="$t('link.yourworkspace.link')"
    :tab="type"
  />
</template>
<script setup lang="ts">
import { ISortMock } from 'src/mock/sort.mock';
import { ref, watch, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import searchBar from './competitions/searchBar.vue';
import teamsList from './teams/teamsList.vue';
// import { uuid } from 'vue-uuid';

const { t } = useI18n();

const active = ref<boolean>(true);
const finished = ref<boolean>(false);
const search = ref<string>('');
const sort = ref<ISort>(ISortMock);

const tabs = [t('tabs.creator'), t('tabs.participant')];
const type = ref<string>(tabs[0]);

const listExamples = [
  {
    id: '1',
    name: 'test1',
    date: '03.23.2023',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Animedia_favicon.png',
    users: [],
  },
  {
    id: '2',
    name: 'test2',
    date: '03.24.2023',
    url: 'https://supersound.pl/media/catalog/category/DJ_banner_10.jpg',
    users: [],
  },
  {
    id: '3',
    name: 'test3',
    date: '03.25.2023',
    url: 'https://supersound.pl/media/catalog/category/kolumny_banner2_1.jpg',
    users: [],
  },
  {
    id: '4',
    name: 'test4',
    date: '03.27.2023',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/250x250.png',
    users: [],
  },
];

const listOfCompetitions = ref(listExamples);

const getBase = () => listExamples;
// listExamples.filter(
//   (obj) => (active.value && obj.active) || (finished.value && obj.finished)
// );

const getSearchBase = () =>
  listExamples.filter((obj) => {
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

onMounted(() => {
  sortedListOfCompetitions.value = search.value ? getSearchBase() : getBase();
});

watch([active, finished, search], () => {
  sortedListOfCompetitions.value = search.value ? getSearchBase() : getBase();
});
</script>
