// user.entity.ts

import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

@Entity()
export class User {

  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column({type: 'boolean'})
  isDoctor: boolean;
}
