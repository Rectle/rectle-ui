<template>
  <q-page>
    <q-card class="fixed-center q-px-md">
      <q-card-section>
        <h1 class="text-h6 q-my-none text-center">
          {{ $t('auth.signin.title') }}
        </h1>
      </q-card-section>
      <q-separator />
      <q-card-section v-if="process" class="q-px-none login-card">
        <q-spinner
          color="primary"
          :size="40"
          class="process-spinner"
        />
      </q-card-section>
      <q-card-section v-else class="q-px-none login-card">
        <GoogleSignInButton
          @success="handleLoginSuccess"
          @error="handleLoginError"
          theme="filled_blue"
          size="large"
          text="signin_with"
          shape="pill"
          :width="240"
          auto-select
          context="signin"
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { useMeta } from 'quasar';
import { useI18n } from 'vue-i18n';
import metaData from '@/utils/configs/meta.ts';
import {
  GoogleSignInButton,
  type CredentialResponse
} from 'vue3-google-signin';
import { useUserStore } from 'src/stores/user';
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';

const { t } = useI18n();

useMeta({
  ...metaData,
  title: t('auth.signin.meta.title')
});

const route = useRoute();
const router = useRouter();
const userStore = useUserStore();

const process = ref(false);

const handleLoginSuccess = async (response: CredentialResponse) => {
  process.value = true
  await userStore.signIn(response);
  router.push({ path: decodeURIComponent(route.query.next as string) || '/' });
};

// handle an error event
const handleLoginError = () => {
  console.error('Login failed');
  process.value = false
};
</script>

<style scoped>
.login-card {
  width: 240px;
}

.process-spinner {
  display: block;
  margin: 0 auto;
}
</style>