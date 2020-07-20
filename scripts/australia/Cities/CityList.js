import {useCity} from "./Cities/CityDataProvider.js"
import {CityHTML} from "./Cities/CityHTMLConverter.js"

export const CityToDOM = () => {
    const contentElement = document.querySelector('.country-content')

    const cityArray = useCity()

    let cityHTMLRep = ""

    for(const currentCityObj of cityArray) {
        cityHTMLRep += CityHTML(currentCityObj)
    }
    contentElement.innerHTML += `
        <article class
    `

}