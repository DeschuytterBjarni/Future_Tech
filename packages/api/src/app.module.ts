import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { ExercisesModule } from './exercises/exercises.module';
import { FinishedExercisesModule } from './finished-exercises/finished-exercises.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost:27032/infrastructures',
      entities: [__dirname + '/**/*.entity.{js,ts}'],
      synchronize: true, // Careful with this in production
      useNewUrlParser: true,
      useUnifiedTopology: true, // Disable deprecated warnings
    }),
    UsersModule,
    ExercisesModule,
    FinishedExercisesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
