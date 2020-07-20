const headsCollection = [
    {
        headOfState: "Elizabeth II",
        position: "Queen of Canada"
    },
    {
        headOfState: "Justin Trudeau",
        position: "Prime Minister"
    },
    {
        headOfState: "Julie Payette",
        position: "Governor General"
    }
   

]

export const useHeadsOfState = () => {
    return headsCollection.slice()
}