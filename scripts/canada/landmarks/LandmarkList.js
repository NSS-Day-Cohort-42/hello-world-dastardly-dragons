import {landmarkHTMLConverter} from "./LandmarkHTMLConverter.js"
import {useLandmarks} from "./LandmarkDataProvider.js"

const landmarks = useLandmarks()

const contentElement = document.querySelector(".country-content")

let listOfLandmarks = ""

landmarks.forEach(landmark => {
    listOfLandmarks += (landmarkHTMLConverter(landmark))
})

export const addLandmarksToDOM = () => {
    contentElement.innerHTML += `
        <section class="card">
            <h3>Landmarks</h3>
                <ul>${listOfLandmarks}</ul>
        </section>`
                
}