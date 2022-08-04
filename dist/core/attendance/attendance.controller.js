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
exports.AttendanceController = void 0;
const common_1 = require("@nestjs/common");
const usuario_decorator_1 = require("../../decorators/usuario.decorator");
const usuarioPayload_model_1 = require("../../models/usuarioPayload.model");
const implicitConversion_util_1 = require("../../utils/implicitConversion.util");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const attendance_service_1 = require("./attendance.service");
const attendance_dto_1 = require("./dto/attendance.dto");
let AttendanceController = class AttendanceController {
    constructor(attendanceService) {
        this.attendanceService = attendanceService;
    }
    async createAttendance(usuario, attendanceRequest) {
        const respuesta = await this.attendanceService.createAttendance(usuario, attendanceRequest);
        return respuesta;
    }
    async getAllAttendances(idCourse) {
        const respuesta = await this.attendanceService.getAllAttendances(idCourse);
        return respuesta;
    }
    async getAttendanceById(idAttendance) {
        const respuesta = await this.attendanceService.getAttendanceById(idAttendance);
        return respuesta;
    }
    async editAttendanceById(idAttendance, attendanceEditRequest) {
        console.log(attendanceEditRequest);
        const respuesta = await this.attendanceService.editAttendanceById(idAttendance, attendanceEditRequest);
        return respuesta;
    }
};
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, usuario_decorator_1.Usuario)()),
    __param(1, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [usuarioPayload_model_1.UsuarioPayload,
        attendance_dto_1.AttendanceRequest]),
    __metadata("design:returntype", Promise)
], AttendanceController.prototype, "createAttendance", null);
__decorate([
    (0, common_1.Get)('/:idCourse'),
    __param(0, (0, common_1.Param)('idCourse', new common_1.ValidationPipe(implicitConversion_util_1.implicitConversion))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AttendanceController.prototype, "getAllAttendances", null);
__decorate([
    (0, common_1.Get)('/detail/:idAttendance'),
    __param(0, (0, common_1.Param)('idAttendance', new common_1.ValidationPipe(implicitConversion_util_1.implicitConversion))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AttendanceController.prototype, "getAttendanceById", null);
__decorate([
    (0, common_1.Patch)('/:idAttendance'),
    __param(0, (0, common_1.Param)('idAttendance', new common_1.ValidationPipe(implicitConversion_util_1.implicitConversion))),
    __param(1, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, attendance_dto_1.AttendanceStudentRequest]),
    __metadata("design:returntype", Promise)
], AttendanceController.prototype, "editAttendanceById", null);
AttendanceController = __decorate([
    (0, common_1.Controller)('attendance'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [attendance_service_1.AttendanceService])
], AttendanceController);
exports.AttendanceController = AttendanceController;
//# sourceMappingURL=attendance.controller.js.map