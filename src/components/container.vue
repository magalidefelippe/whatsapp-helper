<template>
  <b-container fluid="sm">
    <b-row align-v="center" align-h="center" style="height: 90vh">
      <b-col col md="6">
        <transition-group name="fade" mode="in-out">
          <div key="card">
             <b-card
            no-body
            border-variant="primary"
            header="primary"
            header-bg-variant="primary"
            header-text-variant="white"
          >
            <template #header>
              <h4 class="mb-0">WhatsApp helper!</h4>
            </template>

            <b-card-body>
              <b-card-sub-title class="mb-3"
                >Code by Magascript</b-card-sub-title
              >
              <b-card-text>
                <b-input-group class="mt-3">
                  <vue-country-code
                    @onSelect="selectCountry"
                    :preferredCountries="['ar', 'es', 'us', 'br', 've', 'uy']"
                  >
                  </vue-country-code>
                  <b-form-input
                    type="number"
                    v-model="number.phone"
                  ></b-form-input>
                </b-input-group>

                <b-button
                  @click="send"
                  class="mt-3"
                  block
                  variant="outline-primary"
                >
                  Llevame a whatsapp!</b-button
                >
              </b-card-text>
            </b-card-body>
          </b-card>
          </div>
         
        </transition-group>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { Number } from "../Model/Number";

export default {
  data: () => ({
    number: new Number(),
  }),

  methods: {
    selectCountry({ dialCode }) {
      this.number.code = dialCode;
    },

    send() {
      this.number.execute(this);
    },
  },
};
</script>
