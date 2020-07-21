import {cityList} from './cities/citiesList.js'
import {landmarksList} from './landmarks/landmarksList.js'
import {headsList} from './heads/headsList.js'
import {headerList} from "./headerList.js"

const pageBuilder = () => {
  headerList()
  cityList()
  landmarksList()
  headsList()
}

pageBuilder()