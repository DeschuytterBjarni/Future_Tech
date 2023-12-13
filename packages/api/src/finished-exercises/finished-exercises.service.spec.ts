import { Test, TestingModule } from '@nestjs/testing';
import { FinishedExercisesService } from './finished-exercises.service';

describe('FinishedExercisesService', () => {
  let service: FinishedExercisesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FinishedExercisesService],
    }).compile();

    service = module.get<FinishedExercisesService>(FinishedExercisesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
