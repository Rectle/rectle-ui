<template>
  <tabs-component @tab="(e: string) => type = e" />
  <search-bar
    @search="(e: string) => search = e"
    @active="(e: boolean)=> active = e"
    @finished="(e:boolean)=> finished = e"
    @sort="sortByDate"
    class="q-pa-sm"
  />
  <projects-list
    :list="sortedListOfCompetitions.filter((e) => e.type == type)"
  />
</template>
<script setup lang="ts">
import searchBar from './competitions/searchBar.vue';
import projectsList from './projects/projectsList.vue';
import tabsComponent from './workspace/tabsComponent.vue';
import { ISortMock } from 'src/mock/sort.mock';
import { ref, watch, computed, onMounted } from 'vue';
import { uuid } from 'vue-uuid';

const active = ref<boolean>(true);
const finished = ref<boolean>(false);
const search = ref<string>('');
const sort = ref<ISort>(ISortMock);
const type = ref<string>('Creator');

const listExamples = [
  {
    title: 'Learing Equality',
    avatar: 'https://cdn-icons-png.flaticon.com/512/4185/4185714.png',
    image:
      'https://storage.googleapis.com/kaggle-competitions/kaggle/39585/logos/header.png?t=2022-12-08-01-35-34',
    author: 'Michaqu',
    users: '2241',
    date: '03.23.2023',
    active: true,
    finished: false,
    type: 'Creator',
    id: uuid.v4(),
    technologies: ['Python', 'Learning', 'K-012']
  },
  {
    title: 'Flower Classification',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbYWSJXT-Og2fhBhVQjF0lQtRbFaL-ZbROWQ&usqp=CAU',
    image:
      'https://storage.googleapis.com/kaggle-competitions/kaggle/21154/logos/header.png?t=2020-06-04-00-33-35',
    author: 'Marse12',
    users: '126',
    date: '04.02.2022',
    active: true,
    finished: false,
    type: 'Creator',
    id: uuid.v4(),
    technologies: ['Python', 'Learning', 'K-012']
  },
  {
    title: 'date Science for Business',
    avatar: 'https://cdn-icons-png.flaticon.com/512/1508/1508902.png',
    image:
      'https://venturebeat.com/wp-content/uploads/2021/09/GettyImages-1262867852-e1671038648519.jpg?fit=1600%2C800&strip=all',
    author: 'Bizdate',
    users: '754',
    date: '04.13.2023',
    active: true,
    finished: false,
    type: 'Participant',
    id: uuid.v4(),
    technologies: ['Python', 'Learning', 'K-012']
  },
  {
    title: 'Data Science for Entrepreneurs',
    avatar:
      'https://img.freepik.com/premium-vector/cartoon-funny-monkey-face-avatar_6996-1144.jpg',
    image:
      'https://storage.googleapis.com/kaggle-media/competitions/nlp1-cover.jpg',
    author: 'DataGenius',
    users: '875',
    date: '04.20.2023',
    active: true,
    finished: false,
    type: 'Participant',
    id: uuid.v4(),
    technologies: ['Python', 'Learning', 'K-012']
  },
  {
    title: 'Data Science for Healthcare',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqL4el0GsUAsmRi8EfljIqqOImdlo_bOg4lQ&usqp=CAU',
    image:
      'https://storage.googleapis.com/kaggle-competitions/kaggle/29781/logos/header.png?t=2021-09-22-19-59-35',
    author: 'HealthData',
    users: '645',
    date: '04.25.2023',
    active: true,
    finished: false,
    type: 'Creator',
    id: uuid.v4(),
    technologies: ['Python', 'Learning', 'K-012']
  },
  {
    title: 'Data Science for Marketing',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSve1KURcIup7UuJVn0N1NbVv1bSDXLVKooXg&usqp=CAU',
    image:
      'https://storage.googleapis.com/kaggle-competitions/kaggle/34377/logos/header.png?t=2022-02-11-21-53-06',
    author: 'DataMark',
    users: '1,532',
    date: '04.27.2023',
    active: true,
    finished: false,
    type: 'Creator',
    id: uuid.v4(),
    technologies: ['Python', 'Learning', 'K-012']
  },
  {
    title: 'Data Science for Finance',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsOxgpBcZhnUnLX8zzHkUpgEvlOcu2myX8Jw&usqp=CAU',
    image:
      'https://storage.googleapis.com/kaggle-competitions/kaggle/47789/logos/header.png?t=2023-02-27-05-05-35',
    author: 'DataFinance',
    users: '987',
    date: '03.30.2023',
    active: true,
    finished: false,
    type: 'Creator',
    id: uuid.v4(),
    technologies: ['Python', 'Learning', 'K-012']
  },
  {
    title: 'Data Science for Social Media',
    avatar:
      'https://i.fbcd.co/products/original/s221128-cat-head-e05-mainpreview-739cdff1e43d362f66989d28e978dcdf400fd71172d53447cb4e0a250debac6b.jpg',
    image:
      'https://storage.googleapis.com/kaggle-competitions/kaggle/21755/logos/header.png?t=2020-08-26-18-44-58',
    author: 'SocialData',
    users: '1,875',
    date: '05.03.2023',
    active: false,
    finished: true,
    type: 'Creator',
    id: uuid.v4(),
    technologies: ['Python', 'Learning', 'K-012']
  },
  {
    title: 'Data Science for Education',
    avatar:
      'https://e0.pxfuel.com/wallpapers/773/34/desktop-wallpaper-mr-bean-funny-mr-bean-en-avatar-mr-bean.jpg',
    image:
      'https://storage.googleapis.com/kaggle-competitions/kaggle/50875/logos/header.png?t=2023-04-05-08-59-30',
    author: 'DataEdu',
    users: '345',
    date: '05.05.2023',
    active: true,
    finished: true,
    type: 'Creator',
    id: uuid.v4(),
    technologies: ['Python', 'Learning', 'K-012']
  },
  {
    title: 'Data Science for E-commerce',
    avatar:
      'https://steamuserimages-a.akamaihd.net/ugc/98351418449351690/FFB49D91F536E3CD46D04A6B570944D5D576E054/?imw=512&imh=512&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
    image:
      'https://storage.googleapis.com/kaggle-competitions/kaggle/40898/logos/header.png?t=2022-10-27-20-38-10',
    author: 'DataCommerce',
    users: '1,245',
    date: '05.08.2023',
    active: true,
    finished: false,
    type: 'Creator',
    id: uuid.v4(),
    technologies: ['Python', 'Learning', 'K-012']
  },
  {
    title: 'Learing Equality',
    avatar: 'https://cdn-icons-png.flaticon.com/512/4185/4185714.png',
    image:
      'https://storage.googleapis.com/kaggle-competitions/kaggle/39585/logos/header.png?t=2022-12-08-01-35-34',
    author: 'Michaqu',
    users: '2241',
    date: '03.23.2023',
    active: true,
    finished: false,
    Participant: 'Creator',
    id: uuid.v4(),
    technologies: ['Python', 'Learning', 'K-012']
  },
  {
    title: 'Flower Classification',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbYWSJXT-Og2fhBhVQjF0lQtRbFaL-ZbROWQ&usqp=CAU',
    image:
      'https://storage.googleapis.com/kaggle-competitions/kaggle/21154/logos/header.png?t=2020-06-04-00-33-35',
    author: 'Marse12',
    users: '126',
    date: '04.02.2022',
    active: true,
    finished: false,
    type: 'Participant',
    id: uuid.v4(),
    technologies: ['Python', 'Learning', 'K-012']
  },
  {
    title: 'Applied Data Science',
    avatar:
      'https://cdn3.iconfinder.com/data/icons/cool-avatars-2/190/00-07-2-512.png',
    image:
      'https://storage.googleapis.com/kaggle-competitions/kaggle/3004/logos/header.png?t=2018-11-14-20-12-43',
    author: 'DataWorks',
    users: '1,230',
    date: '04.22.2023',
    active: true,
    finished: false,
    type: 'Participant',
    id: uuid.v4(),
    technologies: ['Python', 'Learning', 'K-012']
  },
  {
    title: 'Data Science for Healthcare',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqL4el0GsUAsmRi8EfljIqqOImdlo_bOg4lQ&usqp=CAU',
    image:
      'https://storage.googleapis.com/kaggle-competitions/kaggle/29781/logos/header.png?t=2021-09-22-19-59-35',
    author: 'HealthData',
    users: '645',
    date: '04.25.2023',
    active: true,
    finished: false,
    type: 'Participant',
    id: uuid.v4(),
    technologies: ['Python', 'Learning', 'K-012']
  },
  {
    title: 'Data Science for Marketing',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSve1KURcIup7UuJVn0N1NbVv1bSDXLVKooXg&usqp=CAU',
    image:
      'https://storage.googleapis.com/kaggle-competitions/kaggle/34377/logos/header.png?t=2022-02-11-21-53-06',
    author: 'DataMark',
    users: '1,532',
    date: '04.27.2023',
    active: true,
    finished: false,
    type: 'Participant',
    id: uuid.v4(),
    technologies: ['Python', 'Learning', 'K-012']
  },
  {
    title: 'Data Science for Finance',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsOxgpBcZhnUnLX8zzHkUpgEvlOcu2myX8Jw&usqp=CAU',
    image:
      'https://storage.googleapis.com/kaggle-competitions/kaggle/47789/logos/header.png?t=2023-02-27-05-05-35',
    author: 'DataFinance',
    users: '987',
    date: '03.30.2023',
    active: true,
    finished: false,
    type: 'Participant',
    id: uuid.v4(),
    technologies: ['Python', 'Learning', 'K-012']
  },
  {
    title: 'Data Science for Social Media',
    avatar:
      'https://i.fbcd.co/products/original/s221128-cat-head-e05-mainpreview-739cdff1e43d362f66989d28e978dcdf400fd71172d53447cb4e0a250debac6b.jpg',
    image:
      'https://storage.googleapis.com/kaggle-competitions/kaggle/21755/logos/header.png?t=2020-08-26-18-44-58',
    author: 'SocialData',
    users: '1,875',
    date: '05.03.2023',
    active: false,
    finished: true,
    type: 'Participant',
    id: uuid.v4(),
    technologies: ['Python', 'Learning', 'K-012']
  },
  {
    title: 'Data Science for Education',
    avatar:
      'https://e0.pxfuel.com/wallpapers/773/34/desktop-wallpaper-mr-bean-funny-mr-bean-en-avatar-mr-bean.jpg',
    image:
      'https://storage.googleapis.com/kaggle-competitions/kaggle/50875/logos/header.png?t=2023-04-05-08-59-30',
    author: 'DataEdu',
    users: '345',
    date: '05.05.2023',
    active: true,
    finished: true,
    type: 'Participant',
    id: uuid.v4(),
    technologies: ['Python', 'Learning', 'K-012']
  },
  {
    title: 'Data Science for E-commerce',
    avatar:
      'https://steamuserimages-a.akamaihd.net/ugc/98351418449351690/FFB49D91F536E3CD46D04A6B570944D5D576E054/?imw=512&imh=512&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
    image:
      'https://storage.googleapis.com/kaggle-competitions/kaggle/40898/logos/header.png?t=2022-10-27-20-38-10',
    author: 'DataCommerce',
    users: '1,245',
    date: '05.08.2023',
    active: true,
    finished: false,
    type: 'Participant',
    id: uuid.v4(),
    technologies: ['Python', 'Learning', 'K-012']
  }
];

const listOfCompetitions = ref(listExamples);

const getBase = () =>
  listExamples.filter(
    (obj) => (active.value && obj.active) || (finished.value && obj.finished)
  );

const getSearchBase = () =>
  getBase().filter((obj) => {
    return (
      obj.title.toUpperCase().includes(search.value.toUpperCase()) ||
      obj.author.toUpperCase().includes(search.value.toUpperCase())
    );
  });

const sortedListOfCompetitions = computed({
  get() {
    return listOfCompetitions.value;
  },
  set(val) {
    listOfCompetitions.value = val;
  }
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
