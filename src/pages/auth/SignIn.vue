<template>
    <q-page>
        <q-card class="fixed-center q-px-md">
            <q-card-section>
                <h1 class="text-h6 q-my-none">{{ $t('auth.signin.title') }}</h1>
            </q-card-section>
            <q-separator />
            <q-card-section class="q-px-none">
                <q-btn
                    class="google-button"
                    rounded
                    color="primary"
                    :loading="processing"
                    @click="signInWithGoogle"
                >
                    <q-icon name="fa-brands fa-google" class="q-mr-sm" size="xs" />Google
                </q-btn>
            </q-card-section>
        </q-card>
    </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useMeta } from 'quasar';
import { useI18n } from 'vue-i18n';
import metaData from '@/utils/configs/meta.ts';

const { t } = useI18n();

let processing = ref(false);

useMeta({
  ...metaData,
  title: t('auth.signin.meta.title')
})

const signInWithGoogle = () => {
    processing.value = true
}
</script>

<style scoped lang="scss">
.google-button {
    width: 100%;
}
</style>