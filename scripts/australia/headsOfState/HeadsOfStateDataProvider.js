const headsOfStateCollection = [
    {
        name:"Scott Morrison",
        position:"Prime Minister"
    },
    {
        name:"Michael McCormack",
        position:"Deputy Prime Minister"
    },
    {
        name:"Elizabeth II",
        position:"Queen of Australia"
    },
]

export const useHeadsOfState = () => {
    return headsOfStateCollection.slice()
}