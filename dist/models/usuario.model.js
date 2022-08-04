"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioSchema = void 0;
const usuario_enum_1 = require("../enums/usuario.enum");
const mongoose_1 = require("mongoose");
exports.UsuarioSchema = new mongoose_1.Schema({
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
            usuario_enum_1.TipoUsuario.DOCENTE,
            usuario_enum_1.TipoUsuario.ESTUDIANTE
        ],
        default: usuario_enum_1.TipoUsuario.ESTUDIANTE
    }
});
//# sourceMappingURL=usuario.model.js.map