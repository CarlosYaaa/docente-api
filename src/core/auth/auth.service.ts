import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TipoUsuario } from 'src/enums/usuario.enum';
import { RespuestaServidor } from 'src/models/respuestaServidor.model';
import { ErrorUtil } from '../utils/error.utils';
import { AuthUtil } from './auth.util';
import {
  UsuarioDocenteRequest,
  UsuarioDocenteResponse,
  UsuarioRegisterRequest,
} from './dto/usuarioDocente.dto';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(
    usuarioDocenteRequest: UsuarioDocenteRequest,
  ): Promise<UsuarioDocenteResponse> {
    try {
      const datos = await AuthUtil.autenticarUsuarioDocente(
        usuarioDocenteRequest,
        TipoUsuario.DOCENTE,
      );
      if (!datos.usuario) {
        return datos.message;
      }
      const token = this.jwtService.sign(datos.usuario);
      const usuarioResponse: UsuarioDocenteResponse = {
        usuario: datos.usuario,
        token
      };
      return usuarioResponse;
    } catch (error) {
      ErrorUtil.handleError(error);
    }
  }

  async register(
    usuarioRegisterRequest: UsuarioRegisterRequest,
  ): Promise<RespuestaServidor> {
    try {
      const usuarioRegistrado = await AuthUtil.registrarUsuarioDocente(
        usuarioRegisterRequest,
      );
      return usuarioRegistrado;
    } catch (error) {
      ErrorUtil.handleError(error);
    }
  }
}
