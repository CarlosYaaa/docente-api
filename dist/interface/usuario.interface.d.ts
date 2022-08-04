import { Document } from 'mongoose';
export interface IUsuario extends Document {
    _id: string;
    nombres: string;
    apellidoMaterno: string;
    apellidoPaterno: string;
    nombreCompleto: string;
    edad: number;
    telefono: number;
    email: string;
    password: string;
    tipoUsuario: string;
}
