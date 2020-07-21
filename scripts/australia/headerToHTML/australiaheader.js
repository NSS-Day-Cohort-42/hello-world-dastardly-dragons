import {australiaHeader} from "./headerDataProvider.js"
import {AusHeaderHTML} from "./australiaHeaderHTMLConverter.js"

export const AustraliaHeaderToDOM = () => {
    const contentElement = document.querySelector('.country-header')

    const headerArray = australiaHeader()

    let ausHeaderHTMLRep = ""

    for(const currentHeaderObj of headerArray) {
        ausHeaderHTMLRep += AusHeaderHTML(currentHeaderObj)
    }
    
    contentElement.innerHTML =`
        <div class="header-content>
            ${ausHeaderHTMLRep}
        </header>
             

    `

}


