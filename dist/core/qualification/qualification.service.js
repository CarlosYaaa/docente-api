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
exports.QualificationService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const error_utils_1 = require("../utils/error.utils");
let QualificationService = class QualificationService {
    constructor(qualificationModel) {
        this.qualificationModel = qualificationModel;
    }
    async createQualification(qualification) {
        try {
            const createQualification = await this.qualificationModel.create(qualification);
            if (!createQualification) {
                throw new common_1.NotFoundException({
                    message: 'No se pudo crear la calificación',
                });
            }
            return {
                message: 'La calificación se creó satisfactoriamente',
            };
        }
        catch (error) {
            error_utils_1.ErrorUtil.handleError(error);
        }
    }
    async getQualificationsOfCourse(idCurso) {
        try {
            const qualifications = await this.qualificationModel
                .find({
                idCurso,
            })
                .select(`_id descripcion 
        fechaNota`)
                .exec();
            return qualifications;
        }
        catch (error) {
            error_utils_1.ErrorUtil.handleError(error);
        }
    }
    async getQualificationsById(idQualification) {
        try {
            const qualifications = await this.qualificationModel
                .findOne({
                _id: idQualification,
            })
                .select(`_id descripcion fechaNota estudiantes idCurso`)
                .populate({
                path: 'estudiantes.estudiante',
                select: `nombres apellidoMaterno apellidoPaterno nombreCompleto`,
            })
                .exec();
            return qualifications;
        }
        catch (error) {
            error_utils_1.ErrorUtil.handleError(error);
        }
    }
    async editQualificationById(idQualification, editQualificationRequest) {
        try {
            const editQualification = await this.qualificationModel.findOneAndUpdate({
                _id: idQualification,
                'estudiantes._id': editQualificationRequest.estudiante,
            }, {
                $set: {
                    'estudiantes.$.nota': editQualificationRequest.nota,
                },
            });
            if (!editQualification)
                throw new common_1.NotFoundException({
                    message: 'No se encontró al usuario, por lo tanto no se pudo actualizar',
                });
            return {
                message: 'La actualización se realizó satisfactoriamente',
            };
        }
        catch (error) {
            error_utils_1.ErrorUtil.handleError(error);
        }
    }
};
QualificationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Qualification')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], QualificationService);
exports.QualificationService = QualificationService;
//# sourceMappingURL=qualification.service.js.map