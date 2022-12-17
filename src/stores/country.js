import { defineStore } from "pinia";

export const useCountryStore = defineStore("country", {
  state: () => {
    const countries = [];
    return { countries };
  },

  actions: {
    async getCountries() {
      const res = await fetch(
        "https://ih-countries-api.herokuapp.com/countries"
      );
      const finalRes = await res.json();
      this.countries = finalRes;
    },
  },
});
