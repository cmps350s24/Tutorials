// references to the elements that we will be interacting with
const regionBaseURL = "https://restcountries.com/v3.1/region/"
const countryBaseURL = "https://restcountries.com/v3.1/name/"

const regionDD = document.querySelector("#region")
const countryDD = document.querySelector("#country")
const factsArea = document.querySelector("#facts-area")

regionDD.addEventListener('change', handleRegionChange)
countryDD.addEventListener('change', handleCountryChange)


async function handleRegionChange() {


    const url = `${regionBaseURL}${regionDD.value}`
    const data = await fetch(url)
    const countries = await data.json()

    countryDD.innerHTML = countries.map(country => `<option value='${country.name.common}'> ${country.name.common} </option>
`).join(' ')
}

async function handleCountryChange() {
    const url = `${countryBaseURL}${countryDD.value}`
    const data = await fetch(url)
    const countries = await data.json()
    const country = countries[0]

    factsArea.innerHTML = convertCountryToHTMLTable(country)

    regionDD.remove()
}

function convertCountryToHTMLTable(country) {
    return ` 
            <h1> ${country.name.official} </h1>
            <img src="${country.flags.png}" alt="${country.name.official} flag " />
            <table id="table">
                <tr>
                    <th >Official Country Name</th>
                    <td>${country.name.official}</td>
                </tr>
                <tr>
                    <th>Capital</th>
                    <td>${country.capital.join(' - ')}</td>
                </tr>
                <tr>
                    <th></th>
                    <td></td>
                </tr>
                <tr>
                    <th></th>
                    <td></td>
                </tr>
            </table>
            
    `
}