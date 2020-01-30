import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as axios from 'axios';
import { Category } from '@kuunika/terminology-interfaces';
import { CategoryFromOCL } from '../ocl-interfaces/all-categories.interface';
require('dotenv').config();

@Injectable()
export class CategoriesService {
  

  async getAllCategories(): Promise<Category[]> {
    const oclCategoriesUrl =
      process.env.OCL_API +
      process.env.OCL_CATEGORIES_API_URL +
      'concepts?verbose=true&limit=0';


    const axiosRequestForCategories = await this.requestCategoriesFromOcl(
      oclCategoriesUrl
    );

    if (axiosRequestForCategories.status === 200) {
      return this.buildCategoriesTreeFromBreadcrumb(
        axiosRequestForCategories.data
      );
    }
    else{
      console.log(oclCategoriesUrl);
      console.error(axiosRequestForCategories.status);
      console.error(axiosRequestForCategories.statusText);
      throw new HttpException("Internal Server Error", HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  private async requestCategoriesFromOcl(oclCategoriesUrl: string) {
    return await axios.default.get<CategoryFromOCL[]>(oclCategoriesUrl, {
      headers: {
        Authorization: process.env.OCL_API_KEY,
        'Content-Type': 'application/json'
      }
    });
  }

  buildCategoriesTreeFromBreadcrumb(
    conceptsFromOcl: CategoryFromOCL[]
  ): Category[] {
    const categories: Category[] = [];
    const breadcrumbs = this.buildBreadcrumbObject(conceptsFromOcl);

    breadcrumbs.forEach(breadcrumb =>
      this.buildCategoriesTree(
        categories,
        breadcrumb.breadcrumb.split('/'),
        breadcrumb.id
      )
    );

    return categories;
  }

  buildBreadcrumbObject(conceptsFromOcl: CategoryFromOCL[]) {
    console.log(typeof(conceptsFromOcl));
    
    return conceptsFromOcl.map(concept => {
      return {
        breadcrumb: concept.extras.Category,
        id: concept.id
      };
    });
  }

  buildCategoriesTree(
    categories: Category[],
    breadcrumbArray: string[],
    id: string
  ) {
    if (breadcrumbArray.length === 0) {
      return categories;
    }

    const currentBreadcrumbPath = breadcrumbArray.shift();

    const existingElementIndex = categories.findIndex(
      category => category.categoryTitle === currentBreadcrumbPath
    );

    if (existingElementIndex === -1) {
      categories.push({
        categoryTitle: currentBreadcrumbPath,
        id: breadcrumbArray.length === 0 ? id : null,
        categories: breadcrumbArray.length === 0 ? null : [],
      });

      this.buildCategoriesTree(
        categories[categories.length - 1].categories,
        breadcrumbArray,
        id
      );
    } else {
      this.buildCategoriesTree(
        categories[existingElementIndex].categories,
        breadcrumbArray,
        id
      );
    }
  }
}
