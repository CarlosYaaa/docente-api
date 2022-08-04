"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const usuario_enum_1 = require("../../enums/usuario.enum");
const error_utils_1 = require("../utils/error.utils");
const auth_util_1 = require("./auth.util");
let AuthService = class AuthService {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    async login(usuarioDocenteRequest) {
        try {
            const datos = await auth_util_1.AuthUtil.autenticarUsuarioDocente(usuarioDocenteRequest, usuario_enum_1.TipoUsuario.DOCENTE);
            if (!datos.usuario) {
                return datos.message;
            }
            const token = this.jwtService.sign(datos.usuario);
            const usuarioResponse = {
                usuario: datos.usuario,
                token
            };
            return usuarioResponse;
        }
        catch (error) {
            error_utils_1.ErrorUtil.handleError(error);
        }
    }
    async register(usuarioRegisterRequest) {
        try {
            const usuarioRegistrado = await auth_util_1.AuthUtil.registrarUsuarioDocente(usuarioRegisterRequest);
            return usuarioRegistrado;
        }
        catch (error) {
            error_utils_1.ErrorUtil.handleError(error);
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map