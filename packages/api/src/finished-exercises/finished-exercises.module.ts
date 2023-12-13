import { Module } from '@nestjs/common';
import { FinishedExercisesService } from './finished-exercises.service';
import { FinishedExercisesController } from './finished-exercises.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exercise } from 'src/exercises/entities/exercise.entity';
import { UsersModule } from 'src/users/users.module';
import { ExercisesModule } from 'src/exercises/exercises.module';
import { FinishedExercise } from './entities/finished-exercise.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([FinishedExercise]),
    UsersModule,
    ExercisesModule
  ],
  controllers: [FinishedExercisesController],
  providers: [FinishedExercisesService],
  exports: [FinishedExercisesService]
})
export class FinishedExercisesModule {}
