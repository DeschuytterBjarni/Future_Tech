import { ObjectIdColumn, ObjectId, Column, Entity, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class FinishedExercise {

    @ObjectIdColumn()
    id: ObjectId;

    @ObjectIdColumn()
    userId: ObjectId;

    @ObjectIdColumn()
    exerciseId: ObjectId;

    @Column()
    repetitions: number;

    @Column()
    sets: number;

    @Column()
    duration: number;

    @Column()
    angles: number[];

    @Column()
    averageAngle: number;

    @Column()
    maxAngle: number;

    @Column()
    minAngle: number;

    @CreateDateColumn({ type: 'timestamp', nullable: true })
    createdAt?: Date

    @UpdateDateColumn({ type: 'timestamp', nullable: true })
    updatedAt?: Date
}
