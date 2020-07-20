export const landmarkHTMLConverter = (landmarkObj) => {
    return `
        <li>${landmarkObj.landmark}, ${landmarkObj.location}</li>`
}