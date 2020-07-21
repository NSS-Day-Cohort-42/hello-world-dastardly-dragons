import {headerObj} from "./HeaderDataProvider.js"
import {headerToHTML} from "./HeaderHTMLConverter.js"

const header = headerObj

const contentElement = document.querySelector(".header")

export const headerToDOM = () => {
    contentElement.innerHTML += headerToHTML(header) 
}