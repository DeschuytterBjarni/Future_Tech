import { IsNumber, IsString } from "class-validator";

export class CreateExerciseDto {

    @IsString()
    readonly name;

    @IsString()
    readonly description;

    @IsNumber()
    readonly repetitions;

    @IsNumber()
    readonly se
    
    @IsNumber()
    readonly duration;

    @IsNumber()
    readonly preferredAngle;
}
