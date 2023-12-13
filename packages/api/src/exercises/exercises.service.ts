import { Injectable } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Exercise } from './entities/exercise.entity';
import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';

@Injectable()
export class ExercisesService {

  constructor(
    @InjectRepository(Exercise)
    private readonly exercisesRepository: Repository<Exercise>
  ) {}

  async create(createExerciseDto: CreateExerciseDto) {
    const newExercise = this.exercisesRepository.create({
      ...createExerciseDto,
    });

    await this.exercisesRepository.save(newExercise);

    return newExercise;
  }

  findAll() {
    return this.exercisesRepository.find();
  }

  findOne(id: string) {
    //@ts-ignore
    return this.exercisesRepository.findOne(new ObjectId(id));
  }

  update(id: number, updateExerciseDto: UpdateExerciseDto) {
    return `This action updates a #${id} exercise`;
  }

  remove(id: string) {
    return this.exercisesRepository.delete(new ObjectId(id));
  }
}
