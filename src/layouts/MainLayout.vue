<template>
  <q-layout view="'lHh Lpr lFf'">
    <q-header elevated v-if="$q.platform.is.mobile">
      <q-toolbar>
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
          />
          <q-toolbar-title> Rectle </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered :mini="miniState">
      <q-list>
        <!-- <q-item-label header> {{$t('dashboard.title')}} </q-item-label> -->
        <q-item clickable>
          <q-item-section avatar>
            <q-icon
              name="menu"
              aria-label="Menu"
              @click="toggleFun"/>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-h6" v-if="!$q.platform.is.mobile">Rectle</q-item-label>
          </q-item-section>

        </q-item>

        <EssentialLink
          v-for="link in links"
          :key="link.title"
          v-bind="link"
        />

        <div v-if="!miniState" class="fixed-bottom q-mb-xl">
          <q-item-label header> {{$t('dashboard.setting.title')}} </q-item-label>
          <q-item>
            <q-item-section avatar>
              <q-icon name="dark_mode" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-subtitle1">{{ $t('dashboard.setting.darkmode') }}

                <q-toggle
                  @click="changeDarkmode"
                  v-model="dark"
                  val="darkmode"
                  size="lg"
              /></q-item-label>
            </q-item-section>
          </q-item>
      </div>

      </q-list>

      <span v-if="!miniState" class="text-center fixed-bottom text-body2 q-pa-md q-mt-md">{{ appName }} &copy; {{ currYear }}</span>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar, LocalStorage  } from 'quasar';
import moment from 'moment'
import EssentialLink, {
  EssentialLinkProps,
} from 'components/EssentialLink.vue';

const $q = useQuasar();

const links: EssentialLinkProps[] = [
  {
    title: 'Home',
    caption: 'home page',
    icon: 'home',
    link: 'home',
  }
];

const dark = ref($q.dark.isActive)

function changeDarkmode(){
  $q.dark.set(dark.value);
  LocalStorage.set('darkmode', dark.value);
}

const appName = process.env.APP_NAME
const currYear = moment().format('YYYY')

const miniState = ref($q.platform.is.mobile ? false : true)

const leftDrawerOpen = ref($q.platform.is.mobile ? false : true);


function toggleFun(){
 $q.platform.is.mobile ? toggleLeftDrawer() : toggleMiniState()
}

function toggleMiniState() {
  miniState.value = !miniState.value;
}

function toggleLeftDrawer(){
  leftDrawerOpen.value = !leftDrawerOpen.value;
}


</script>
