const landmarksCollection = [
    {
        name: "The Sky Tower", 
        location: "Aukland"
    }, 
    {
        name: "Moeraki Boulders", 
        location: "South Island"
    }, 
    {
        name: "The Beehive", 
        location: "Wellington"
    }
]

export const useLandmarks = () => {
    return landmarksCollection.slice()
}