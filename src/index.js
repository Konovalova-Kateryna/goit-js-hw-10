import './css/styles.css';

import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

import { fetchCountry } from './js/fetchCountries';
import { countryCardMarkup } from './js/cardMarkup';
import { countryCardMarkupShort } from './js/cardMarkup'

const DEBOUNCE_DELAY = 300;

const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
const inputEl = document.querySelector('#search-box');
inputEl.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
    e.preventDefault();
    
    const currentCountry = inputEl.value.trim();
    if (currentCountry === "") {
        countryInfo.innerHTML = "";
        countryList.innerHTML = "";
        return;
    }
    console.log(currentCountry);

    fetchCountry(currentCountry)
    .then(renderCountry)
    .catch(onFetchError);
};

function renderCountry(country) {
    if (country.length >= 10) {
        countryList.innerHTML = "";
        Notiflix.Notify.info(`${country.length} matches found. Please enter a more specific name.`);
        return;
    } else if (country.length > 2 & country.length < 10) {
        countryList.innerHTML = countryCardMarkupShort(country)
        countryInfo.innerHTML = "";
    } else {
        console.log(country);
        countryInfo.innerHTML = countryCardMarkup(country);
        countryList.innerHTML = "";
    }
};

function onFetchError(error) {
    Notiflix.Notify.failure('Oops, there is no country with that name')
    countryList.innerHTML = "";
    countryInfo.innerHTML = "";
};


    
    
    


    