import { Todo } from 'src/todo/entities/todo.entity';
import {
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany((type) => Todo, (todo) => todo.user)
  todo: Todo[];
}
