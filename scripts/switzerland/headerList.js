export const headerList = () => {
    const contentElement = document.querySelector(".header")
   
    contentElement.innerHTML += `
    <div class="img-header">
        <img src="/images/switzerland.jpg" alt="Switzerland countryside">
    </div>
    <h1 class="country-name">Switzerland</h1>`
}