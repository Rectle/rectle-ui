<template>
  <q-page class="q-mt-xl">
    <q-card>
      <q-card-section>
        <!-- Logo zespołu -->
        <q-avatar size="100px">
          <img :src="team.logoUrl ?? EMPTY_AVATAR" alt="Team Logo" />
        </q-avatar>
        <!-- Nazwa zespołu -->
        <h2 class="q-mb-md">{{ team.name }}</h2>
      </q-card-section>

      <!-- Lista członków zespołu -->
      <q-card-section>
        <h4 class="q-mb-md">{{ t('codePage.teams.manage.members') }}:</h4>
        <q-list>
          <q-item
            v-for="(member, index) in team.users"
            :key="index"
            clickable
          >
            <q-item-section>
              <q-item-label>{{ member.name }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>

      <!-- Formularz do zapraszania nowych członków -->
      <q-card-section>
        <h4 class="q-mb-md">{{ t('codePage.teams.manage.inviteUsers') }}:</h4>
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
            <q-btn size="15px" class="q-ml-md" @click="invite" :loading="inviteProcess" :label="t('codePage.teams.manage.invite')" color="primary" />
          </div>
        </div>
      </q-card-section>

      <!-- Lista zaproszonych członków -->
      <q-card-section>
        <h4 class="q-mb-md">{{  t('codePage.teams.manage.invitedUsers') }}:</h4>
        <q-list>
          <q-item
            v-for="(invitedMember, index) in team?.invited"
            :key="index"
          >
            <q-item-section>
              <q-item-label>{{ invitedMember }}
                <q-btn class="q-ml-md" color="red" flat :loading="cancelInvitationProcess" @click="cancelInvitation(invitedMember)">{{ t('codePage.teams.manage.cancel') }}</q-btn>
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { EMPTY_AVATAR } from 'src/shared/variable.shared';
import { ref, onBeforeMount } from 'vue';
import { inviteMember, cancelInvitationMember } from 'src/api/inviteMember';
import { getAllTeams } from 'src/api/getAllTeamsByUserId';
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n';
import { useQuasar } from 'quasar';
const { t } = useI18n();

const $q = useQuasar();
const route = useRoute()
const router = useRouter()

const team = ref({});
const inviteProcess = ref(false);
const cancelInvitationProcess = ref(false);
const newMemberName = ref('');
onBeforeMount(async () => {
  const teams = await getAllTeams();
  team.value = teams.find(t => t.id == route.params.id)

  if (!team.value) {
    router.push('/teams')
  }
})

const invite = async () => {
  try {
    inviteProcess.value = true;
    const response = await inviteMember(route.params.id, newMemberName.value)
    console.log(response)
    team.value = {
      ...team.value,
      invited: response.invited
    }
  } catch {
    $q.notify({
      type: 'negative',
      message: t('codePage.invalidData')
    })
  } finally {
    inviteProcess.value = false;
  }
}

const cancelInvitation = async (id) => {
  cancelInvitationProcess.value = true;
  const response = await cancelInvitationMember(route.params.id, id)

  team.value = {
    ...team.value,
    invited: response.invited
  }
  cancelInvitationProcess.value = false;
}
</script>
