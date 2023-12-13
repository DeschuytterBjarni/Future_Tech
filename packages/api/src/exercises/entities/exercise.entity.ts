import { Column, Entity, ObjectId, ObjectIdColumn } from "typeorm";

@Entity()
export class Exercise {

    @ObjectIdColumn()
    id: ObjectId;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    repetitions: number;

    @Column()
    sets: number;

    @Column()
    duration: number;

    @Column()
    preferredAngle: number;
}
