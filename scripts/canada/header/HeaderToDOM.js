import {headerObj} from "./HeaderDataProvider.js"
import {headerToHTML} from "./HeaderHTMLConverter.js"

const header = headerObj


export const headerToDOM = () => {
    const contentElement = document.querySelector(".country-header")
    contentElement.innerHTML = headerToHTML(header) 
}