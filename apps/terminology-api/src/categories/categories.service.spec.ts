import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesService } from './categories.service';
import each from 'jest-each';
import { categoriesTestData } from '../test-data/categories.data';
import { CategoryFromOCL } from '../ocl-interfaces/all-categories.interface';

describe('CategoriesService', () => {
  let service: CategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriesService]
    }).compile();

    service = module.get<CategoriesService>(CategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Build a categories from list of category objects', () => {
    const categoriesTree = service.buildCategoriesTreeFromBreadcrumb(
      categoriesTestData
    );
    expect(categoriesTree).toEqual([
      {
        categoryTitle: 'Clinical',
        id: null,
        categories: [
          {
            categoryTitle: 'Terms',
            id: null,
            categories: [
              { categoryTitle: 'ICD10', id: 'DB59CC', categories: null },
              { categoryTitle: 'ICD9', id: 'KB59RR', categories: null }
            ]
          }
        ]
      },
      {
        categoryTitle: 'Pharmaceutical',
        id: null,
        categories: [
          {
            categoryTitle: 'Terms',
            id: null,
            categories: [
              { categoryTitle: 'ICD10', id: 'RE9802PP', categories: null }
            ]
          }
        ]
      }
    ]);
  });
});
