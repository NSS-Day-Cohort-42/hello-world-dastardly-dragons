export const citiesAsHtml = (cityObj) => {
  return `
        <li class="city__name">${cityObj.name}, pop. ${cityObj.pop}</li>
  `
}