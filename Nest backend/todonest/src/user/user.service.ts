import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const user = await this.usersRepository.create(createUserDto);
    return await this.usersRepository.save(user);
  }

  findAll() {
    return this.usersRepository.find();
  }

  async find(UpdateUserDto: UpdateUserDto) {
    const userflag = await this.usersRepository.findOne({
      where: { username: UpdateUserDto.username },
    });
    if (userflag) {
      if (userflag.password === UpdateUserDto.password) {
        return { id: userflag.id, keystatus: true };
      } else return { id: userflag.id, keystatus: false };
    } else return { keystatus: false };
  }

  async findOne(id: number) {
    const searchuser = this.usersRepository.findOne({ where: { id: id } });
    return searchuser;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
