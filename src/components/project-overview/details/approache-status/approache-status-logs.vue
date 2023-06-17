<template>
  <div class="myTable">
    <q-table
      :rows="row"
      :columns="column"
      flat
      bordered
      row-key="name"
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
import { ref, onMounted } from 'vue';
import io from 'socket.io-client';
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

interface ILogs {
  id: number;
  name: string;
}
const row = ref<ILogs[]>([]);

const props = defineProps({
  id: {
    type: String,
    required: true
  }
});

const socketsLogic = (adress: string) => {
  const socket = io(adress, {
    extraHeaders: {
      'X-Build': props.id,
      'Bypass-Tunnel-Reminder': 'Rectle'
    }
  });

  socket.emit('build:join');

  socket.on('build:logs', (logs) => {
    row.value = logs.map(
      (log: string, index: number) => ({ id: index, name: log } as ILogs)
    );
  });

  socket.on('build:log', (logs) => {
    row.value.push({ id: row.value.length + 1, name: logs });
  });

  socket.on('connect_error', (err) => {
    console.error('websocket_error', err);
  });
};

onMounted(() => {
  // TODO: getAdressToWebSockets or logs from backend

  //if adress != null
  socketsLogic('wss://rectle-c3bfbf63-4f1b-41dc-b463-cbf47507d824.loca.lt/');
  //else
  //odpytaj backend
});
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
