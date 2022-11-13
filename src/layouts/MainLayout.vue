<template>

<q-layout view="hHh Lpr lff">
      <q-header elevated class="bg-black" v-if="$q.screen.lt.md">
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
        :breakpoint="500"
        bordered
        class="bg-grey-3"
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

  <!-- <q-layout view="lHh Lpr lFf">
    <q-header elevated v-if="$q.screen.lt.md">
      <q-toolbar>
          <q-btn
            flat
            dense
            round
            icon="menu"
            :aria-label="$t('dashboard.icons.labels.menu')"
            @click="toggleDrawer"
          />
          <q-toolbar-title> {{appName}} </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="showDrawer"  ref="drawer" bordered :mini="miniMode && $q.screen.gt.sm" :breakpoint="500" >
      <q-list>
         <q-item-label header> {{$t('dashboard.title')}} </q-item-label>
        <q-item clickable @click="toggleNavigationDrawer">
          <q-item-section avatar>
            <q-icon
              name="menu"
              :aria-label="$t('dashboard.icons.labels.menu')"
            />
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-h6" v-if="!miniMode">{{appName}}</q-item-label>
          </q-item-section>

        </q-item>

        <EssentialLink
          v-for="link in links"
          :key="link.title"
          v-bind="link"
        />

        <div v-if="!miniMode" class="fixed-bottom q-mb-xl">
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

      <span v-if="!miniMode" class="text-center fixed-bottom text-body2 q-pa-md q-mt-md">{{ appName }} &copy; {{ currYear }}</span>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout> -->
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

$q.screen.setSizes({ sm: 300, md: 480})

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

function changeDarkmode(){
  $q.dark.set(dark.value);
  LocalStorage.set('darkmode', dark.value);
}

const appName = process.env.APP_NAME
const currYear = moment().format('YYYY')

const isMobile = Screen.lt.md

const miniMode = ref(!isMobile)
const showDrawer = ref(!isMobile);


// function toggleNavigationDrawer(){
//   Screen.lt.md ? toggleDrawer() : toggleMiniMode()
// }

function toggleMiniMode() {
  miniMode.value = !miniMode.value;
}

function toggleDrawer(){
  showDrawer.value = !showDrawer.value;
}

function changeLayout(){
  if(Screen.lt.md){
    showDrawer.value = !miniMode.value
    miniMode.value = false
    }else{
      miniMode.value = !showDrawer.value
      showDrawer.value = true
    }
}

watch(() => Screen.lt.md,()=> changeLayout())

</script>

