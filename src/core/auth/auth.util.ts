import {
  UsuarioDocenteRequest,
  UsuarioRegisterRequest,
} from './dto/usuarioDocente.dto';
import axios from 'axios';

export namespace AuthUtil {
  export async function autenticarUsuarioDocente(
    credencialesUsuario: UsuarioDocenteRequest,
    tipoUsuario: string,
  ): Promise<any> {
    const responseUser = await axios.post(
      `${process.env.SERVICIO_AUTENTICACION_URL}` + `/usuario/signin`,
      { credencialesUsuario, tipoUsuario },
    );

    return responseUser.data;
  }

  export async function registrarUsuarioDocente(
    usuarioRegisterRequest: UsuarioRegisterRequest,
  ): Promise<any> {
    const registerUser = await axios.post(
      `${process.env.SERVICIO_AUTENTICACION_URL}` + `/usuario/signup`,
      usuarioRegisterRequest,
    );
    return registerUser.data;
  }
}
