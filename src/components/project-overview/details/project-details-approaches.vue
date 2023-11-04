<template>
  <div class="row justify-center q-gutter-sm">
    <div v-if="!approaches.length && !projectIsUploaded">
      {{ $t('approcheTab.empty') }}
    </div>
    <q-card flat v-if="projectIsUploaded">
      <q-btn
        style="width: 100%; height: 100%; min-height: 120px"
        align="between"
        :label="$t('codePage.model.create')"
        icon="o_attach_file"
        @click="uploadModelFromFile"
      />
    </q-card>
    <q-intersection
      v-for="approache in approaches.sort((a, b) => b.id - a.id)"
      :key="approache.id"
      transition="scale"
      class="example-item"
    >
      <ProjectDetailsApproacheCard
        :projectId="props.projectId ? Number(props.projectId) : 0"
        :modelId="approache.id"
        :points="approache.points"
        :score="approache.score"
        :status="approache.status"
        :title="props.title"
        :modelName="approache.name"
      />
    </q-intersection>
  </div>

  <UploadModelComponent
    :dialog="uploadModelFile"
    :projectId="props.projectId ? Number(props.projectId) : 0"
    @closeDialog="(e) => (uploadModelFile = e)"
    @compileIdEmit="(e) => (compileId = e)"
    @modelNameEmit="(e) => (modelName = e)"
    @reloadApproaches="reloadApproaches"
  />
</template>

<script setup lang="ts">
import { getApproaches } from 'src/api/getApproaches';
import ProjectDetailsApproacheCard from './project-details-approachCard.vue';
import UploadModelComponent from './upload-file-dialog/UploadModelComponent.vue';
import { onMounted, ref, watch } from 'vue';
import { isProjectUploaded } from 'src/api/isProjectUploaded';

const props = defineProps({
  projectId: String,
  title: String,
});

interface IApprocheDetail {
  id: number;
  name: string;
  createDate: string;
  points?: number;
  score?: number;
  status?: string;
}

const uploadModelFile = ref(false);
const modelName = ref('');
const compileId = ref(0);

const projectIsUploaded = ref(false);

const approaches = ref<IApprocheDetail[]>([]);

onMounted(async () => {
  projectIsUploaded.value = props.projectId
    ? await isProjectUploaded(props.projectId)
    : false;
  approaches.value = props.projectId
    ? await getApproaches(props.projectId)
    : [];
});

watch([compileId.value], async () => {
  approaches.value = props.projectId
    ? await getApproaches(props.projectId)
    : [];
});

const uploadModelFromFile = () =>
  (uploadModelFile.value = !uploadModelFile.value);

const reloadApproaches = async () => {
  projectIsUploaded.value = props.projectId
    ? await isProjectUploaded(props.projectId)
    : false;
  approaches.value = props.projectId
    ? await getApproaches(props.projectId)
    : [];
};
</script>
