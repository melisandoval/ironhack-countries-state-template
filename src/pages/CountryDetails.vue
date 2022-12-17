<template>
  <div v-if="countryStore.loading">
    <h2>Loading...</h2>
  </div>
  <div v-if="!countryStore.loading && !countryStore.countrySelected">
    <h2>Click a country!</h2>
  </div>
  <div v-if="countryStore.countrySelected">
    <img
      :src="`https://flagpedia.net/data/flags/icon/72x54/${countryStore.country.alpha2Code.toLowerCase()}.png`"
      alt="country flag"
      style="width: 300px"
    />
    <h1>{{ countryStore.country.name.common }}</h1>
    <table class="table">
      <thead></thead>
      <tbody>
        <tr>
          <td style="width: 30%">Capital</td>
          <td>{{ countryStore.country.capital[0] }}</td>
        </tr>
        <tr>
          <td>Area</td>
          <td>{{ countryStore.country.area }} km <sup>2</sup></td>
        </tr>
        <tr>
          <td>Borders</td>
          <td>
            <ul v-for="border in countryStore.country.borders">
              <li>
                <a href="/">{{ border }}</a>
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useCountryStore } from "../stores/country.js";
const countryStore = useCountryStore();
</script>

<style></style>
