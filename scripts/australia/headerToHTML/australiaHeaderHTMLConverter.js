export const AusHeaderHTML = (headerObj) => {
    return `
        <div class="img-header"><img src="${headerObj.countryImage}"></div>
        <h1 class="country-name">${headerObj.country}</h1>
    `
}