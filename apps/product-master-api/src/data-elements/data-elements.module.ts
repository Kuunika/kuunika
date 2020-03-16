import { Module } from '@nestjs/common';
import { DataElementsService } from './data-elements.service';
import { DataElementsController } from './data-elements.controller';

@Module({
  providers: [DataElementsService],
  controllers: [DataElementsController]
})
export class DataElementsModule {}
