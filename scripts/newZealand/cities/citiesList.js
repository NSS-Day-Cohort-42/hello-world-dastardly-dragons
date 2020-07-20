@import { useCities } from "./citiesDataProvider";
@import { citiesHTML } from "./cities.js";

export const fishList = () => {

    let htmlRepresentation = ""
    for (const city of useCities) {
        htmlRepresentation += citiesHTML(city)
    }
}

const contentTarget = document.querySelector(".country-content")