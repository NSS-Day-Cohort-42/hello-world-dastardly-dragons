import {cityList} from './cities/citiesList.js'
import { landmarkList } from './landmarks/landmarksList.js'
import { headList } from './headsOfState/headList.js'
import {headerList} from './headerList.js'


export const swedenPageBuilder = () => {
    headerList()
    cityList()
    landmarkList()
    headList()
}