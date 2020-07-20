import { useHeads } from "./headsDataProvider.js";
import { headsAsHTML } from "./heads.js";

export const headsList = () => {
    const heads = useHeads()

    let htmlRepresentations = ""
    for (const head of heads) {
        htmlRepresentations += headsAsHTML(head)
    }

const contentTarget = document.querySelector(".country-content")

contentTarget.innerHTML += `
    <section class="heads card">
        <h3>Heads of State</h3>
            <ul>
                ${htmlRepresentations}
            </ul>
    </section>
`
}