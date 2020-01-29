import { Test, TestingModule } from '@nestjs/testing';
import { OclService } from './ocl.service';

describe('OclService', () => {
  let service: OclService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OclService],
    }).compile();

    service = module.get<OclService>(OclService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
