<template>
  <div class="list-group">
    <div
      class="list-group-item list-group-item-action"
      v-for="country in countryStore.countries"
      @click="showCountry(country._id)"
    >
      <img
        :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"
      />
      <p>{{ country.name.common }}</p>
    </div>
  </div>
</template>

<script setup>
import { useCountryStore } from "../stores/country.js";
const countryStore = useCountryStore();
countryStore.getCountries();

function showCountry(countryId) {
  countryStore.getCountryDetails(countryId);
  console.log(countryStore.country.name.common);
}

// -- previous code --
// import { ref } from "vue";
// const countries = ref(null);

// async function getCountries() {
//   const res = await fetch("https://ih-countries-api.herokuapp.com/countries");
//   const finalRes = await res.json();
//   countries.value = finalRes;
//   console.log(finalRes);
// }
// getCountries();
</script>

<style></style>
