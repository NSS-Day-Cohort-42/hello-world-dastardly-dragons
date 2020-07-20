import{useCities} from "./CityDataProvider.js"
import{cityHTMLConverter} from "./CityHTMLConverter.js"

const cities = useCities()

const contentElement = document.querySelector(".country-content")

let cityList = []

cities.forEach(city => {
    cityList.push(cityHTMLConverter(city))
})


export const addCitiesToDOM = () => {
    contentElement.innerHTML += `
        <section class= "card">
            <h3>Major Cities</h3>
                <ul>${cityList}</ul>
        </section>`
}