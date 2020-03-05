import { Controller, Get, Param, Query } from '@nestjs/common';
import { SourcesService } from './sources.service';
import { ConceptsService } from './concepts/concepts.service';

@Controller('sources')
export class SourcesController {
    
    constructor(private readonly sourceService: SourcesService, private readonly conceptService: ConceptsService) {}
    
    @Get(':sourceId')
    getSource(@Param('sourceId') sourceId: string, @Query('filterTerm') term = ''){
        return this.sourceService.getSource(sourceId.toUpperCase(), term);
    }

    @Get(':sourceId/:conceptId')
    getSourceConcepts(@Param('sourceId') sourceId: string, @Param('conceptId') conceptId: string){
        return this.conceptService.getConceptDescription(sourceId.toUpperCase(),conceptId);
    }
}
