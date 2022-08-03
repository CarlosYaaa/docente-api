import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { RespuestaServidor } from 'src/models/respuestaServidor.model';
import { AuthService } from './auth.service';
import {
  UsuarioDocenteRequest,
  UsuarioDocenteResponse,
  UsuarioRegisterRequest,
} from './dto/usuarioDocente.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @HttpCode(HttpStatus.OK)
  async login(
    @Body(ValidationPipe)
    usuarioDocenteRequest: UsuarioDocenteRequest,
  ): Promise<UsuarioDocenteResponse> {
    const respuesta = await this.authService.login(usuarioDocenteRequest);
    return respuesta;
  }

  @Post('/register')
  async registerUser(
    @Body(ValidationPipe)
    usuarioRegisterRequest: UsuarioRegisterRequest,
  ): Promise<RespuestaServidor> {
    const respuesta = await this.authService.register(usuarioRegisterRequest);
    return respuesta;
  }
}
