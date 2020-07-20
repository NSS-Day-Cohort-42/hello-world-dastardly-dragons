import { useLandmarks } from "./landmarksDataProvider.js";
import { landmarksAsHTML } from "./landmarks.js";

export const landmarksList = () => {
    const landmarks = useLandmarks()

    let htmlRepresentations = ""
    for (const landmark of landmarks) {
        htmlRepresentations += landmarksAsHTML(landmark)
    }

const contentTarget = document.querySelector(".country-content")

contentTarget.innerHTML += `
    <section class="landmarks card">
        <h3>Landmarks</h3>
            <ul>
                ${htmlRepresentations}
            </ul>
    </section>
`
}