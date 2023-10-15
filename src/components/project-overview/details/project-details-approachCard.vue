<template>
  <q-card class="q-pa-md cursor-pointer q-hoverable" @click="routeToDetails()">
    <q-card-section horizontal>
      <q-list class="my-list q-mr-sm">
        <q-item>
          <q-item-section>
            <q-icon name="o_badge" size="2em" />
          </q-item-section>
          <q-item-section
            >{{ $t('approcheTab.details.name')
            }}{{ props.modelName }}</q-item-section
          >
        </q-item>

        <q-item>
          <q-item-section>
            <q-icon name="o_fingerprint" size="2em" />
          </q-item-section>
          <q-item-section
            >{{ $t('approcheTab.details.compileId')
            }}{{ props.approacheID }}</q-item-section
          >
        </q-item>
      </q-list>

      <!-- <q-icon
        class="q-ma-md q-ml-lg"
        :name="icons[status as keyof typeof icons]"
        :color="colors[status as keyof typeof colors]"
        size="4rem"
      /> -->
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
  projectId: Number,
  approacheID: Number,
  points: Number,
  score: Number,
  status: String,
  title: String,
  name: String,
  modelName: String,
});

enum colors {
  pending = 'orange',
  done = 'green',
}

enum icons {
  pending = 'o_pending',
  done = 'o_check_circle',
}

const routeToDetails = () => {
  router.push({
    path: `/project-overview/${props.projectId}/status/${props.approacheID}`,
    query: {
      id: props.approacheID,
      projectId: props.projectId,
      title: props.title,
      points: props.points,
      score: props.score,
      status: props.status,
    },
  });
};
</script>
<style>
.my-list .q-item__section--main + .q-item__section--main {
  margin-left: 0px !important;
}
.my-list .q-item {
  padding: 0px 5px;
}
</style>
