import {useCities} from "./citiesDataProvider.js"
import {citiesAsHTML} from "./citiesHTMLConverter.js"


export const cityList = () => {
    const contentElement = document.querySelector(".country-content")
    const cities = useCities()

    let cityHTML = ""
    for(const currentCity of cities) {
        cityHTML += citiesAsHTML(currentCity)
    }
    contentElement.innerHTML += `
        <section class="card">
            <h3>Major Cities</h3>
            <ul>
            ${cityHTML}
            </ul>
        </section> `
}


