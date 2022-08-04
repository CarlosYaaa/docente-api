import { BusquedaServicioRequest } from 'src/models/dto/busqueda.dto';
import { UsuarioResponse } from './dto/user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAllStudents(query: BusquedaServicioRequest): Promise<UsuarioResponse[]>;
    getUser(idUsuario: string): Promise<UsuarioResponse>;
}
