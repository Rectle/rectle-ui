<template>
  <div class="myTable">
    <q-table
      style="height: 400px"
      :rows="row"
      :columns="column"
      flat
      bordered
      row-key="name"
      separator="none"
      hide-bottom
      virtual-scroll
      :rows-per-page-options="[0]"
      :no-data-label="$t('logsPage.empty')"
    >
      <template v-slot:body-cell="props">
        <q-td
          :props="props"
          :style="{
            maxWidth: '1000px',
            whiteSpace: 'pre-wrap',
            alignItems: 'center',
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
import { getLogs } from 'src/api/getLogs';
import { getRunnerUrl } from 'src/api/getRunnerUrl';
const { t } = useI18n();

const column: QTableColumn[] = [
  {
    name: 'id',
    label: t('logs.id'),
    align: 'center',
    field: 'id',
    sortable: true,
  },
  {
    name: 'name',
    label: t('logs.name'),
    field: 'name',
    align: 'left',
  },
];

interface ILogs {
  id: number;
  name: string;
}
const row = ref<ILogs[]>([]);

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const socketsLogic = (adress: string) => {
  const socket = io(adress, {
    extraHeaders: {
      'X-Build': props.id,
      'Bypass-Tunnel-Reminder': 'Rectle',
    },
  });

  socket.emit('build:join');

  socket.on('build:logs', (logs) => {
    row.value = logs.map(
      (log: string, index: number) => ({ id: index + 1, name: log } as ILogs)
    );
  });

  socket.on('build:log', (logs) => {
    row.value.push({ id: row.value.length + 1, name: logs });
  });

  socket.on('connect_error', (err) => {
    console.error('websocket_error', err);
  });
};

onMounted(async () => {
  const logs = await getLogs(Number(props.id));
  if (logs) {
    row.value = logs.map(
      (log: string, index: number) => ({ id: index + 1, name: log } as ILogs)
    );
  } else {
    const interval = setInterval(async () => {
      const address = await getRunnerUrl(Number(props.id));
      if (address) {
        socketsLogic(address.url);
        clearInterval(interval);
      }
    }, 1000);
  }
});
</script>
