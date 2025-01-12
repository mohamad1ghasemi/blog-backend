import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserId } from './user.id';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  public readonly id: UserId;

  @Column({ type: 'varchar', length: 255 })
  public readonly name: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  public readonly email: string;

  @Column({ type: 'varchar', length: 255 })
  public readonly password: string;

  @CreateDateColumn({ type: 'timestamp' })
  public readonly createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public readonly updatedAt: Date;

  public constructor(
    id: UserId,
    name: string,
    email: string,
    password: string,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
