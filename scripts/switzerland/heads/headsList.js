import {useHeads} from './headsDataProvider.js'
import {headsAsHtml} from './heads.js'

export const headsList = () => {
  const contentElement = document.querySelector(".country-content")

  const heads = useHeads()

  let headsHtmlRepresentations = ""
  for(const currentHeadObj of heads){
    headsHtmlRepresentations += headsAsHtml(currentHeadObj)
  }

  contentElement.innerHTML += `
  <section class="heads card">
  <h3>Heads of State</h3>
  <ul>
  ${headsHtmlRepresentations}
  </ul>
  </section>
  `
}