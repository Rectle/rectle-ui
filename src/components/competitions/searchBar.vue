<template>
  <div class="q-pa-md" style="width: 100%">
    <q-toolbar class="bg-white">
      <q-toolbar-title>
        <q-input
          v-model="search"
          :label="$t('searchBar.search')"
          @update:model-value="emit('search', search)"
        >
          <template v-slot:append>
            <q-icon name="clear" @click="clearSearch" />
          </template>
        </q-input>
      </q-toolbar-title>
      <div dense class="q-mb-xs">
        <q-btn-dropdown
          flat
          round
          dropdown-icon="o_filter_list"
          class="q-px-sm q-mx-xs"
        >
          <div class="row no-wrap q-py-sm q-px-lg">
            <div class="column items-center">
              <div class="text-h6">{{ $t('searchBar.filterBar.filter') }}</div>
              <q-list>
                <q-item clickable>
                  <q-item-section>
                    <q-item-label>
                      <q-toggle
                        v-model="active"
                        val="activeToggle"
                        :label="$t('searchBar.filterBar.toggleActive')"
                        @update:model-value="emit('active', active)"
                      />
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>
                    <q-item-label>
                      <q-toggle
                        v-model="finished"
                        val="endToggle"
                        :label="$t('searchBar.filterBar.toggleEnd')"
                        @update:model-value="emit('finished', finished)"
                      />
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <q-separator />
              </q-list>
            </div>
          </div>
        </q-btn-dropdown>
        <q-btn-dropdown flat round dropdown-icon="o_sort" class="q-px-sm">
          <div class="row no-wrap q-py-sm q-px-lg">
            <div class="column items-center">
              <div class="text-h6">{{ $t('searchBar.filterBar.sort') }}</div>
              <q-list separator>
                <q-item
                  clickable
                  v-close-popup
                  @click="sortByUploadDate(true)"
                  :class="{ 'bg-grey-2': sort.sortOrder }"
                  aria-label="Sort"
                >
                  <q-item-section>
                    <q-item-label
                      >{{ $t('searchBar.filterBar.uploadDate') }}
                      <q-icon
                        class="q-ml-xs"
                        v-if="sort.sortOrder == 1"
                        name="o_arrow_downward"
                        size="xs"
                      />
                      <q-icon
                        v-if="sort.sortOrder == 2"
                        class="q-ml-xs"
                        name="o_arrow_upward"
                        size="xs"
                      />
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </div>
        </q-btn-dropdown>
      </div>
    </q-toolbar>
  </div>
</template>
<script setup lang="ts">
import { defineEmits, ref } from 'vue';
import { ISortMock } from 'src/mock/sort.mock';

const emit = defineEmits(['sort', 'active', 'finished', 'search']);
const active = ref<boolean>(true);
const finished = ref<boolean>(false);
const search = ref<string>('');
const sort = ref<ISort>(ISortMock);

const clearSearch = () => {
  search.value = '';
  emit('search', search.value);
};

const sortByUploadDate = (change: boolean) => {
  if (change) {
    sort.value.sortBy = ESortTypes.Date;
    sort.value.sortOrder += 1;
  }

  if (sort.value.sortOrder == 3) {
    sort.value.sortOrder = 0;
  }
  emit('sort', sort.value);
};
</script>
