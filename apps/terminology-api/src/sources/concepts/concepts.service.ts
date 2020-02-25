import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Concept, ConceptFromOCL, CategoryFromOCL} from '@kuunika/terminology-interfaces'
import { OclService } from '../../ocl/ocl.service';
import { RedisSingleton } from "@kuunika/redis-connection";
require('dotenv').config();

@Injectable()
export class ConceptsService {
  
  constructor(private readonly oclService: OclService) {}

  async getConceptDescription(sourceId: string, conceptId: string) {
    let source;
    let concept;

    if(RedisSingleton.getInstance().connected) {
      source = await RedisSingleton.convertHgetToObject<CategoryFromOCL>('categories', sourceId);
      
      if(source === null){
        throw new HttpException({
          error: 404,
          errorMessage: 'Source not found',
        }, HttpStatus.NOT_FOUND);
      }
      concept = await RedisSingleton.convertHgetToObject<ConceptFromOCL>(source.extras.Route, conceptId);
      if(concept === null){
        throw new HttpException({
          error: 404,
          errorMessage: 'Concept not found',
        }, HttpStatus.NOT_FOUND);
      }
    } else {
      console.log('connection to redis failed now making request to OCL');
      source = await this.oclService.requestCategory(sourceId);
      concept = await this.oclService.requestConcept(source.extras.Route, conceptId);
      
    }

    return this.buildTermDescription(
      concept,
      source.extras.Category,
      source.extras.Details.split(',').map(category => category.trim()
      )
    );
  }

  buildTermDescription(sourceObject: ConceptFromOCL, breadcrumb: string, headings: string[]) {
    const termDescription: Concept = {
        id: sourceObject.id,
        breadcrumb,
        headings: [],
        descriptions: []
    };
    for (const heading of headings) {
      if (heading.toLowerCase().includes('name') || heading.toLowerCase().includes('term')) {

        termDescription.headings.push({
          title: heading,
          value: sourceObject.names.find(
            name => name.name_type === heading
          ).name,
        });

      }

      if (heading.toLowerCase().includes('description')) {
        termDescription.descriptions.push(
          {
            title: heading,
            value: sourceObject.descriptions.find(
              description => description.description_type === heading
            ).description
          }
        );
      }

      if (
        sourceObject.hasOwnProperty(heading) &&
        heading !== 'id' &&
        typeof sourceObject[heading] !== 'object'
      ) {
        termDescription.headings.push({
          title: heading,
          value: sourceObject[heading]
        });

      } else if (sourceObject.extras.hasOwnProperty(heading)) {
        termDescription.headings.push({
          title: heading,
          value: sourceObject.extras[heading]
        });
      } else {
        termDescription[heading] = sourceObject[heading];
      }
    }
    return termDescription;
  }
} 
