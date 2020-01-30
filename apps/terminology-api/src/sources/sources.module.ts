import { Module } from '@nestjs/common';
import { SourcesController } from './sources.controller';
import { SourcesService } from './sources.service';
import { ConceptsService } from './concepts/concepts.service';
import { OclService } from '../ocl/ocl.service';
import { SearchService } from '../search/search.service';

@Module({
  controllers: [SourcesController],
  providers: [SourcesService, ConceptsService,OclService,SearchService]
})
export class SourcesModule {}
