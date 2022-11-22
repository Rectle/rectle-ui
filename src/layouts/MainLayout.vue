<template>

<q-layout view="hHh Lpr lff">
      <q-header elevated v-if="!$q.screen.gt.xs">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu"></q-btn>
          <q-toolbar-title>{{appName}} </q-toolbar-title>
        </q-toolbar>
      </q-header>
      <q-drawer
        v-model="drawer"
        show-if-above
        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        mini-to-overlay
        :breakpoint="$q.screen.sizes.sm - 1"
        bordered
      >

      <q-list>
         <q-item-label header> {{$t('dashboard.title')}} </q-item-label>


        <EssentialLink
          v-for="link in links"
          :key="link.title"
          v-bind="link"
        />

        <div class="fixed-bottom q-mb-xl">
          <q-item-label header> {{$t('dashboard.setting.title')}} </q-item-label>
          <q-item>
            <q-item-section avatar>
              <q-icon :name="dark ? 'fa-solid fa-moon' : 'fa-solid fa-sun'" />
            </q-item-section>
            <q-item-section>

            <q-toggle
              v-model="dark"
              @click="changeDarkmode"
              size="lg"
            />
            </q-item-section>
          </q-item>
      </div>

      </q-list>

      <span v-show="!miniState" class="text-center fixed-bottom text-body2 q-pa-md q-mt-md">{{ appName }} &copy; {{ currYear }}</span>

    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { ref, watch } from 'vue';
import { useQuasar, LocalStorage, Screen  } from 'quasar';
import moment from 'moment'
import EssentialLink, {
  EssentialLinkProps,
} from 'components/EssentialLink.vue';

const $q = useQuasar();
const { t } = useI18n();

const links: EssentialLinkProps[] = [
  {
    title: t('dashboard.links.home.title'),
    caption: t('dashboard.links.home.caption'),
    icon: t('dashboard.links.home.icon'),
    link: t('dashboard.links.home.link'),
  }
];

const drawer = ref(false)
const miniState = ref(true)

const dark = ref($q.dark.isActive)

const changeDarkmode = () => {
  $q.dark.set(dark.value);
  LocalStorage.set('darkmode', dark.value);
}

const appName = process.env.APP_NAME
const currYear = moment().format('YYYY')

const isMobile = Screen.lt.sm

const miniMode = ref(!isMobile)
const showDrawer = ref(!isMobile);

const changeLayout = () => {
  if(Screen.lt.sm){
    showDrawer.value = !miniMode.value
    miniMode.value = false
  }else{
      miniMode.value = !showDrawer.value
      showDrawer.value = true
  }
    
}

watch(() => Screen.lt.sm,()=> changeLayout())

</script>

