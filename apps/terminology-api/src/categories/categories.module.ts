import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { OclService } from '../ocl/ocl.service';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService,OclService]
})
export class CategoriesModule {}
