import { Module } from '@nestjs/common';
import { SourcesController } from './sources.controller';
import { SourcesService } from './sources.service';
import { ConceptsService } from './concepts/concepts.service';

@Module({
  controllers: [SourcesController],
  providers: [SourcesService, ConceptsService]
})
export class SourcesModule {}
