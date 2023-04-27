<template>
  <div class="items-start justify-start">
    <div class="q-pa-md">
      <q-table
        v-model:selected="selected"
        :title="$t('logsPage.title')"
        :rows="row"
        :columns="column"
        row-key="name"
        selection="multiple"
        hide-header
        hide-bottom
      >
        <template v-slot:top>
          <div class="text-h5">
            {{ $t('logsPage.title') }}
          </div>
        </template>
      </q-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { QTableColumn } from 'quasar';

const selected = ref([]);

const column: QTableColumn[] = [
  {
    name: 'name',
    required: true,
    label: 'Name_Log',
    align: 'left',
    field: (row: { name: any }) => row.name,
    format: (val: any) => val,
    sortable: true
  },
  { name: 'date', label: 'date', field: 'date' }
];

const row = [
  {
    name: 'Err 1',
    date: '2022-12-20 16:02'
  },
  {
    name: 'Err 2',
    date: '2022-12-18 21:02'
  }
];
</script>
