import { RespuestaServidor } from 'src/models/respuestaServidor.model';
import { AuthService } from './auth.service';
import { UsuarioDocenteRequest, UsuarioDocenteResponse, UsuarioRegisterRequest } from './dto/usuarioDocente.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(usuarioDocenteRequest: UsuarioDocenteRequest): Promise<UsuarioDocenteResponse>;
    registerUser(usuarioRegisterRequest: UsuarioRegisterRequest): Promise<RespuestaServidor>;
}
