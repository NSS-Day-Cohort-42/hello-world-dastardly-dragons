const headsCollection = [
    {
        name: "Elizabeth II",
        position: "Queen of New Zealand"
    }, 
    {
        name: "Dame Patsy Reddy",
        position: "Governor General"
    }, 
    {
        name: "Jacinda Arden",
        position: "Prime Minister"
    }
] 

export const useHeads = () => {
    return headsCollection.slice()
}