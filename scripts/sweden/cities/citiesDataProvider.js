const cities = [
    {
       name:"Stockholm",
       population: 980,000
    },
    {
        name:"Gothenburg",
        population:510,000
    },
    {
        name:"Helsenborg",
        population:110,000
    }
]


export const useCities = () => {
    return cities.slice()
}