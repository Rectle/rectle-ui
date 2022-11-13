<template>
    <q-page>
        <div class="fixed-center">
            <q-card class="q-px-md">
                <q-card-section>
                    <h1 class="text-h6 q-my-none text-center">{{ $t('auth.signup.title') }}</h1>
                </q-card-section>
                <q-separator />
                <q-card-section class="q-px-none">    
                    <GoogleSignInButton
                        @success="handleRegisterSuccess"
                        @error="handleRegisterError"
                        theme="filled_blue"
                        size="large"
                        text="signup_with"
                        shape="pill"
                        :width="240"
                    />
                </q-card-section>
            </q-card>
        </div>
    </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted, inject, watch } from 'vue';
import { useMeta } from 'quasar';
import { useI18n } from 'vue-i18n';
import metaData from '@/utils/configs/meta.ts';
import {
  GoogleSignInButton,
  type CredentialResponse,
} from "vue3-google-signin";
import { useUserStore } from 'src/stores/user';
import { useRoute, useRouter } from 'vue-router';

const { t } = useI18n();

useMeta({
  ...metaData,
  title: t('auth.signup.meta.title')
})

const route = useRoute();
const router = useRouter();
const userStore = useUserStore();

const handleRegisterSuccess = async (response: CredentialResponse) => {
  await userStore.signIn(response);
  router.push({ path: route.query.next as string || '/' })
};

// handle an error event
const handleRegisterError = () => {
  console.error("Register failed");
};
</script>
