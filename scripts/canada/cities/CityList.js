import {cityHTMLConverter} from "./CityHTMLConverter.js"
import {useCities} from "./CityDataProvider.js"

const cities = useCities()

const contentElement = document.querySelector(".country-content")

let listOfCities = ""

cities.forEach(city => {
    listOfCities += (cityHTMLConverter(city))
})

export const addCitiesToDOM = () => {
    contentElement.innerHTML += `
        <section class="card">
            <h3>Major Cities</h3>
                <ul>${listOfCities}</ul>
        </section>`
                
}