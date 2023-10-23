<template>
  <q-input
    class="q-mb-md q-ml-sm"
    dense
    debounce="300"
    v-model="filter"
    placeholder="Search"
    color="black"
    style="max-width: 300px"
  >
    <template v-slot:prepend>
      <q-icon name="search" />
    </template>
  </q-input>
  <q-table
    class="my-sticky-dynamic"
    :rows="leaderboardData"
    :columns="columns"
    row-key="name"
    flat
    bordered
    :filter="filter"
    virtual-scroll
  >
    <template v-slot:body-cell-actions="props">
      <q-td :props="props">
        <q-btn
          icon="o_folder_zip"
          flat
          round
          :color="props.row.resourceUrl ? 'black' : 'grey'"
          :disable="props.row.resourceUrl == null"
          @click="
            () =>
              downloadModelFile(
                props.row.resourceUrl,
                `${props.row.name}-${props.row.userId}`
              )
          "
        ></q-btn>
      </q-td>
    </template>
  </q-table>
</template>

<script setup lang="ts">
const props = defineProps({
  projectId: String,
});

import { downloadFileFromUrl } from 'src/api/downloadFileFromUrl';
import { getLeaderboard } from 'src/api/getLeaderboard';
import { formatLeaderboardWithSorting } from 'src/shared/formatters/projects.formatter';
import { IFormattedLeaderboard, ILeaderboard } from 'src/types/project.type';
import { onMounted, ref } from 'vue';

const filter = ref('');
const leaderboardData = ref<IFormattedLeaderboard[]>([]);

onMounted(async () => {
  if (props.projectId) {
    const leaderboard: ILeaderboard[] | null = await getLeaderboard(
      props.projectId
    );
    leaderboardData.value = leaderboard
      ? formatLeaderboardWithSorting(leaderboard)
      : [];
  }
});

const columns = [
  {
    name: 'name',
    label: 'Name',
    field: 'name',
    sortable: true,
  },
  {
    name: 'userId',
    label: 'UserID',
    field: 'userId',
    sortable: true,
  },
  {
    name: 'userName',
    label: 'User Name',
    field: 'userName',
    sortable: true,
  },
  {
    name: 'score',
    label: 'Score',
    field: 'score',
    sortable: true,
  },
  { name: 'actions', label: 'Solution', field: 'actions' },
];
const downloadModelFile = (url: string, name: string) => {
  downloadFileFromUrl(url, name);
};
</script>
