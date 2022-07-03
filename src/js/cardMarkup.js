export const countryCardMarkup = (country) => {
  return country.map(({ name, flags,
    capital, population, languages, }) => {
      return `
<div class="country-title">
  <img src="${flags.svg}" alt="${name.common}" class="flag" />
  <h2 class="title">${name.official}</h2>
</div>
<p class="category-name">Capital: <span class="item">${capital}</span></p>
<p class="category-name">Population: <span class="item">${population}</span></p>
<p class="category-name">
  Languages: <span class="item">${Object.values(languages)}</span>
</p>

`}).join("")
};

export const countryCardMarkupShort = (country) => {
  return country
    .map(({ name, flags, }) => {
      return `
    <li class="list-item">
    <img src="${flags.svg}" alt = "${name.common}" class="flag"/>
    <h2 class="name">${name.official}</h2>
    </li>
    `}).join("")
};
