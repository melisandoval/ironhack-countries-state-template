<template>
  <Navbar />
  <div class="container">
    <div class="row">
      <div class="col-5" style="max-height: 90vh; overflow: scroll">
        <CountriesList :countries="countryStore.countries" />
      </div>
      <div class="col-7">
        <CountryDetails :countries="countryStore.countries" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import CountriesList from "./pages/CountriesList.vue";
import CountryDetails from "./pages/CountryDetails.vue";
import { useCountryStore } from "./stores/country.js";

// export default {
//   components: {
//     Navbar,
//     CountriesList,
//     CountryDetails,
//   },
// };

const countryStore = useCountryStore();
countryStore.getCountries();

// const countries = countryStore.countries;
</script>

<style></style>
