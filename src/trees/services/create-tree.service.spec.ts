import { Test, TestingModule } from '@nestjs/testing';
import { CreateTreeService } from './create-tree.service';

describe('CreateTreeService', () => {
  let service: CreateTreeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateTreeService],
    }).compile();

    service = module.get<CreateTreeService>(CreateTreeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
