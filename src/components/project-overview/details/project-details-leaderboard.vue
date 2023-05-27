<template>
  <q-table
    class="my-sticky-dynamic"
    :rows="exampleLeaderboard"
    :columns="columns"
    row-key="name"
    flat
    bordered
    virtual-scroll
  />
</template>

<script setup lang="ts">
// TODO: download code text/ file form databse by id
// const props = defineProps({
//   id: String
// });

const columns = [
  {
    name: 'id',
    label: 'Nr',
    field: 'id',
    sortable: true
  },
  {
    name: 'status',
    label: 'Status',
    field: 'status',
    sortable: true
  },
  {
    name: 'team',
    label: 'Team',
    field: 'team',
    sortable: true
  },
  {
    name: 'members',
    label: 'Members(id)',
    field: 'members',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    format: (val: any) => val.join(', '), // # TODO: change format for displaying avatars instead of ids
    sortable: true
  },
  {
    name: 'score',
    label: 'Score',
    field: 'score',
    sortable: true
  },
  {
    name: 'entires',
    label: 'Entires',
    field: 'entires',
    sortable: true
  }
];

const exampleLeaderboard = [
  {
    id: 1,
    status: '-',
    team: 'EPRICURUS',
    members: [123],
    score: 0.7645,
    entires: 74
  },
  {
    id: 2,
    status: '+5',
    team: 'Konni',
    members: [12],
    score: 0.75479,
    entires: 60
  },
  {
    id: 3,
    status: '-',
    team: 'X+Y+Z^3',
    members: [1, 2, 3, 4, 5],
    score: 0.7512,
    entires: 301
  },
  {
    id: 4,
    status: '-',
    team: 'Team Hydrogen',
    members: [9, 8],
    score: 0.74906,
    entires: 58
  },
  {
    id: 5,
    status: '-',
    team: 'Nikita Churkin',
    members: [7],
    score: 0.74562,
    entires: 280
  }
];
</script>
<style>
.my-sticky-dynamic .q-table__top,
thead tr:first-child th {
  background-color: #fafafa;
}
</style>
