import {headsHTMLConverter} from "./HeadsHTMLConverter.js"
import {useHeadsOfState} from "./HeadsDataProvider.js"

const headsOfState = useHeadsOfState()

const contentElement = document.querySelector(".country-content")

let listOfHeads = ""

headsOfState.forEach(head => {
    listOfHeads += (headsHTMLConverter(head))
})

export const addHeadsToDOM = () => {
    contentElement.innerHTML += `
        <section class="card">
            <h3>Heads of State</h3>
                <ul>${listOfHeads}</ul>
        </section>`
                
}