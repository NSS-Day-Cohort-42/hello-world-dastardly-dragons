import { useHeaders } from "./headersDataProvider.js";
import { headersAsHTML } from "./headers.js";

export const headersList = () => {
    const headers = useHeaders()

    let htmlRepresentations = ""
    for (const header of headers) {
        htmlRepresentations += headersAsHTML(header)
    }

const contentTarget = document.querySelector(".country-header")

contentTarget.innerHTML += `
    ${htmlRepresentations}
`
}



