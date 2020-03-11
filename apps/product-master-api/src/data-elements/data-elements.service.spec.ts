import { Test, TestingModule } from '@nestjs/testing';
import { DataElementsService } from './data-elements.service';

describe('DataElementsService', () => {
  let service: DataElementsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataElementsService],
    }).compile();

    service = module.get<DataElementsService>(DataElementsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
