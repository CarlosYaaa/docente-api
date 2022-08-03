import { IsDateString, IsDefined, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ActivityRequest {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  descripcion: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  idCurso: string;

  @IsDateString()
  @IsNotEmpty()
  fechaActividad: Date;
}

export class ActivityEditRequest {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    nombre: string;
  
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    descripcion: string;
  
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    idCurso: string;
  
    @IsOptional()
    @IsDateString()
    @IsNotEmpty()
    fechaActividad: Date;
  }

  export interface ActivitiesResponse {
    readonly nombre: string;
    readonly descripcion: string;
    readonly idCurso: string;
    readonly fechaActividad: Date;
}