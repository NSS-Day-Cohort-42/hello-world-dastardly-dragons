import {useCities} from "./citiesDataProvider.js"
import {citiesAsHTML} from "./citiesHTMLConverter.js"

const contentElement = document.querySelector(".country-content")
const cities = citiesAsHTML()


export const cityToDOM = () => {

    contentElement.innerHTML += `
    <section class="card">
        <h3>Major Cities>
        <ul>
        ${cities}
        </ul>`
}

export const cityList = () => {
    const cityTest = useCities()
    cityToDOM(cityTest)
}