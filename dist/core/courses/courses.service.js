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
exports.CoursesService = void 0;
const common_1 = require("@nestjs/common");
const error_utils_1 = require("../utils/error.utils");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const usuario_enum_1 = require("../../enums/usuario.enum");
let CoursesService = class CoursesService {
    constructor(courseModel, usuarioModel) {
        this.courseModel = courseModel;
        this.usuarioModel = usuarioModel;
    }
    async createCourse(usuario, cursoRequest) {
        try {
            console.log("Usuario:", usuario);
            const cursoCreado = await this.courseModel.create({
                user: usuario._id,
                descripcion: cursoRequest.descripcion,
                day: cursoRequest.day,
                schedule: cursoRequest.scheduleHours,
            });
            console.log("Que cosas se ha creado:", cursoCreado);
            if (!cursoCreado) {
                throw new common_1.NotFoundException({
                    message: 'No se pudo crear el curso',
                });
            }
            return {
                message: 'Curso creado satisfactoriamente',
            };
        }
        catch (error) {
            console.log(error);
            error_utils_1.ErrorUtil.handleError(error);
        }
    }
    async getAllCourse(usuario, query) {
        try {
            let match = {
                user: usuario._id,
            };
            if (query.palabraClave) {
                match['descripcion'] = {
                    $regex: `.*${query.palabraClave}.*`,
                };
            }
            const allCourses = await this.courseModel
                .find(match)
                .skip(query.offset)
                .limit(query.limit);
            return allCourses;
        }
        catch (error) {
            error_utils_1.ErrorUtil.handleError(error);
        }
    }
    async addStudent(idStudent, idCourse) {
        try {
            if (!idStudent.idStudent) {
                throw new common_1.BadRequestException({
                    message: 'El id del estudiante no puede ser vacio',
                });
            }
            const studenById = await this.usuarioModel.findById(idStudent.idStudent);
            if (!studenById) {
                throw new common_1.BadRequestException({
                    message: 'No existe el usuario con el id espificado, no se puede agregar usuario al curso',
                });
            }
            if (studenById.tipoUsuario !== usuario_enum_1.TipoUsuario.ESTUDIANTE) {
                throw new common_1.BadRequestException({
                    message: 'El usuario no es de tipo estudiante',
                });
            }
            const ifExistStudent = await this.courseModel.find({
                _id: idCourse,
                students: { $in: idStudent.idStudent },
            });
            if (ifExistStudent.length > 0) {
                throw new common_1.BadRequestException({
                    message: 'El usuario ya se encuentra inscrito en esta clase',
                });
            }
            const condition = {
                _id: idCourse,
            };
            const update = {
                $push: { students: idStudent.idStudent },
            };
            const addStudent = await this.courseModel.findOneAndUpdate(condition, update);
            if (!addStudent) {
                throw new common_1.BadRequestException({
                    message: 'No se pudo agregar el estudiante al curso',
                });
            }
            return { message: 'Estudiante agregado al curso correctamente ' };
        }
        catch (error) {
            error_utils_1.ErrorUtil.handleError(error);
        }
    }
    async getAllStudentsForCourse(idCourse) {
        try {
            const getAllStudentsForCourse = await this.courseModel
                .findById({
                _id: idCourse,
            })
                .select(`descripcion students _id`)
                .populate({
                path: 'students',
                select: 'nombres apellidoMaterno apellidoPaterno nombreCompleto',
            })
                .exec();
            return getAllStudentsForCourse;
        }
        catch (error) {
            error_utils_1.ErrorUtil.handleError(error);
        }
    }
};
CoursesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Course')),
    __param(1, (0, mongoose_2.InjectModel)('Usuario')),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], CoursesService);
exports.CoursesService = CoursesService;
//# sourceMappingURL=courses.service.js.map