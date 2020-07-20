import {cityList} from './cities/citiesList.js'
import {landmarksList} from './landmarks/landmarksList.js'

const pageBuilder = () => {
  cityList()
  landmarksList()
}

pageBuilder()