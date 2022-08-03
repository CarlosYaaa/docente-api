import { IsOptional, IsString, IsNumber, Min } from 'class-validator';

export class BusquedaServicioRequest {
  @IsOptional()
  @IsString()
  palabraClave: string;

  @IsOptional()
  @IsNumber()
  @Min(1)
  limit: number = 10;

  @IsOptional()
  @IsNumber()
  @Min(0)
  offset: number = 0;

  @IsOptional()
  fechaInicial: Date;

  @IsOptional()
  fechaFinal: Date;
}
