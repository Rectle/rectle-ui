<template>
  <q-dialog v-model="openDialog">
    <q-card class="q-pa-md q-px-xl q-pb-xl">
      <div class="absolute-right">
        <q-btn
          flat
          class="dialog-button q-ma-none q-pa-none"
          round
          color="dark"
          icon="close"
          @click="emit('closeDialog', !openDialog)"
        />
      </div>
      <div class="q-my-md row items-start justify-center text-h3">
        {{
          tab === 'create' ? $t('addTeam.form.title') : $t('addTeam.join.title')
        }}
      </div>
      <q-tabs v-model="tab" class="text-primary">
        <q-tab name="create" :label="$t('addTeam.form.tab')" />
        <q-tab name="join" :label="$t('addTeam.join.tab')" />
      </q-tabs>
      <q-separator />
      <div class="items-start justify-start">
        <q-form
          v-if="tab === 'create'"
          @submit.prevent.stop="onSubmit"
          class="q-gutter-md q-mt-md"
        >
          <q-input
            v-model="teamName"
            filled
            :label="t('addTeam.form.teamName')"
          />

          <q-file v-model="avatar" :label="$t('addTeam.form.avatar')" filled>
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>

          <div>
            <q-btn
              label="Submit"
              type="submit"
              color="primary"
              class="full-width"
              size="lg"
            />
          </div>
        </q-form>
        <div v-else class="q-my-sm">
          <p class="text-center" v-if="availableTeams.length == -0">
            {{ t('addTeam.form.noPendingInvitations') }}
          </p>
          <q-virtual-scroll
            v-else
            style="max-height: 400px"
            :items="availableTeams"
            separator
            v-slot="{ item, index }"
          >
            <q-item
              :key="index"
              dense
              style="padding: 5px 0px"
              @click="requestDialog(item)"
              clickable
              v-ripple
            >
              <q-item-section avatar>
                <q-avatar>
                  <img :src="item.logoUrl ?? EMPTY_IMAGE" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-primary">
                  {{ item.name }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-virtual-scroll>
        </div>
      </div>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';
import { createTeam } from 'src/api/createTeam';
import { getNotBelongingToUserTeams } from 'src/api/getNotBelongingToUserTeams';
import { ITeamJoin } from 'src/types/teams.type';
import { joinToTeam } from 'src/api/joinToTeam';
import { EMPTY_IMAGE } from 'src/shared/variable.shared';
import { useUserStore } from 'src/stores/user';
import { useRouter } from 'vue-router';

const router = useRouter();
const userStore = useUserStore();

const props = defineProps({
  dialog: Boolean,
});

const emit = defineEmits(['closeDialog', 'projectIdEmit']);

const availableTeams = ref([]);

onMounted(async () => {
  const _teams = await getNotBelongingToUserTeams();
  availableTeams.value = _teams.filter((t: any) =>
    t?.pendingInvites?.includes(userStore.getUserId)
  );
});

const requestDialog = (item: ITeamJoin) => {
  $q.dialog({
    title: 'Almost there!',
    message: `Your request to join the ${item.name} team is pending approval`,
    cancel: true,
    persistent: true,
  }).onOk(() => {
    joinToTeam(item.id);
    $q.notify({
      color: 'primary',
      message: t('codePage.team.inviteSuccessData'),
      timeout: 2000,
    });
    router.push(`/teams/${item.id}`);
  });
};

const openDialog = computed({
  get: () => props.dialog,
  set: (newValue) => emit('closeDialog', newValue),
});

const teamName = ref<string>('');
const avatar = ref<File>();

const tab = ref<string>('create');

const $q = useQuasar();
const { t } = useI18n();

const setResult = (result: number) => {
  if (result) {
    $q.notify({
      color: 'primary',
      message: t('codePage.team.successData'),
      timeout: 2000,
    });
    router.push(`/teams/${result}`);
  } else {
    $q.notify({
      type: 'negative',
      message: t('codePage.team.errorData'),
    });
  }
};

const onSubmit = async () => {
  if (teamName.value) {
    const result = await createTeam(teamName.value, avatar.value);
    setResult(result);
  } else {
    $q.notify({
      type: 'negative',
      message: t('codePage.emptyData'),
    });
  }
};
</script>
