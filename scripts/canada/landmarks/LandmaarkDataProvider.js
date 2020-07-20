const landmarkCollection = [
    {
        landmark: "Bay of Fundy",
        location: "Nova Scotia"
    },
    {
        landmark: "Banff National Park",
        location: "Alberta"
    },
    {
        landmark: "Niagara Falls",
        location: "Ontario"
    },
   

]

export const useLandmarks = () => {
    return landmarkCollection.slice()
}