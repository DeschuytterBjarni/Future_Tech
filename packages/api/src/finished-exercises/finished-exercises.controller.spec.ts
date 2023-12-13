import { Test, TestingModule } from '@nestjs/testing';
import { FinishedExercisesController } from './finished-exercises.controller';
import { FinishedExercisesService } from './finished-exercises.service';

describe('FinishedExercisesController', () => {
  let controller: FinishedExercisesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FinishedExercisesController],
      providers: [FinishedExercisesService],
    }).compile();

    controller = module.get<FinishedExercisesController>(FinishedExercisesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
