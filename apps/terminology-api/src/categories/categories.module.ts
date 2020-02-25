import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { OclService } from '../ocl/ocl.service';
import { CategoriesController } from './categories.controller';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService,OclService]
})
export class CategoriesModule {}
