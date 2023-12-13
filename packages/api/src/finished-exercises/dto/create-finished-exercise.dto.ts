import { IsString, IsNumber, IsMongoId, Min, Max } from 'class-validator';

export class CreateFinishedExerciseDto {
  @IsMongoId()
  userId: string;

  @IsMongoId()
  exerciseId: string;

  @IsNumber()
  @Min(0)
  repetitions: number;

  @IsNumber()
  @Min(0)
  sets: number;

  @IsNumber()
  @Min(0)
  duration: number;

  angles: number[];

}
