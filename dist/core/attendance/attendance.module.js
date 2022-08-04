"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendanceModule = void 0;
const common_1 = require("@nestjs/common");
const attendance_controller_1 = require("./attendance.controller");
const attendance_service_1 = require("./attendance.service");
const mongoose_1 = require("@nestjs/mongoose");
const usuario_model_1 = require("../../models/usuario.model");
const courses_model_1 = require("../../models/courses.model");
const attendance_model_1 = require("../../models/attendance.model");
let AttendanceModule = class AttendanceModule {
};
AttendanceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'Course', schema: courses_model_1.CourseSchema },
                { name: 'Usuario', schema: usuario_model_1.UsuarioSchema },
                { name: 'Attendance', schema: attendance_model_1.AttedanceSchema },
            ]),
        ],
        controllers: [attendance_controller_1.AttendanceController],
        providers: [attendance_service_1.AttendanceService]
    })
], AttendanceModule);
exports.AttendanceModule = AttendanceModule;
//# sourceMappingURL=attendance.module.js.map