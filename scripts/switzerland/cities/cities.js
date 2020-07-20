export const citiesAsHtml = (cityObj) => {
  return `
        <li class="city__name">${cityObj.name}<br>Pop: ${cityObj.pop}</li>
  `
}