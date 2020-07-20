const cityCollection = [
  {
    name: "Zurich",
    pop: 380,000
  },
  {
    name: "Geneva",
    pop: 200,000
  },
  {
    name: "Basel",
    pop: 170,000
  }
]

export const useCities = () => {
  return cityCollection.slice()
}

export const addCity = (city) => {
  cityCollection.push(city)
}