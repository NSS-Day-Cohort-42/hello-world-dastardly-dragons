import {AustraliaPageBuilder} from "./australia/australia.js"
import {switzerlandPageBuilder} from './switzerland/switzerland.js'
import { swedenPageBuilder } from './sweden/sweden.js'

switzerland.addEventListener("click", switzerlandPageBuilder)
sweden.addEventListener("click", swedenPageBuilder)
australia.addEventListener("click", AustraliaPageBuilder)
