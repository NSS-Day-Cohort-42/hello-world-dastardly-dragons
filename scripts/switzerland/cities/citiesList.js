// this module creates the list of fish to add to the DOM
import {useCities} from "./citiesDataProvider.js"
import {citiesAsHtml} from "./cities.js"

export const cityList = () => {
  // gets reference to elemnt on DOM
  const contentElement = document.querySelector(".country-content")

  // collection of fish from fishDataProvider
  const cities = useCities()

  let cityHtmlRepresentations = ""
  for(const currentCityObj of cities){
    cityHtmlRepresentations += citiesAsHtml(currentCityObj)
  }

  // updating HTML of DOM element with Fish List HTML
  contentElement.innerHTML = `
    <section class="cities card">
    <h3>Major Cities</h3>
    <ul>
      ${cityHtmlRepresentations}
    </ul>  
      </section>
  `
}