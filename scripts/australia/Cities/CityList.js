import {useCity} from "./CityDataProvider.js"
import {CityHTML} from "./CityHTMLConverter.js"

export const CityToDOM = () => {
    const contentElement = document.querySelector('.country-content')

    const cityArray = useCity()

    let cityHTMLRep = ""

    for(const currentCityObj of cityArray) {
        cityHTMLRep += CityHTML(currentCityObj)
    }
    contentElement.innerHTML = `
        <section class="card">
            <h3>Major Cities</h3>
                <ul> ${cityHTMLRep}
                </ul>
        </section>

    `

}