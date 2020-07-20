const cityCollection = [
    {
        name:"Sydney",
        population:"5,230,000"
    },
    {
        name:"Melbourne",
        population:"4,930,000"
    },
    {
        name:"Canberra",
        population:"396,790"
    },
]

export const useCity = () => {
    return cityCollection.slice()
} 