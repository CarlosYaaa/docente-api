import { JwtService } from '@nestjs/jwt';
import { RespuestaServidor } from 'src/models/respuestaServidor.model';
import { UsuarioDocenteRequest, UsuarioDocenteResponse, UsuarioRegisterRequest } from './dto/usuarioDocente.dto';
export declare class AuthService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    login(usuarioDocenteRequest: UsuarioDocenteRequest): Promise<UsuarioDocenteResponse>;
    register(usuarioRegisterRequest: UsuarioRegisterRequest): Promise<RespuestaServidor>;
}
