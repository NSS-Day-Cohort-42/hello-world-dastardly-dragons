import {CityToDOM} from "./Cities/CityList.js"
import { LandmarksToDOM } from "./Landmarks/LandmarkList.js"
import { HeadsOfStateToDOM } from "./headsOfState/HeadsOfStateList.js"
import {AustraliaHeaderToDOM} from "./headerToHTML/australiaheader.js"


export const AustraliaPageBuilder = () => {
    AustraliaHeaderToDOM()
    CityToDOM()
    LandmarksToDOM()
    HeadsOfStateToDOM()
}

