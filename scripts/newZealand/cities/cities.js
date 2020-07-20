export const citiesAsHTML = (citiesObj) => {
    return `
    <li>${citiesObj.cityName}, pop. ${citiesObj.population}</li>
    `
}