import {cityList} from './cities/citiesList.js'
import {landmarksList} from './landmarks/landmarksList.js'
import {headsList} from './heads/headsList.js'
import {headerList} from "./headerList.js"

export const switzerlandPageBuilder = () => {
  headerList()
  cityList()
  landmarksList()
  headsList()
}