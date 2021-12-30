<template>
  <q-page class="flex flex-center">
    <div class="row">
      <div class="col-12">
        <q-card v-ripple @click="beginBackup()">
          <q-card-section class="card-section">
            <q-icon name="mdi-content-save-all" size="8rem" color="purple"/> <span>Backup</span>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12">
        <q-card v-ripple>
          <q-card-section class="card-section">
            <q-icon name="mdi-backup-restore" size="8rem" color="purple"/> <span>Recover</span>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12">
        <q-card v-ripple>
          <q-card-section class="card-section">
            <q-icon name="mdi-arrow-expand-right" size="8rem" color="purple"/> <span>Expand</span>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12">
        <q-card v-ripple>
          <q-card-section class="card-section justify-center full-height">
              <q-icon name="mdi-help" size="8rem" color="purple"/> <span>Help</span>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>

export default {
  name: 'Index',
  data: () => {
    return {}
  },
  methods: {
    beginBackup: function () {
      setTimeout(() => {
        this.$router.push('backup')
      }, 200)
    }
  }
}
</script>

<style lang="scss">
.card-section {
  text-align: center;
  span {
    padding-left: 1rem;
    font-size: 4rem;
    vertical-align: middle;
  }
}
.q-card {
  margin-bottom: 1rem;
}
</style>
