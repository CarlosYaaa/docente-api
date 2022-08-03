import { TipoUsuario } from '../enums/usuario.enum';
import { Schema } from 'mongoose';


export const UsuarioSchema = new Schema({
    nombres: {
        type: String,
        required: true
    },
    apellidoMaterno: {
        type: String,
        required: true
    },
    apellidoPaterno: {
        type: String,
        required: true
    },
    nombreCompleto: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
    },
    telefono: {
        type: Number,
    },
    email: { 
        type: String,
        required: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    tipoUsuario: {
        type: String,
        enum: [
            TipoUsuario.DOCENTE,
            TipoUsuario.ESTUDIANTE
        ],
        default: TipoUsuario.ESTUDIANTE
    }
})





