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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const usuario_enum_1 = require("../../enums/usuario.enum");
const error_utils_1 = require("../utils/error.utils");
let UserService = class UserService {
    constructor(usuarioModel) {
        this.usuarioModel = usuarioModel;
    }
    async getAllStudents(query) {
        try {
            let match = {
                tipoUsuario: usuario_enum_1.TipoUsuario.ESTUDIANTE,
            };
            if (query.palabraClave) {
                match['nombreCompleto'] = {
                    $regex: `.*${query.palabraClave}.*`,
                };
            }
            const allStudents = await this.usuarioModel
                .find(match)
                .select(`_id nombres 
            apellidoMaterno
            apellidoPaterno
            nombreCompleto
            edad
            telefono
            email tipoUsuario`)
                .skip(query.offset)
                .limit(query.limit);
            return allStudents;
        }
        catch (error) {
            error_utils_1.ErrorUtil.handleError(error);
        }
    }
    async getUser(idUsuario) {
        try {
            const user = await this.usuarioModel.findById({
                _id: idUsuario,
            }).select(`_id
      nombres
      apellidoMaterno
      apellidoPaterno
      nombreCompleto
      edad
      telefono
      email
      tipoUsuario`);
            return user;
        }
        catch (error) {
            error_utils_1.ErrorUtil.handleError(error);
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Usuario')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map