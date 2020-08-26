import { Injectable } from '@nestjs/common';
import { Concept, ConceptFromOCL, CategoryFromOCL} from '@kuunika/terminology-interfaces'
import { OclService } from '../../ocl/ocl.service';
require('dotenv').config();

@Injectable()
export class ConceptsService {
  
  constructor(private readonly oclService: OclService) {}

  async getConceptDescription(sourceId: string, conceptId: string) {

    const source = await this.oclService.requestCategoryFromOcl(sourceId);
    const concept = await this.oclService.requestConceptFromOcl(source.extras.Route, conceptId);

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
