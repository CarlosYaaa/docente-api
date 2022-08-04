import { Model } from 'mongoose';
import { IUsuario } from 'src/interface/usuario.interface';
import { BusquedaServicioRequest } from 'src/models/dto/busqueda.dto';
export declare class UserService {
    private readonly usuarioModel;
    constructor(usuarioModel: Model<IUsuario>);
    getAllStudents(query: BusquedaServicioRequest): Promise<(IUsuario & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getUser(idUsuario: string): Promise<IUsuario & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
