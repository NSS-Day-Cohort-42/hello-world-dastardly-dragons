const landmarks = [
    {
       name:"The Turning Torso",
       location: "Malmö" 
    },
    {
        name:"Svettekörka",
        location: "Gothenburg"
    },
    {
        name:"Stockholm Cathedral",
        location:"Stockholm"
    }
]

export const useLandmarks = () => {
    return landmarks.slice()
}