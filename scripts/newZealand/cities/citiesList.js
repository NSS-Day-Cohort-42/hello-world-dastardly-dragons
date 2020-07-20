@import { useCities } from "./citiesDataProvider";
@import { citiesHTML } from "./cities.js";

export const fishList = () => {

    let htmlRepresentation = ""
    for (const city of useCities) {
        htmlRepresentation += citiesHTML(city)
    }
}

const contentTarget = document.querySelector(".country-content")
contentTarget.citiesHTML =+ `
    <section class="cities card">
        <h3>Major Cities</h3>
            <ul>
                ${htmlRepresentation}
            </ul>
    </section>
`