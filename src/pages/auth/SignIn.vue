<template>
    <q-page>
        <q-card class="fixed-center q-px-md">
            <q-card-section>
                <h1 class="text-h6">Sign in with</h1>
            </q-card-section>
            <q-card-section>
                <q-btn><q-icon name="fa-brands fa-google" class="q-mr-sm" size="xs" />Google</q-btn>
            </q-card-section>
        </q-card>
    </q-page>
</template>

<script setup lang="ts">
import { useMeta } from 'quasar';
import metaData from '@/utils/configs/meta.ts';
useMeta({
  ...metaData,
  title: 'Sign in'
})
</script>