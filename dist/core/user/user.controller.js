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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const busqueda_dto_1 = require("../../models/dto/busqueda.dto");
const implicitConversion_util_1 = require("../../utils/implicitConversion.util");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const user_service_1 = require("./user.service");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async getAllStudents(query) {
        const allStudents = await this.userService.getAllStudents(query);
        return allStudents;
    }
    async getUser(idUsuario) {
        const respuesta = await this.userService.getUser(idUsuario);
        return respuesta;
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Query)(new common_1.ValidationPipe(implicitConversion_util_1.implicitConversion))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [busqueda_dto_1.BusquedaServicioRequest]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAllStudents", null);
__decorate([
    (0, common_1.Get)('/:idUsuario'),
    __param(0, (0, common_1.Param)('idUsuario', new common_1.ValidationPipe(implicitConversion_util_1.implicitConversion))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
UserController = __decorate([
    (0, common_1.Controller)('user'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map