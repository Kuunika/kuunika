import { RedisSingleton } from '@kuunika/redis-connection';
import * as axios from 'axios';
import { CategoryFromOCL, ConceptFromOCL } from "@kuunika/terminology-interfaces";
require('dotenv').config();

function buildRequestHeaderForOCL(){
    return {
        headers:{
                Authorization: process.env.OCL_API_KEY,
                'Content-Type': 'application/json'
            }
        }
}

async function requestAllCategories(){
    const oclCategoriesUrl: string = process.env.OCL_API + process.env.OCL_CATEGORIES_API_URL + 'concepts?verbose=true&limit=0'
    try {
        const axiosRequest = await axios.default.get<CategoryFromOCL[]>(oclCategoriesUrl, buildRequestHeaderForOCL());
        return axiosRequest.data;
    } catch (error) {
        console.error(error.response.statusText);
        //this.responseStatus(error.response.status);
    }   
}

async function requestAllConceptsFromCategory(sourceUrl: string){
    try {
        const oclConceptsUrl = process.env.OCL_API + sourceUrl + `concepts?verbose=true&limit=0`;
        const axiosRequest = await axios.default.get<ConceptFromOCL[]>(oclConceptsUrl, buildRequestHeaderForOCL());
        return axiosRequest.data;
    } catch (error) {
        console.error(error);
        //this.responseStatus(error.response.status);
    } 
}


async function cacheCategories(){
    const categoriesFromOCL = await requestAllCategories();
    categoriesFromOCL.forEach(category => RedisSingleton.hsetStoreApiResult('categories',category.id,category));
}

async function cacheConceptsFromCategories(){

    const categories = await RedisSingleton.convertHvalsToArrayOfObjects('categories');

    for (const category of categories) {
        const conceptsRoute = category['extras']['Route'];
        const concepts = await requestAllConceptsFromCategory(conceptsRoute);
        concepts.forEach(concept => {
            RedisSingleton.hsetStoreApiResult(conceptsRoute,concept.id, concept);
        });
    }
}

async function main(){
    console.log('Connection to redis successful');
    console.log('Now clearing cache');
    RedisSingleton.flushAll();
    console.log('Now building cache');
    await cacheCategories();
    await cacheConceptsFromCategories();
    console.log('Terminology service cache successfully created.');
}

main();