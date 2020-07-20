import {useLandmarks} from "./landmarksDataProvider.js"
import {landmarksAsHtml} from "./lankmarks.js"

export const landmarksList = () => {
  const contentElement = document.querySelector(".country-content")

  const landmarks = useLandmarks()

  let landmarkHtmlRepresentations = ""
  for(const currentLandmarkObj of landmarks){
    landmarkHtmlRepresentations += landmarksAsHtml(currentLandmarkObj)
  }

  contentElement.innerHTML += `
  <section class="landmarks card">
  <h3>Landmarks</h3>
  <ul>
    ${landmarkHtmlRepresentations}
  </ul>
  </section>
  `
}