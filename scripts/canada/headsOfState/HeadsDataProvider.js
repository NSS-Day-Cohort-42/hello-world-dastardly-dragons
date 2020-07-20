const headsCollection = [
    {
        headOfState: "Elizabeth II",
        Position: "Queen of Canada"
    },
    {
        headOfState: "Justin Trudeau",
        Position: "Prime Minister"
    },
    {
        headOfState: "Julie Payette",
        Position: "Governor General"
    }
   

]

export const useHeadsOfState = () => {
    return headsCollection.slice()
}