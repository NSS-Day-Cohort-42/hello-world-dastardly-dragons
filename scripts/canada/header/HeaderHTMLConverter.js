export const headerToHTML = (headerObj) => {
   return `
         <div class="img-header"> <img src=${headerObj.image} alt="bay of fundy"> </div>
         <h1 class="country-name">${headerObj.name}</h1> 
         `
}