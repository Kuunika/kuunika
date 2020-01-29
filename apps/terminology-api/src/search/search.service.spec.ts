
import { Test, TestingModule } from '@nestjs/testing';
import { SearchService } from './search.service';
import { icd10Concepts } from '../test-data/concepts.test.data';
import each from 'jest-each';
import { OclService } from '../ocl/ocl.service';
import { CategoryFromOCL } from '../ocl-interfaces/all-categories.interface';
import { ConceptFromOCL } from '../ocl-interfaces/concept-from-ocl.interface';
import { SearchResult, Search } from '@kuunika/terminology-interfaces';
import { searchTestData1 } from '../test-data/search.test.data';

describe('SearchService', () => {
  let service: SearchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SearchService, OclService],
    }).compile();

    service = module.get<SearchService>(SearchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return categories and number of results from the searched term', () => {
    //Arrange
    
    //Act
    //const searchResult = service.buildSearchResult(icd10Concepts,'DERW32','Clinical/Terms/ICD10','flaccid paralysis',["id","ICD 10 Name","Vernacular Name","ICD10 Code", "ICD 10 Description"])
    //Assert
    //console.log(searchResult);
    expect(true).toBe(true);
  });

  each([searchTestData1]).it('should create a search object from term',(searchTerm: string,categories: CategoryFromOCL[], concepts: ConceptFromOCL[][], expected: Search)=>{
    //arrange 
    const searchResults: SearchResult[] = [];

    let count = 0;
    //act
    for (const category of categories) {
      const conceptsFromCategory: ConceptFromOCL[] = concepts[count++];
      searchResults.push(service.buildSearchResult(conceptsFromCategory, category, searchTerm));
    }
    //assert
    expect({searchTerm, searchResults}).toEqual(expected)
  })
});
