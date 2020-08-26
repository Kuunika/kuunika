
import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import * as axios from 'axios';
import { CategoryFromOCL, ConceptFromOCL } from "@kuunika/terminology-interfaces";
require('dotenv').config();

@Injectable()
export class OclService {

    private createAxiosRequestConfigurations(){
        return {
            headers:{
                    Authorization: process.env.OCL_API_KEY,
                    'Content-Type': 'application/json'
                }
            }
    }

    async requestAllCategoriesFromOcl(): Promise<CategoryFromOCL[]>{
        const oclCategoriesUrl: string = process.env.OCL_API + process.env.OCL_CATEGORIES_API_URL + 'concepts?verbose=true&limit=0'
        try {

            const axiosRequest = await axios.default.get<CategoryFromOCL[]>(oclCategoriesUrl,this.createAxiosRequestConfigurations());
            return axiosRequest.data;

        } catch (error) {

            console.error(error.response.statusText);
            this.responseStatusFromOcl(error.response.status);

        }   
    }

    async requestCategoryFromOcl(categoryId: string): Promise<CategoryFromOCL>{
        try {

            const oclCategoriesUrl: string = process.env.OCL_API + process.env.OCL_CATEGORIES_API_URL + `concepts/${categoryId}?verbose=true`
            const axiosRequest = await axios.default.get<CategoryFromOCL>(oclCategoriesUrl,this.createAxiosRequestConfigurations());
            return axiosRequest.data;

        } catch (error) {

            console.error(error.response.statusText);
            this.responseStatusFromOcl(error.response.status);

        }
    }

    async requestAllConceptsFromCategory(sourceUrl: string, pageNumber=1){
        try {

            const oclConceptsUrl = process.env.OCL_API + sourceUrl + `concepts?limit=${10}&page=${pageNumber}&verbose=true`;
            const axiosRequest = await axios.default.get<ConceptFromOCL[]>(oclConceptsUrl,this.createAxiosRequestConfigurations());
            
            const oclConceptsPayload = {
                data: axiosRequest.data,
                currentPage: pageNumber,
                totalNumberOfConcepts: +axiosRequest.headers.num_found,
                totalNumberOfPages: Math.ceil(axiosRequest.headers.num_found / 10),
            }

            return oclConceptsPayload;

        } catch (error) {

            console.error(error.response.statusText);
            this.responseStatusFromOcl(error.response.status);

        }
        
    }

    async requestConceptFromOcl(sourceUrl: string, conceptId: string): Promise<ConceptFromOCL> {
        try {
            const oclConceptsUrl = process.env.OCL_API + sourceUrl + `concepts/${conceptId}` + '?verbose=true';
            const axiosRequest = await axios.default.get<ConceptFromOCL>(oclConceptsUrl,this.createAxiosRequestConfigurations());
            return axiosRequest.data;
        } catch (error) {
            console.error(error.response.statusText);
            this.responseStatusFromOcl(error.response.status);
        }
       
    }

    private responseStatusFromOcl(axiosRequest: number){
        if(axiosRequest === 404){
            throw new HttpException({
                error: 404,
                message: 'Source/Concept Not Found',
            }, HttpStatus.NOT_FOUND)
        }else if(axiosRequest !== 200){
            throw new HttpException({
                error: 500,
                message: 'Internal Server Error, Please Try Again Later'
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
