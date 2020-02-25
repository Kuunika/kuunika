
import { Controller, Get, Param } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
    constructor(private readonly searchService: SearchService) {}

    @Get(':searchTerm')
    search(@Param('searchTerm') searchTerm: string){
        return this.searchService.searchAll(searchTerm);
    }
}
