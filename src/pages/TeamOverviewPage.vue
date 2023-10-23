<template>
  <q-page class="q-mt-lg">
    <q-card>
      <q-card-section class="row team-header">
        <!-- Logo zespołu -->
        <q-avatar size="100px">
          <img :src="team.logoUrl ?? EMPTY_AVATAR" alt="Team Logo" />
        </q-avatar>
        <!-- Nazwa zespołu -->
        <h2 class="q-mb-md text-center">{{ team.name }}</h2>
      </q-card-section>

      <q-card-section>
        <q-btn color="negative" @click="leaveTeam()">{{
          t('codePage.teams.manage.leave')
        }}</q-btn>
      </q-card-section>

      <!-- Lista członków zespołu -->
      <q-card-section>
        <h4 class="q-mb-md" style="margin-top: 0px">
          {{ t('codePage.teams.manage.members') }}:
        </h4>
        <q-list>
          <q-item v-for="(member, index) in team.users" :key="index" clickable>
            <q-item-section>
              <q-item-label>{{ member.name }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>

      <q-separator />

      <!-- Formularz do zapraszania nowych członków -->
      <q-card-section>
        <h4 class="q-mb-md" style="margin-top: 0px">
          {{ t('codePage.teams.manage.inviteUsers') }}:
        </h4>
        <div class="row">
          <div class="col-5">
            <q-input
              outlined
              dense
              v-model="newMemberName"
              label="Id nowego członka"
            />
          </div>
          <div class="col-2">
            <q-btn
              size="15px"
              class="q-ml-md"
              @click="invite"
              :loading="inviteProcess"
              :label="t('codePage.teams.manage.invite')"
              color="primary"
            />
          </div>
        </div>
      </q-card-section>

      <!-- Lista zaproszonych członków -->
      <q-card-section>
        <h4 class="q-mb-md" style="margin-top: 0px">
          {{ t('codePage.teams.manage.invitedUsers') }}:
        </h4>
        <q-list>
          <q-item v-for="(invitedMember, index) in team?.invited" :key="index">
            <q-item-section>
              <q-item-label
                >{{ invitedMember }}
                <q-btn
                  class="q-ml-md"
                  color="red"
                  flat
                  :loading="cancelInvitationProcess"
                  @click="cancelInvitation(invitedMember)"
                  >{{ t('codePage.teams.manage.cancel') }}</q-btn
                >
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts" setup>
import { EMPTY_AVATAR } from 'src/shared/variable.shared';
import { ref, onBeforeMount } from 'vue';
import { inviteMember, cancelInvitationMember } from 'src/api/inviteMember';
import { getAllTeams } from 'src/api/getAllTeamsByUserId';
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useQuasar } from 'quasar';
import { leaveTheTeam } from 'src/api/leaveFromTeam';
const { t } = useI18n();

const $q = useQuasar();
const route = useRoute();
const router = useRouter();

const team = ref<any>({});
const inviteProcess = ref(false);
const cancelInvitationProcess = ref(false);
const newMemberName = ref(null);
onBeforeMount(async () => {
  const teams = await getAllTeams();
  team.value = teams.find((t: ITeam) => t.id == route.params.id);

  if (!team.value) {
    router.push('/teams');
  }
});

const invite = async () => {
  try {
    if (route.params.id && newMemberName.value) {
      inviteProcess.value = true;
      const response: any = await inviteMember(
        Number(route.params.id),
        Number(newMemberName.value)
      );
      team.value = {
        ...team.value,
        invited: response.invited,
      };
    }
  } catch {
    $q.notify({
      type: 'negative',
      message: t('codePage.invalidData'),
    });
  } finally {
    inviteProcess.value = false;
  }
};

const cancelInvitation = async (id: number) => {
  cancelInvitationProcess.value = true;
  const response: any = await cancelInvitationMember(
    Number(route.params.id),
    id
  );

  team.value = {
    ...team.value,
    invited: response.invited,
  };
  cancelInvitationProcess.value = false;
};

const leaveTeam = () => {
  if (route.params.id)
    $q.dialog({
      title: 'Leave the team',
      message: `Are you sure you want to leave the ${
        team.value.name ?? ''
      } team?`,
      cancel: true,
      persistent: true,
    }).onOk(async () => {
      const result: any = await leaveTheTeam(Number(route.params.id));
      if (result)
        router.push({
          name: 'teams',
        });
      else
        $q.notify({
          type: 'negative',
          message: t('failed'),
        });
    });
};
</script>
<style scoped>
.team-header {
  display: flex;
  align-items: flex-end;
  gap: 20px;
}
</style>
