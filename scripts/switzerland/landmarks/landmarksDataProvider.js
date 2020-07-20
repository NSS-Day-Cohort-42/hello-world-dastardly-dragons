const landmarkCollection = [
  {
    landmark: "Jungfrau, Bernese Alps"
  },
  {
    landmark: "Lake Lucerne, Central Switzerland"
  },
  {
    landmark: "Chillon Castle, Veytaux"
  }
]

export const useLandmarks = () => {
  return landmarkCollection.slice()
}

export const addLandmark = (landmark) => {
  landmarkCollection.push(landmark)
}