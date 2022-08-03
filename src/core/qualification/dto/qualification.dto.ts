import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsDateString,
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
  ValidateNested,
} from 'class-validator';
import { UsuarioResponse } from 'src/core/user/dto/user.dto';
import { QualificationStudent } from 'src/interface/qualification.interface';

export class QualificationRequest {
  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsDateString()
  @IsNotEmpty()
  fechaNota: Date;

  @IsDefined()
  @IsString()
  @IsNotEmpty()
  idCurso: string;

  @IsArray()
  @ArrayMinSize(1)
  @Type(() => QualificationStudentRequest)
  @ValidateNested({ each: true })
  estudiantes: QualificationStudentRequest[];
}

export class QualificationStudentRequest {
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  estudiante: string;

  @IsNumber()
  @IsDefined()
  @IsNotEmpty()
  @Min(0)
  @Max(20)
  nota: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  idCalificacion: string;
}

export class EditQualificationRequest {
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  estudiante: string;
  
  @IsNumber()
  @IsDefined()
  @IsNotEmpty()
  @Min(0)
  @Max(20)
  nota: number;
}

export interface AllQualificationForCourseResponse {
  readonly _id: string;
  readonly descripcion: string;
  readonly fechaNota: Date;
}

export interface QualificationByIdResponse {
  readonly _id: string;
  readonly descripcion: string;
  readonly fechaNota: Date;
  readonly idCurso: string;
  readonly estudiantes: QualificationStudent[];
}