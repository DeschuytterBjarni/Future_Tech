import { PartialType } from '@nestjs/mapped-types';
import { CreateFinishedExerciseDto } from './create-finished-exercise.dto';

export class UpdateFinishedExerciseDto extends PartialType(CreateFinishedExerciseDto) {}
