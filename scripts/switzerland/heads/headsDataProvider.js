const headsCollection = [
  {
    name: "Simonetta Sommaruga, President"
  },
  {
    name: "Ueli Maurer, Federal Department of Finance"
  },
  {
    name: "Guy Parmelin, Vice President"
  }
]

export const useHeads = () => {
  return headsCollection.slice()
}

export const addHead = (head) => {
  headsCollection.push(head)
}