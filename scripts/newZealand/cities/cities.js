export const citiesAsHTML = (citiesObj) => {
    return `
    <li>${citiesObj.cityName} ${citiesObj.population}</li>
    `
}