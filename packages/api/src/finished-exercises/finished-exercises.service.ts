import { Injectable } from '@nestjs/common';
import { CreateFinishedExerciseDto } from './dto/create-finished-exercise.dto';
import { UpdateFinishedExerciseDto } from './dto/update-finished-exercise.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Exercise } from 'src/exercises/entities/exercise.entity';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';
import { ExercisesService } from 'src/exercises/exercises.service';
import { ObjectId } from 'mongodb';
import { FinishedExercise } from './entities/finished-exercise.entity';

@Injectable()
export class FinishedExercisesService {

  constructor(
    @InjectRepository(FinishedExercise)
    private readonly finishedExercisesRepository: Repository<FinishedExercise>,
    private readonly usersService: UsersService,
    private readonly exercisesService: ExercisesService
  ) {}

  async create(createFinishedExerciseDto: CreateFinishedExerciseDto) {
    const exercise = await this.exercisesService.findOne(createFinishedExerciseDto.exerciseId);
    const user = await this.usersService.findOne(createFinishedExerciseDto.userId);
    if (!exercise || !user) {
      return "Exercise or user not found"
    }

    const newFinishedExercise = new FinishedExercise();
    newFinishedExercise.userId = user.id;
    newFinishedExercise.exerciseId = exercise.id;
    newFinishedExercise.repetitions = createFinishedExerciseDto.repetitions;
    newFinishedExercise.sets = createFinishedExerciseDto.sets;
    newFinishedExercise.duration = createFinishedExerciseDto.duration;
    newFinishedExercise.angles = createFinishedExerciseDto.angles;
    newFinishedExercise.averageAngle = 0;
    newFinishedExercise.maxAngle = 0;
    newFinishedExercise.minAngle = 0;

    // Calculate min, max, and average angles
    if (createFinishedExerciseDto.angles && createFinishedExerciseDto.angles.length > 0) {
      newFinishedExercise.minAngle = Math.min(...createFinishedExerciseDto.angles);
      newFinishedExercise.maxAngle = Math.max(...createFinishedExerciseDto.angles);
      const sumAngles = createFinishedExerciseDto.angles.reduce((acc, angle) => acc + angle, 0);
      newFinishedExercise.averageAngle = sumAngles / createFinishedExerciseDto.angles.length;
    }
    
    return this.finishedExercisesRepository.save(newFinishedExercise);
  }

  findAll() {
    return this.finishedExercisesRepository.find();
  }

  findAllByUserId(userId: string) {
    return this.finishedExercisesRepository.find({ where: { userId: new ObjectId(userId) }});
  }

  findOne(id: string) {
    //@ts-ignore
    return this.finishedExercisesRepository.findOne(new ObjectId(id));
  }

  update(id: number, updateFinishedExerciseDto: UpdateFinishedExerciseDto) {
    return `This action updates a #${id} finishedExercise`;
  }

  remove(id: string) {
    return this.finishedExercisesRepository.delete(new ObjectId(id));
  }
}
