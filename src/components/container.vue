<template>
  <b-container class="bv-example-row">
    <b-row align-h="center">
      <b-card
        no-body
        border-variant="primary"
        header="primary"
        header-bg-variant="primary"
        header-text-variant="white"
        style="width: 80%"
      >
        <template #header>
          <h4 class="mb-0">WhatsApp helper!</h4>
        </template>

        <b-card-body>
          <b-card-sub-title class="mb-2">Code by Magascript</b-card-sub-title>
          <b-card-text>
            <b-input-group class="mt-3">
              <vue-country-code
                :preferredCountries="['ar', 'es', 'us', 'br', 've', 'uy']"
              >
              </vue-country-code>
              <b-form-input></b-form-input>
            </b-input-group>

            <b-button class="mt-3" block variant="outline-primary">
              <b-spinner v-show="loading" small type="grow"></b-spinner>
              Llevame a whatsapp!</b-button
            >
          </b-card-text>
        </b-card-body>
      </b-card>
    </b-row>
  </b-container>
</template>
