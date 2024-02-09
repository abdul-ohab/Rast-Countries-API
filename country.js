
const loadCountrys = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = (countries) =>{
    const containerDiv = document.getElementById('country-list');
    countries.forEach(country =>{
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('div-style');
        countryDiv.innerHTML = `
        <h4> Country Name: ${country.name.common} </h4>
        <p> Capital Name: ${country.capital ? country.capital[0] : 'No capital'} </p>
        <button onclick="countryDtails('${country.cca2}')"> Details </button>
        `
        containerDiv.appendChild(countryDiv);
    })
}

const countryDtails = (code) =>{
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    fetch(url)
    .then(res => res.json())
    .then(data => countryInfo(data[0]))
}

const countryInfo = (details) =>{
    const displayDetails = document.getElementById('country-details');
    displayDetails.innerHTML = `
    <h3> ${details.name.common} </h3>
    <img src='${details.flags.png}'>
    `
}
loadCountrys();