<template>
  <div :class="$q.screen.width > 350 ? 'row' : 'column-view'">
    <div class="col-xs-6 col-sm-4 col-md-3 col-lg-3 col-xl-3">
      <team-add-card @click="addTeam" />
    </div>
    <div
      class="col-xs-6 col-sm-4 col-md-3 col-lg-3 col-xl-3"
      v-for="item of props.list"
      v-bind:key="item.name"
    >
      <team-card
        :image="item.image"
        :name="item.name"
        :date="item.date"
        :users="item.users"
      />
    </div>
  </div>

  <create-team
    :dialog="projectDialog"
    @projectIdEmit="(e: number) => projectId = e"
    @closeDialog="(e: boolean) => projectDialog = e"
  />
</template>
<script setup lang="ts">
import type { PropType } from 'vue';
import { ref } from 'vue';
import teamCard from './teamCard.vue';
import teamAddCard from './teamAddCard.vue';
import createTeam from './createTeam.vue';

const props = defineProps({
  list: { type: Array as PropType<ITeamCard[]>, required: true },
  page: String,
  tab: String,
});
const projectId = ref(0);

const projectDialog = ref(false);

const addTeam = () => {
  projectDialog.value = !projectDialog.value;
};
</script>
<style scoped>
.column-view {
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  flex-direction: column;
}
</style>
