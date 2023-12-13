import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { ObjectId } from 'mongodb';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = this.usersRepository.create({
      ...createUserDto,
    });

    await this.usersRepository.save(newUser);

    return newUser;
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: string) {
    //@ts-ignore
    return this.usersRepository.findOne(new ObjectId(id));
  }

  findUsersByIsDoctor(bool: boolean) {
    console.log("bool", bool);
    if (bool.toString() == "true") {
      return this.usersRepository.find({ where: { isDoctor: true }});
    }
    return this.usersRepository.find({ where: { isDoctor: false }});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return this.usersRepository.delete(new ObjectId(id));
  }
}
