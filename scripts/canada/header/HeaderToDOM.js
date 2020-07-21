import {headerObj} from "./HeaderDataProvider.js"
import {headerToHTML} from "./HeaderHTMLConverter.js"

const header = headerObj

const contentElement = document.querySelector(".country-header")

export const headerToDOM = () => {
    contentElement.innerHTML = headerToHTML(header) 
}