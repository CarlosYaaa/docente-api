import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsDefined,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { DayCourses } from 'src/enums/courses.enum';

export class ScheduleHourRequest {
  @IsString()
  @IsNotEmpty()
  startTime: string;

  @IsString()
  @IsNotEmpty()
  endTime: string;
}

export class CursosRequest {
  @IsString()
  @IsNotEmpty()
  readonly descripcion: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(DayCourses)
  readonly day: string;

  @IsArray()
  @ArrayMinSize(1)
  @Type(() => ScheduleHourRequest)
  @ValidateNested({ each: true })
  readonly scheduleHours: ScheduleHourRequest[];

  @IsOptional()
  @IsArray()
  @IsString({each: true})
  readonly students: string[];

  @IsOptional()
  @IsString()
  @IsDefined()
  readonly user: string;
}

export class AddStudentRequest {
  @IsString()
  @IsNotEmpty()
  readonly idStudent: string;
}

export interface AllCourseResponse {
  readonly _id: string;
  readonly descripcion: string;
  readonly day: string;
  readonly schedule: ScheduleCourse;
  readonly students?: string[];
  readonly user: string;
} 
export interface ScheduleCourse {
  readonly startTime: string;
  readonly endTime: string;
}

export interface getAllStudentsForCourseResponse {
  readonly _id: string;
  readonly descripcion: string;
  readonly students?: string[];
}
//ESQUEMA DE STUDENTS EN GETALLSTUDENTSFORCOURSERESPONSE
// export interface StudentForCourseReponse { 
//   readonly _id: string;
//   readonly nombres: string;
//   readonly apellidoPaterno: string;
//   readonly apellidoMaterno: string;
//   readonly nombreCompleto: string;
// }
