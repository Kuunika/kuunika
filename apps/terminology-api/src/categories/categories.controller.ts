
import { Controller, Get } from '@nestjs/common';
import { Category } from '@kuunika/terminology-interfaces'
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
    
    constructor(private readonly categoriesService: CategoriesService) {}

    @Get()
    AllCategories(): Promise<Category[]>{
        return this.categoriesService.getAllCategories();
    }

}
