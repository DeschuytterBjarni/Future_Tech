import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FinishedExercisesService } from './finished-exercises.service';
import { CreateFinishedExerciseDto } from './dto/create-finished-exercise.dto';
import { UpdateFinishedExerciseDto } from './dto/update-finished-exercise.dto';
import { ExercisesService } from 'src/exercises/exercises.service';
import { UsersService } from 'src/users/users.service';

@Controller('finished-exercises')
export class FinishedExercisesController {

  constructor(private readonly finishedExercisesService: FinishedExercisesService) {}

  @Post()
  create(@Body() createFinishedExerciseDto: CreateFinishedExerciseDto) {
    return this.finishedExercisesService.create(createFinishedExerciseDto);
  }

  @Get()
  findAll() {
    return this.finishedExercisesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.finishedExercisesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFinishedExerciseDto: UpdateFinishedExerciseDto) {
    return this.finishedExercisesService.update(+id, updateFinishedExerciseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.finishedExercisesService.remove(id);
  }
}
