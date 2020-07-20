import {HeadsOfStateHTML} from "./HeadsOfStateHTMLConverter.js"
import {useHeadsOfState} from "./HeadsOfStateDataProvider.js"

export const HeadsOfStateToDOM = () => {
    const contentElement = document.querySelector('.country-content')

    const headsOfStateArray = useHeadsOfState()

    let headsOfStateHTMLRep = ""

    for(const headsOfStateObj of headsOfStateArray) {
        headsOfStateHTMLRep += HeadsOfStateHTML(headsOfStateObj)
    }
    contentElement.innerHTML += `
        <section class="card">
            <h3>Heads of State</h3>
                <ul> ${headsOfStateHTMLRep}
                </ul>
        </section>

    `

}