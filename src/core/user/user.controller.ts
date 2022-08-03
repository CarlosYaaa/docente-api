import {
  Controller,
  Get,
  Param,
  Query,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { BusquedaServicioRequest } from 'src/models/dto/busqueda.dto';
import { implicitConversion } from 'src/utils/implicitConversion.util';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UsuarioResponse } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  async getAllStudents(
    @Query(new ValidationPipe(implicitConversion))
    query: BusquedaServicioRequest,
  ): Promise<UsuarioResponse[]> {
    const allStudents = await this.userService.getAllStudents(query);
    return allStudents;
  }

  @Get('/:idUsuario')
  async getUser(
    @Param('idUsuario', new ValidationPipe(implicitConversion))
    idUsuario: string,
  ): Promise<UsuarioResponse> {
    const respuesta = await this.userService.getUser(idUsuario);
    return respuesta;
  }
}
