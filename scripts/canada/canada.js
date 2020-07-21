import{headerToDOM} from "./header/HeaderToDOM.js"
headerToDOM()

import{addCitiesToDOM} from "./cities/CityList.js"
addCitiesToDOM()

import{addLandmarksToDOM} from "./landmarks/LandmarkList.js"
addLandmarksToDOM()

import{addHeadsToDOM} from "./headsOfState/HeadsList.js"
addHeadsToDOM()

export const canadaPageBuilder = () => {
    headerToDOM()
    addCitiesToDOM()
    addLandmarksToDOM()
    addHeadsToDOM()
}