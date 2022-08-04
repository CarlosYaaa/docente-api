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
exports.QualificationController = void 0;
const common_1 = require("@nestjs/common");
const implicitConversion_util_1 = require("../../utils/implicitConversion.util");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const qualification_dto_1 = require("./dto/qualification.dto");
const qualification_service_1 = require("./qualification.service");
let QualificationController = class QualificationController {
    constructor(qualificationService) {
        this.qualificationService = qualificationService;
    }
    async createQualification(qualification) {
        const respuesta = await this.qualificationService.createQualification(qualification);
        return respuesta;
    }
    async getQualificationsOfCourse(idCurso) {
        const respuesta = await this.qualificationService.getQualificationsOfCourse(idCurso);
        return respuesta;
    }
    async getQualificationsById(idQualification) {
        const respuesta = await this.qualificationService.getQualificationsById(idQualification);
        return respuesta;
    }
    async editQualificationById(idQualification, editQualificationRequest) {
        const respuesta = await this.qualificationService.editQualificationById(idQualification, editQualificationRequest);
        return respuesta;
    }
};
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [qualification_dto_1.QualificationRequest]),
    __metadata("design:returntype", Promise)
], QualificationController.prototype, "createQualification", null);
__decorate([
    (0, common_1.Get)('/course/:idCurso'),
    __param(0, (0, common_1.Param)('idCurso', new common_1.ValidationPipe(implicitConversion_util_1.implicitConversion))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QualificationController.prototype, "getQualificationsOfCourse", null);
__decorate([
    (0, common_1.Get)('/:idQualification'),
    __param(0, (0, common_1.Param)('idQualification', new common_1.ValidationPipe(implicitConversion_util_1.implicitConversion))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QualificationController.prototype, "getQualificationsById", null);
__decorate([
    (0, common_1.Patch)('/:idQualification'),
    __param(0, (0, common_1.Param)('idQualification', new common_1.ValidationPipe(implicitConversion_util_1.implicitConversion))),
    __param(1, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, qualification_dto_1.EditQualificationRequest]),
    __metadata("design:returntype", Promise)
], QualificationController.prototype, "editQualificationById", null);
QualificationController = __decorate([
    (0, common_1.Controller)('qualification'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [qualification_service_1.QualificationService])
], QualificationController);
exports.QualificationController = QualificationController;
//# sourceMappingURL=qualification.controller.js.map