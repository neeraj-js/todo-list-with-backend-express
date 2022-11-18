import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { UserService } from 'src/user/user.service';

@Controller('todo')
export class TodoController {
  constructor(
    private readonly todoService: TodoService,
    private readonly userService: UserService,
  ) {}

  @Post('create-todo')
  async create(@Body() createTodoDto: CreateTodoDto) {
    const user = await this.userService.findOne(createTodoDto.userid);
    return this.todoService.create(createTodoDto, user);
  }

  @Get('todo-lists/:id')
  async findlistbyuser (@Param('id') id: string) {
    const userdata = await this.userService.findOne(+id);
    console.log(userdata)
    return await this.todoService.findTodo(userdata);
  }

  @Get('all-todo-list')
  findAll() {
    return this.todoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(+id);
  }

  @Patch('/edittodo/:id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(+id, updateTodoDto);
  }

  @Delete('/deletetodo/:id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(+id);
  }
}
