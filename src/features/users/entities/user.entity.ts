import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
// TODO change to UserEntity
// TODO build UserResponse object
// TODO Linter on save
// TODO prettier on save
// TODO shorten paths
// TODO maybe move user entity to dtos?
// TODO add config service
// TODO download postman to check.
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, unique: true })
  userName: string;

  @Column({ type: 'varchar', length: 20 })
  password: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 50 })
  firstName: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  middleName?: string;

  @Column({ type: 'varchar', length: 50 })
  lastName: string;

  @Column({ type: 'boolean' })
  isActive: boolean;

  @Column({ type: 'integer' })
  roleId: number;

  // many to one/ one to many : role

  @Column({ type: 'timestamp' })
  registrationDate: Date;

  @Column({ type: 'timestamp', nullable: true })
  lastLoginDate?: Date;

  @Column({ type: 'jsonb', nullable: true })
  metadata?: any;
  // TODO change any to meta data
}
