import {useLandmarks} from "./landmarksDataProvider.js"
import {landmarksAsHTML} from "./landmarksHTMLConverter.js"

export const landmarkList = () => {
    const contentElement = document.querySelector(".country-content")
    const landmarks = useLandmarks()

    let landmarkHTML = ""
    for(const currentLandmark of landmarks) {
        landmarkHTML += landmarksAsHTML(currentLandmark)
    }
    contentElement.innerHTML += `
    <section class="card">
            <h3>Landmarks</h3>
            <ul>
            ${landmarkHTML}
            </ul>
        </section> 
    `
}