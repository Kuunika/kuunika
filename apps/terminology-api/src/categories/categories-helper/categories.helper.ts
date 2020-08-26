
/**
 * Takes string description data and parses it into an array of objects
 *  the objects key is the Category Name and the value is the description
 * @param categoriesDescriptionFromOcl 
 */
export function createCategoriesDescriptionsArray(categoriesDescriptionFromOcl: string){
    console.log(categoriesDescriptionFromOcl);
    // Begins by separating the description string into array segments based the position of the ';' character
    return categoriesDescriptionFromOcl.split(';').map(oclCategoryDescription => {
        // Mapping through each element of the array to further subdivide the array based on the ':' character
        const arrayCategoryDescriptionFromString = oclCategoryDescription.split(':');
        const categoryDescriptionObject = {};
        
        categoryDescriptionObject[arrayCategoryDescriptionFromString[0].trim()] = arrayCategoryDescriptionFromString[1].trim();
        return categoryDescriptionObject;
    });
}

