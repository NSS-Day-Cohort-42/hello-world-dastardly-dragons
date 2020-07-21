import{headerToDOM} from "./header/HeaderToDOM.js"
import{addCitiesToDOM} from "./cities/CityList.js"
import{addLandmarksToDOM} from "./landmarks/LandmarkList.js"
import{addHeadsToDOM} from "./headsOfState/HeadsList.js"


export const canadaPageBuilder = () => {
    headerToDOM()
    addCitiesToDOM()
    addLandmarksToDOM()
    addHeadsToDOM()
}