import { Controller, Get, Param, Query } from '@nestjs/common';
import { SourcesService } from './sources.service';
import { ConceptsService } from './concepts/concepts.service';

@Controller('sources')
export class SourcesController {

    constructor(private readonly sourcesService: SourcesService, private readonly conceptsService: ConceptsService) {}

    @Get('/:sourceId')
    getSource(@Param('sourceId') sourceId: string, @Query('filterTerm') filterTerm = '') {
        return this.sourcesService.getSource(sourceId);
    }

    @Get('/:sourceId/:conceptId')
    getConcept(@Param('sourceId') sourceId: string, @Param('conceptId') conceptId: string) {
        return this.conceptsService.getConceptDescription(sourceId,conceptId);
    }
}
