const citiesCollection = [
    {
        cityName: "Aukland"
        population: "1,600,000"
    }, 
    {
        cityName: "Nelson"
        population: "52,900"
    }, 
    {
        cityName: "Wellington"
        population: "213,000"
    }
] 

export const useCities = (citiesObj) => {
    return citiesCollection.slice()
}