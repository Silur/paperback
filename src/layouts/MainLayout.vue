<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="header">
      <q-toolbar>
        <q-toolbar-title>
          Paperback
        </q-toolbar-title>

        <div class="locale-changer">
          <q-select v-model="$i18n.locale" :options="$i18n.availableLocales">
          </q-select>
        </div>
        <div><a href="https://github.com/silur"><q-icon name="mdi-github" size="2rem"/></a></div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
  },

  setup () {
    return {
    }
  }
})
</script>

<style lang="scss">
.header {
  background-color: $purple;
}

@media print {
  .header {
    display: none;
  }
}
</style>
