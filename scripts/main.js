import {AustraliaPageBuilder} from "./australia/australia.js"
import {switzerlandPageBuilder} from './switzerland/switzerland.js'
import { swedenPageBuilder } from './sweden/sweden.js'
import {canadaPageBuilder} from "./canada/canada.js"
import { newZealandPageBuilder } from "./newZealand/newZealand.js"

newZealandPageBuilder()

switzerland.addEventListener("click", switzerlandPageBuilder)
sweden.addEventListener("click", swedenPageBuilder)
australia.addEventListener("click", AustraliaPageBuilder)
canada.addEventListener("click", canadaPageBuilder)
newZealand.addEventListener("click", newZealandPageBuilder)
