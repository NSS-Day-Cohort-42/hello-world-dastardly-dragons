import {cityHTMLConverter} from "./CityDataProvider.js"
import {useCities} from "./CityDataProvider.js"

const cities = useCities()

const contentElement = document.querySelector(".country-content")

const listOfCities = ""

cities.forEach(city => {
    listOfCities.push(cityHTMLConverter(city))
})

export const addCitiesToDOM = () => {
    contentElement.innerHTML += `
        <section class="card">
            <h3>Major Cities</h3>
                <ul>${listOfCities}</ul>
        </section>`
                
}