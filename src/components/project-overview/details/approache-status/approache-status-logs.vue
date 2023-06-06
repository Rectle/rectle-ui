<template>
  <div class="myTable">
    <q-table
      :rows="row"
      :columns="column"
      flat
      bordered
      row-key="name"
      hide-bottom
      separator="none"
    >
      <template v-slot:body-cell="props">
        <q-td
          :props="props"
          :style="{
            maxWidth: '1000px',
            whiteSpace: 'pre-wrap',
            padding: 0,
            alignItems: 'center'
          }"
        >
          {{ props.value }}
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script setup lang="ts">
import { QTableColumn } from 'quasar';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const column: QTableColumn[] = [
  {
    name: 'id',
    label: t('logs.id'),
    align: 'center',
    field: 'id',
    sortable: true
  },
  {
    name: 'name',
    label: t('logs.name'),
    field: 'name',
    align: 'left'
  }
];

const row = [
  {
    id: 1,
    name: 'docker run --restart=always -d v=/var/run/docker.sock:/var/run/docker.sock gliderlabs/logspoutsyslog+tls:logsN.papertrailapp.com:XXXXX'
  },
  {
    id: 2,
    name: 'docker run --log-driver=syslog--log-opt syslog-address=udp://logsN.papertrailapp.com:XXXXX image-name'
  }
];
</script>
<style>
.myTable .scroll {
  overflow: hidden;
}
.customEllipsis {
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
  overflow: hidden !important;
}
</style>
