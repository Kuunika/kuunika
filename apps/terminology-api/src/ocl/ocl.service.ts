
import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import * as axios from 'axios';
import { CategoryFromOCL, ConceptFromOCL } from "@kuunika/terminology-interfaces";
require('dotenv').config();

@Injectable()
export class OclService {

    private buildRequestHeaderForOCL(){
        return {
            headers:{
                    Authorization: process.env.OCL_API_KEY,
                    'Content-Type': 'application/json'
                }
            }
    }

    async requestAllCategories(): Promise<CategoryFromOCL[]>{
        const oclCategoriesUrl: string = process.env.OCL_API + process.env.OCL_CATEGORIES_API_URL + 'concepts?verbose=true&limit=0'
        try {
            const axiosRequest = await axios.default.get<CategoryFromOCL[]>(oclCategoriesUrl,this.buildRequestHeaderForOCL());
            return axiosRequest.data;
        } catch (error) {
            console.error(error.response.statusText);
            this.responseStatus(error.response.status);
        }   
    }

    async requestCategory(categoryId: string): Promise<CategoryFromOCL>{
        try {
            const oclCategoriesUrl: string = process.env.OCL_API + process.env.OCL_CATEGORIES_API_URL + `concepts/${categoryId}?verbose=true&limit=0`
            const axiosRequest = await axios.default.get<CategoryFromOCL>(oclCategoriesUrl,this.buildRequestHeaderForOCL());
            return axiosRequest.data;
        } catch (error) {
            console.error(error.response.statusText);
            this.responseStatus(error.response.status);
        }
    }

    async requestAllConceptsFromCategory(sourceUrl: string): Promise<ConceptFromOCL[]>{
        try {
            const oclConceptsUrl = process.env.OCL_API + sourceUrl + `concepts?verbose=true&limit=0`;
            const axiosRequest = await axios.default.get<ConceptFromOCL[]>(oclConceptsUrl,this.buildRequestHeaderForOCL());
            return axiosRequest.data;
        } catch (error) {
            console.error(error.response.statusText);
            this.responseStatus(error.response.status);
        }
        
    }

    async requestConcept(sourceUrl: string, conceptId: string): Promise<ConceptFromOCL> {
        try {
            const oclConceptsUrl = process.env.OCL_API + sourceUrl + `concepts/${conceptId}` + '?verbose=true&limit=0';
            const axiosRequest = await axios.default.get<ConceptFromOCL>(oclConceptsUrl,this.buildRequestHeaderForOCL());
            return axiosRequest.data;
        } catch (error) {
            console.error(error.response.statusText);
            this.responseStatus(error.response.status);
        }
       
    }

    private responseStatus(axiosRequest: number){
        
        if(axiosRequest === 404){
            throw new HttpException({
                error: 404,
                message: 'Source/Concept Not Found',
            },HttpStatus.NOT_FOUND)
        }else if(axiosRequest !== 200){
            throw new HttpException({
                error: 500,
                message: 'Internal Server Error'
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
