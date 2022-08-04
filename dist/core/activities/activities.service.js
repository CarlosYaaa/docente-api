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
exports.ActivitiesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const error_utils_1 = require("../utils/error.utils");
let ActivitiesService = class ActivitiesService {
    constructor(activityModel) {
        this.activityModel = activityModel;
    }
    async createActivity(activity) {
        try {
            const activityCreado = await this.activityModel.create(activity);
            if (!activityCreado) {
                throw new common_1.BadRequestException({
                    message: 'No se pudo crear la actividad',
                });
            }
            return {
                message: 'La actividad se ha creado satisfactoriamente',
            };
        }
        catch (error) {
            error_utils_1.ErrorUtil.handleError(error);
        }
    }
    async getAllActivities(idCurso) {
        try {
            const activities = await this.activityModel
                .find({
                idCurso,
            })
                .select(`_id nombre descripcion idCurso fechaActividad`);
            if (!activities) {
                throw new common_1.BadRequestException({
                    message: 'No se encontraron actividades para ese curso',
                });
            }
            return activities;
        }
        catch (error) {
            error_utils_1.ErrorUtil.handleError(error);
        }
    }
    async editActivityById(idActivity, activity) {
        try {
            const activityEditado = await this.activityModel.findByIdAndUpdate(idActivity, activity, { new: true });
            if (!activityEditado) {
                throw new common_1.BadRequestException({
                    message: 'No se pudo editar la actividad',
                });
            }
            return {
                message: 'La actividad se ha editado satisfactoriamente',
            };
        }
        catch (error) {
            error_utils_1.ErrorUtil.handleError(error);
        }
    }
    async deleteActivityById(idActividad) {
        try {
            const activityEliminado = await this.activityModel.findByIdAndDelete(idActividad);
            if (!activityEliminado) {
                throw new common_1.BadRequestException({
                    message: 'No se pudo eliminar la actividad',
                });
            }
            return {
                message: 'La actividad se ha eliminado correctamente',
            };
        }
        catch (error) {
            error_utils_1.ErrorUtil.handleError(error);
        }
    }
};
ActivitiesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Activity')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ActivitiesService);
exports.ActivitiesService = ActivitiesService;
//# sourceMappingURL=activities.service.js.map