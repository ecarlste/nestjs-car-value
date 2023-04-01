import { Report } from '../reports/report.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: true })
  isAdmin: boolean;

  @OneToMany(() => Report, (report) => report.user)
  reports: Report[];
}
