
import { Test, TestingModule } from '@nestjs/testing';
import { ConceptsService } from './concepts.service';
import each from 'jest-each';
import {concept} from '../../concept';
import {testData} from './concepts.test.data';

describe('ConceptsService', () => {
  let service: ConceptsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConceptsService],
    }).compile();

    service = module.get<ConceptsService>(ConceptsService);
  });

  beforeAll((done) => {
    done();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  each(testData).test('should format concept returning object based on headings',(concept, headings,breadcrumb ,result) => {
      //Arrange
      
      //Act
      const conceptDescription = service.buildTermDescription(concept, breadcrumb,headings);
      //Assert
      expect(conceptDescription).toEqual(result);
  })
});
