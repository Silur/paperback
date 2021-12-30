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
            :done="secretText !== '' || secretDoc"
            :error="secretError && step > 1"
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
            :done="quorumSizeValid && step > 2"
            :error="!quorumSizeValid && step > 2"
          >
            <div style="margin-bottom: 1rem">
              <q-input
                v-model.number="quorumSize"
                type="number"
                filled
                label="Quorum size"
                error-message="Must be larger or equal to shard threshold"
                :error="!quorumSizeValid"
              />
              <q-tooltip class="bg-grey-8" anchor="top left" self="bottom left" :offset="[0, 8]">How many keys you distribute in total</q-tooltip>
            </div>
            <div>
              <q-input
                v-model.number="shardsThreshold"
                type="number"
                filled
                label="Shards needed"
              />
              <q-tooltip class="bg-grey-8" anchor="top left" self="bottom left" :offset="[0, 8]">How many keys are needed to decrypt the document</q-tooltip>
            </div>
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
              <q-btn @click="$refs.stepper.next()" color="primary" :label="step === 4 ? 'Finish' : 'Continue'" :disable="hasError" />
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
      secretDoc: null,
      quorumSize: 3,
      shardsThreshold: 2
    }
  },
  computed: {
    secretError: function () {
      return ((this.secretText === '' && !this.secretDoc) ||
        (this.secretText !== '' && this.secretDoc))
    },
    quorumSizeValid: function () {
      return this.quorumSize >= this.shardsThreshold
    },
    hasError: function () {
      return (this.secretError || !this.quorumSizeValid)
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
