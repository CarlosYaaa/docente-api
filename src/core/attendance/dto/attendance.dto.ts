import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsDateString,
  IsDefined,
  IsEnum,
  isEnum,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';
import { AttendanceStatus } from 'src/enums/attendance.enum';
import { AttendanceStudent } from 'src/interface/attedance.interface';

export class AttendanceRequest {
  @IsDateString()
  @IsNotEmpty()
  fechaAsistencia: Date;

  @IsDefined()
  @IsString()
  @IsNotEmpty()
  idCurso: string;

  @IsArray()
  @ArrayMinSize(1)
  @Type(() => AttendanceStudentRequest)
  @ValidateNested({ each: true })
  estudiantes: AttendanceStudentRequest[];
}

export class AttendanceStudentRequest {
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  estudiante: string;

  @IsNotEmpty()
  @IsEnum(AttendanceStatus)
  asistencia: string;
}

export interface GetAllAttendanceResponse {
  readonly _id: string;
  readonly fechaAsistencia: Date;
  readonly idCurso: string;
}

export interface GetAttendanceByIdResponse {
  readonly _id: string;
  readonly fechaAsistencia: Date;
  readonly idCurso: string;
  readonly estudiantes: AttendanceStudent[];
}