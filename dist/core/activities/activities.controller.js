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
exports.ActivitiesController = void 0;
const common_1 = require("@nestjs/common");
const implicitConversion_util_1 = require("../../utils/implicitConversion.util");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const activities_service_1 = require("./activities.service");
const activity_dto_1 = require("./dto/activity.dto");
let ActivitiesController = class ActivitiesController {
    constructor(activitiesService) {
        this.activitiesService = activitiesService;
    }
    async createActivity(activityRequest) {
        const respuesta = await this.activitiesService.createActivity(activityRequest);
        return respuesta;
    }
    async getAllActivities(idCurso) {
        const respuesta = await this.activitiesService.getAllActivities(idCurso);
        return respuesta;
    }
    async editActivityById(idActividad, activityEditRequest) {
        const respuesta = await this.activitiesService.editActivityById(idActividad, activityEditRequest);
        return respuesta;
    }
    async deleteActivityById(idActividad) {
        const respuesta = await this.activitiesService.deleteActivityById(idActividad);
        return respuesta;
    }
};
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [activity_dto_1.ActivityRequest]),
    __metadata("design:returntype", Promise)
], ActivitiesController.prototype, "createActivity", null);
__decorate([
    (0, common_1.Get)('/:idCurso'),
    __param(0, (0, common_1.Param)('idCurso', new common_1.ValidationPipe(implicitConversion_util_1.implicitConversion))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ActivitiesController.prototype, "getAllActivities", null);
__decorate([
    (0, common_1.Patch)('/:idActividad'),
    __param(0, (0, common_1.Param)('idActividad', new common_1.ValidationPipe(implicitConversion_util_1.implicitConversion))),
    __param(1, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, activity_dto_1.ActivityEditRequest]),
    __metadata("design:returntype", Promise)
], ActivitiesController.prototype, "editActivityById", null);
__decorate([
    (0, common_1.Delete)('/:idActividad'),
    __param(0, (0, common_1.Param)('idActividad', new common_1.ValidationPipe(implicitConversion_util_1.implicitConversion))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ActivitiesController.prototype, "deleteActivityById", null);
ActivitiesController = __decorate([
    (0, common_1.Controller)('activities'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [activities_service_1.ActivitiesService])
], ActivitiesController);
exports.ActivitiesController = ActivitiesController;
//# sourceMappingURL=activities.controller.js.map