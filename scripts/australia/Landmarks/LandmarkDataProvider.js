const landmarksCollection = [
    {
        name:"Great Barrier Reef",
        location:"Coast of Queensland"
    },
    {
        name:"Sydney Opera House",
        location:"Sydney"
    },
    {
        name:"Bondi Beach",
        location:"New South Wales"
    },
]

export const useLandmarks = () => {
    return landmarksCollection.slice()
}