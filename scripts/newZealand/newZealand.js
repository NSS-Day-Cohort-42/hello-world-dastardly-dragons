//pagebuilder function will go here and encompass the below...
import { headsList } from "./heads/headsList.js";
import { landmarksList } from "./landmarks/landmarksList.js";
import { citiesList } from "./cities/citiesList.js";
import { headersList } from "./header/headersList.js";

export const newZealandPageBuilder = () => {
     headersList()
    citiesList()
    landmarksList()
    headsList()
}
