# Bootcamp lab "Countries" | Vue practice 

## Requirements:

In this lab we are going to build a small encyclopedia of countries. Initially we have a list of countries with a few details about each of them.

When we click on one of the countries, we want more details about it to appear on the right side of the screen. Specifically:

- A picture of its flag.
- Its name.
- The name of its capital.
- Its surface area in Km2.
- A list of its borders with other countries.

All the visual part of the project is already laid out using Bootstrap, so you won't have to worry about HTML or CSS.

## Initial state of the project

At the beginning we have three files to work with:

- A CountriesList.vue file, in which we will find the already created list of countries. The information is extracted when starting the project from the API "https://ih-countries-api.herokuapp.com/countries".

- A CountriesDetail.vue file, which will be the one displayed on the right side of the screen. Right now it only includes the HTML structure and Bootstrap classes, but it does not have any information.

- A Pinia store called country.js. Initially it will be empty.

## Your goal

Using the Pinia store, you will have to get the aforementioned data displayed in the CountryDetails.vue file every time the user clicks on a new country in CountriesList.vue.

Tip: Take a good look at the structure of the data coming from the API, and how CountryDetails.vue is laid out.
