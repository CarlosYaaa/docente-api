"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QualificationModule = void 0;
const common_1 = require("@nestjs/common");
const qualification_service_1 = require("./qualification.service");
const qualification_controller_1 = require("./qualification.controller");
const mongoose_1 = require("@nestjs/mongoose");
const qualification_model_1 = require("../../models/qualification.model");
const courses_model_1 = require("../../models/courses.model");
const usuario_model_1 = require("../../models/usuario.model");
let QualificationModule = class QualificationModule {
};
QualificationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'Qualification', schema: qualification_model_1.QualificationSchema },
                { name: 'Course', schema: courses_model_1.CourseSchema },
                { name: 'Usuario', schema: usuario_model_1.UsuarioSchema }
            ]),
        ],
        providers: [qualification_service_1.QualificationService],
        controllers: [qualification_controller_1.QualificationController]
    })
], QualificationModule);
exports.QualificationModule = QualificationModule;
//# sourceMappingURL=qualification.module.js.map