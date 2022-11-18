import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tododescription: string;

  @ManyToOne((type) => User, (user) => user.todo)
  @JoinColumn({ name: 'userid' })
  user: User;
}
