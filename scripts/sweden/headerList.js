
export const headerList = () => {
    const contentElement = document.querySelector(".country-header")
   
    contentElement.innerHTML = `
    <div class="img-header">
        <img src="/images/swedenHeader.jpg" alt="Sundsvall, Sweden">
    </div>
    <h1 class="country-name">Sweden</h1>`
}
