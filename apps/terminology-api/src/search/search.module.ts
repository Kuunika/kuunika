import { Module } from '@nestjs/common';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';
import { OclService } from '../ocl/ocl.service';

@Module({
  controllers: [SearchController],
  providers: [SearchService, OclService]
})
export class SearchModule {}
