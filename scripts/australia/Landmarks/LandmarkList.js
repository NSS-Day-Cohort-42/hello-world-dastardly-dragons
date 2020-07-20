import {useLandmarks} from "./LandmarkDataProvider.js"
import {LandmarksHTML} from "./LandmarkHTMLConverter.js"

export const LandmarksToDOM = () => {
    const contentElement = document.querySelector('.country-content')

    const landmarkArray = useLandmarks()

    let landmarksHTMLRep = ""

    for(const currentlandmarkObj of landmarkArray) {
        landmarksHTMLRep += LandmarksHTML(currentlandmarkObj)
    }
    contentElement.innerHTML += `
        <section class="card">
            <h3>Landmarks</h3>
                <ul> ${landmarksHTMLRep}
                </ul>
        </section>

    `

}