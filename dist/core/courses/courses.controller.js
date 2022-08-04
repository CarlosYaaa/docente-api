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
exports.CoursesController = void 0;
const common_1 = require("@nestjs/common");
const usuario_decorator_1 = require("../../decorators/usuario.decorator");
const busqueda_dto_1 = require("../../models/dto/busqueda.dto");
const usuarioPayload_model_1 = require("../../models/usuarioPayload.model");
const implicitConversion_util_1 = require("../../utils/implicitConversion.util");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const courses_service_1 = require("./courses.service");
const courses_dto_1 = require("./dto/courses.dto");
let CoursesController = class CoursesController {
    constructor(coursesService) {
        this.coursesService = coursesService;
    }
    async createCourses(usuario, cursoRequest) {
        const respuesta = await this.coursesService.createCourse(usuario, cursoRequest);
        return respuesta;
    }
    async getAllCourse(usuario, query) {
        const respuesta = await this.coursesService.getAllCourse(usuario, query);
        return respuesta;
    }
    async addStundent(idCourse, idStudent) {
        const respuesta = await this.coursesService.addStudent(idStudent, idCourse);
        return respuesta;
    }
    async getAllStudentsForCourse(idCourse) {
        const respuesta = await this.coursesService.getAllStudentsForCourse(idCourse);
        return respuesta;
    }
};
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, usuario_decorator_1.Usuario)()),
    __param(1, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [usuarioPayload_model_1.UsuarioPayload,
        courses_dto_1.CursosRequest]),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "createCourses", null);
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, usuario_decorator_1.Usuario)()),
    __param(1, (0, common_1.Query)(new common_1.ValidationPipe(implicitConversion_util_1.implicitConversion))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [usuarioPayload_model_1.UsuarioPayload,
        busqueda_dto_1.BusquedaServicioRequest]),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "getAllCourse", null);
__decorate([
    (0, common_1.Post)('/student/:idCourse'),
    __param(0, (0, common_1.Param)('idCourse', new common_1.ValidationPipe(implicitConversion_util_1.implicitConversion))),
    __param(1, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, courses_dto_1.AddStudentRequest]),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "addStundent", null);
__decorate([
    (0, common_1.Get)('/students/:idCourse'),
    __param(0, (0, common_1.Param)('idCourse', new common_1.ValidationPipe(implicitConversion_util_1.implicitConversion))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "getAllStudentsForCourse", null);
CoursesController = __decorate([
    (0, common_1.Controller)('courses'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [courses_service_1.CoursesService])
], CoursesController);
exports.CoursesController = CoursesController;
//# sourceMappingURL=courses.controller.js.map