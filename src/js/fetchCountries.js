const BASE_URL = 'https://restcountries.com/v3.1'

export const fetchCountry = (countryName) => {
    return fetch(`${BASE_URL}/name/${countryName}?fields=name,capital,flags,languages,population`)
        .then((response) =>
        {
            if (!response.ok) {
            throw new Error(response.statusText);
            }
            return response.json();
        });
}; 

