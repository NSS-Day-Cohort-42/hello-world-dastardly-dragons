export const citiesAsHtml = (cityObj) => {
  return `
        <li class="city__name">Name: ${cityObj.name}<br>Pop: ${cityObj.pop}</li>
  `
}