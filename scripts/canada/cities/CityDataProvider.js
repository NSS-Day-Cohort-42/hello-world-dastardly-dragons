const cityCollection = [
    {
        city: "Montreal",
        population: "1,780,000"
    },
    {
        city: "Toronto",
        population: "2,930,000"
    },
    {
        city: "Quebec City",
        population: "542,298"
    }

]

export const useCities = () => {
    return cityCollection.slice()
}