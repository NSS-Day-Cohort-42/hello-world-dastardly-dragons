import { useCities } from "./citiesDataProvider.js";
import { citiesAsHTML } from "./cities.js";

export const citiesList = () => {
    const cities = useCities()

    let htmlRepresentations = ""
    for (const city of cities) {
        htmlRepresentations += citiesAsHTML(city)
    }

const contentTarget = document.querySelector(".country-content")

contentTarget.innerHTML += `
    <section class="cities card">
        <h3>Major Cities</h3>
            <ul>
                ${htmlRepresentations}
            </ul>
    </section>
`
}
