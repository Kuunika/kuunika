
import { RedisSingleton } from '@kuunika/redis-connection';
import * as axios from 'axios';
require('dotenv').config();

const productMasterDhis2Url = process.env.OCL_CATEGORIES_API_URL + process.env.OCL_PRODUCT_MASTER_DHIS2     || '';
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
        const axiosRequest = await axios.default.get(productMasterDhis2Url, buildRequestHeaderForOCL());
        return axiosRequest.data;
    } catch (error) {
        console.error(error.response.statusText);
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

async function main(){
    console.log('Connection to Redis Successful');
    console.log('Now Clearing Cache');
    RedisSingleton.flushAll();
    console.log('Now Building Cache');
    
}