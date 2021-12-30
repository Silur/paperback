<template>
  <q-page class="">
    <div class="row">
      <div class="col-12">
        <q-stepper
          v-model="step"
          ref="stepper"
          color="primary"
          animated
        >
          <q-step
            :name="1"
            title="Upload secret"
            icon="mdi-file-document"
            active-icon="mdi-file-document"
            :done="step > 1"
          >
            <div class="row">
              <div class="col-12" style="margin-bottom: 2rem">
                <q-input
                  v-model="secretText"
                  filled
                  type="textarea"
                  label="Type your secret here"
                />
              </div>
              <div class="col-12" style="margin-bottom: 2rem">
                <q-separator color="purple" inset />
              </div>
              <div class="col-12" style="margin-bottom: 2rem">
                <q-file v-model="secretDoc" label="Or upload a file"/>
              </div>
            </div>
          </q-step>

          <q-step
            :name="2"
            title="Set Quorum"
            icon="mdi-account-group"
            active-icon="mdi-account-group"
            :done="step > 2"
          >
            TODO
          </q-step>

          <q-step
            :name="3"
            title="Save main document"
            icon="mdi-file-download"
            active-icon="mdi-file-download"
            :done="step > 3"
          >
            TODO
          </q-step>

          <q-step
            :name="4"
            title="Save key shards"
            icon="mdi-download-lock"
          >
            TODO
          </q-step>

          <template v-slot:navigation>
            <q-stepper-navigation>
              <q-btn @click="$refs.stepper.next()" color="primary" :label="step === 4 ? 'Finish' : 'Continue'" />
              <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
            </q-stepper-navigation>
          </template>
        </q-stepper>
      </div>
    </div>
  </q-page>
</template>

<script>

export default {
  name: 'Index',
  data: () => {
    return {
      step: 1,
      secretText: '',
      secretDoc: null
    }
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
}
.q-card {
  margin-bottom: 1rem;
}
</style>
