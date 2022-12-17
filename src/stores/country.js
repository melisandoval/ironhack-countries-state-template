import { defineStore } from "pinia";

export const useCountryStore = defineStore("country", {
  state: () => {
    const countries = [];
    const country = {};
    const loading = false;
    const countrySelected = false;
    return { countries, country, loading, countrySelected };
  },

  actions: {
    async getCountries() {
      this.loading = true;

      const res = await fetch(
        "https://ih-countries-api.herokuapp.com/countries"
      );
      const finalRes = await res.json();
      this.countries = finalRes;

      if (res.error) {
        console.log(error);
      }

      this.loading = false;
    },

    async getCountryDetails(id) {
      this.country = this.countries.find((country) => country._id === id);
      this.countrySelected = true;
    },
  },
});
