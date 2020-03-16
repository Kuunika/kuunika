
import { RedisSingleton } from '@kuunika/redis-connection';
import * as axios from 'axios';
import { DhisProductMasterOclConcept } from './interfaces/dhis2-product-master.interface';
import { DataElement } from '@kuunika/product-master-interfaces';
require('dotenv').config();

const productMasterDhis2Url = process.env.OCL_API + process.env.OCL_PRODUCT_MASTER_SOURCE + process.env.OCL_PRODUCT_MASTER_DHIS2     || '';
const productMasterDHAMIS   = process.env.OCL_CATEGORIES_API_URL + process.env.OCL_PRODUCT_MASTER_DHAMIS    || '';
const productMasterOPENLMIS = process.env.OCL_CATEGORIES_API_URL + process.env.OCL_PRODUCT_MASTER_OPENLMIS  || '';

function buildRequestHeaderForOCL(){
    return {
        headers:{
                Authorization: process.env.OCL_API_KEY,
                'Content-Type': 'application/json'
            }
        }
}

async function requestDhis2DataFromOcl() {
    try {
        const axiosRequest = await axios.default.get<DhisProductMasterOclConcept[]>(productMasterDhis2Url, buildRequestHeaderForOCL());
        return axiosRequest.data;
    } catch (error) {
        console.error(error);
    }  
}

async function requestDHMISDataFromOcl() {
    try {
        const axiosRequest = await axios.default.get(productMasterDHAMIS, buildRequestHeaderForOCL());
        return axiosRequest.data;
    } catch (error) {
        console.error(error.response.statusText);
    }  
}


async function requestOPENLMISDataFromOcl() {
    try {
        const axiosRequest = await axios.default.get(productMasterOPENLMIS, buildRequestHeaderForOCL());
        return axiosRequest.data;
    } catch (error) {
        console.error(error.response.statusText);
    }  
}

async function cacheDhis2ProductMaster(){
    const dhis2ProductMasterConcepts = await requestDhis2DataFromOcl();
    const dataElements = createDhisDataElements(dhis2ProductMasterConcepts);
    dataElements.forEach(dataElement => {
        if(dataElement) RedisSingleton.hsetStoreApiResult('dhis2DataElement', dataElement.productCode, dataElement);
    });
}

function createDhisDataElements(dhis2ProductMasterConcepts: DhisProductMasterOclConcept[]): DataElement[] {
    return dhis2ProductMasterConcepts.map(dhis2Concept => {
        if (dhis2Concept.mappings === null || dhis2Concept.mappings.length === 0) {
            return;
        }

        const urlSegmented = dhis2Concept.mappings[0].to_concept_url.split('/');
        
        const productCode = urlSegmented[urlSegmented.length - 2] || '';
        if(!productCode) return;
        const system = urlSegmented[urlSegmented.length - 4];
        
        return {
            dataElementCode: dhis2Concept.id,
            productName: dhis2Concept.display_name,
            productCode,
            system,
        };
    });
}

async function main(){
    RedisSingleton.getInstance(parseInt(process.env.REDIS_PORT),process.env.REDIS_HOST);
    console.log('Connection to Redis Successful');
    console.log('Now Clearing Cache');
    RedisSingleton.flushAll();
    console.log('Now Building Cache');
    await cacheDhis2ProductMaster();
    console.log('Cache Built Successfully');
}

main();