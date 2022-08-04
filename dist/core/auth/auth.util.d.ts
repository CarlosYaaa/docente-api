import { UsuarioDocenteRequest, UsuarioRegisterRequest } from './dto/usuarioDocente.dto';
export declare namespace AuthUtil {
    function autenticarUsuarioDocente(credencialesUsuario: UsuarioDocenteRequest, tipoUsuario: string): Promise<any>;
    function registrarUsuarioDocente(usuarioRegisterRequest: UsuarioRegisterRequest): Promise<any>;
}
