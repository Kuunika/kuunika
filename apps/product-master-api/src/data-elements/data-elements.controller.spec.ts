import { Test, TestingModule } from '@nestjs/testing';
import { DataElementsController } from './data-elements.controller';

describe('DataElements Controller', () => {
  let controller: DataElementsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DataElementsController],
    }).compile();

    controller = module.get<DataElementsController>(DataElementsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
