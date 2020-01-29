
import { Injectable, HttpCode, HttpStatus, HttpException } from '@nestjs/common';
import * as axios from 'axios';
import { CategoryFromOCL } from '../ocl-interfaces/all-categories.interface';
import { ConceptFromOCL } from '../ocl-interfaces/concept-from-ocl.interface';
import { HttpAdapterHost } from '@nestjs/core';
require('dotenv').config();

@Injectable()
export class OclService {

    buildRequestHeaderForOCL(){
        return {
            headers:{
                    Authorization: process.env.OCL_API_KEY,
                    'Content-Type': 'application/json'
                }
            }
    }

    async requestAllCategories(): Promise<CategoryFromOCL[]>{
        const oclCategoriesUrl: string = process.env.OCL_API + process.env.OCL_CATEGORIES_API_URL + 'concepts?verbose=true&limit=0'
        const axiosRequest = await axios.default.get<CategoryFromOCL[]>(oclCategoriesUrl,this.buildRequestHeaderForOCL());
        this.responseStatus(axiosRequest);
        return axiosRequest.data;
    }

    async requestAllConceptsFromCategory(sourceUrl: string): Promise<ConceptFromOCL[]>{
        const oclConceptsUrl = process.env.OCL_API + sourceUrl + `concepts?verbose=true&limit=0`;
        const axiosRequest = await axios.default.get<ConceptFromOCL[]>(oclConceptsUrl,this.buildRequestHeaderForOCL());
        this.responseStatus(axiosRequest)
        return axiosRequest.data;
    }

    async requestConcept(sourceUrl: string, conceptId: string): Promise<ConceptFromOCL> {
        const oclConceptsUrl = process.env.OCL_API + sourceUrl + `concepts/${conceptId}` + '?verbose=true&limit=0';
        const axiosRequest = await axios.default.get<ConceptFromOCL>(oclConceptsUrl,this.buildRequestHeaderForOCL());
        this.responseStatus(axiosRequest)
        return axiosRequest.data;
    }

    responseStatus(axiosRequest: axios.AxiosResponse){
        if(axiosRequest.status === 404){
            throw new HttpException({
                error: 404,
                message: 'Source/Concept Not Found',
            },HttpStatus.NOT_FOUND)
        }else if(axiosRequest.status !== 200){
            console.error(axiosRequest.statusText);
            throw new HttpException({
                error: 500,
                message: 'Internal Server Error'
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
