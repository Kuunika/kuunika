
import { Controller, Get } from '@nestjs/common';
import { DataElementsService } from './data-elements.service';

@Controller('data-elements')
export class DataElementsController {
    
    constructor(private readonly dataElementsService: DataElementsService) {}

    @Get()
    getAllDataElements(){
        return this.dataElementsService.getAllDataElements();
    }
}
