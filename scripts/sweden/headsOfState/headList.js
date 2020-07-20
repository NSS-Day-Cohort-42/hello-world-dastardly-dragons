import {useHeads} from "./headDataProvider.js"
import {headAsHTML} from "./headHTMLConverter.js"


export const headList = () => {
    const contentElement = document.querySelector(".country-content")
    const heads = useHeads()

    let headHTML = ""
    for (const currentHead of heads) {
        headHTML += headAsHTML(currentHead)
    }
    contentElement.innerHTML += `
    <section class="card">
        <h3>Heads of State</h3>
        <ul>
            ${headHTML}
        </ul>
    </section>`
}