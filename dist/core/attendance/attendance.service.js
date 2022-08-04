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
exports.AttendanceService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const error_utils_1 = require("../utils/error.utils");
let AttendanceService = class AttendanceService {
    constructor(attendanceModel, courseModel, usuarioModel) {
        this.attendanceModel = attendanceModel;
        this.courseModel = courseModel;
        this.usuarioModel = usuarioModel;
    }
    async createAttendance(usuario, attendanceRequest) {
        try {
            const attendanceCreado = await this.attendanceModel.create(attendanceRequest);
            if (!attendanceCreado) {
                throw new common_1.BadRequestException({
                    message: 'No se pudo crear la asistencia',
                });
            }
            return {
                message: 'La asistencia se ha tomado correctamente',
            };
        }
        catch (error) {
            error_utils_1.ErrorUtil.handleError(error);
        }
    }
    async getAllAttendances(idCurso) {
        try {
            const attendances = await this.attendanceModel
                .find({
                idCurso,
            })
                .select(`_id fechaAsistencia idCurso`);
            if (!attendances) {
                throw new common_1.BadRequestException({
                    message: 'No se encontraron asistencias para ese curso',
                });
            }
            return attendances;
        }
        catch (error) {
            error_utils_1.ErrorUtil.handleError(error);
        }
    }
    async getAttendanceById(idAttendance) {
        try {
            const attendance = await this.attendanceModel
                .findById(idAttendance)
                .select(`fechaAsistencia estudiantes idCurso`)
                .populate('idCurso', 'descripcion')
                .populate({
                path: 'estudiantes.estudiante',
                select: `nombres apellidoMaterno apellidoPaterno nombreCompleto`,
            });
            if (!attendance) {
                throw new common_1.BadRequestException({
                    message: 'No se encontró la asistencia',
                });
            }
            return attendance;
        }
        catch (error) {
            error_utils_1.ErrorUtil.handleError(error);
        }
    }
    async editAttendanceById(idAttendance, attendanceEditRequest) {
        try {
            const attendance = await this.attendanceModel.findOneAndUpdate({
                _id: idAttendance,
                'estudiantes._id': attendanceEditRequest.estudiante,
            }, {
                $set: {
                    'estudiantes.$.asistencia': attendanceEditRequest.asistencia,
                },
            });
            if (!attendance) {
                throw new common_1.BadRequestException({
                    message: 'No se encontró la asistencia',
                });
            }
            return {
                message: 'La actualización se realizó satisfactoriamente',
            };
        }
        catch (error) {
            error_utils_1.ErrorUtil.handleError(error);
        }
    }
};
AttendanceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Attendance')),
    __param(1, (0, mongoose_1.InjectModel)('Course')),
    __param(2, (0, mongoose_1.InjectModel)('Usuario')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], AttendanceService);
exports.AttendanceService = AttendanceService;
//# sourceMappingURL=attendance.service.js.map