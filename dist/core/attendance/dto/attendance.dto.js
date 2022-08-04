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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendanceStudentRequest = exports.AttendanceRequest = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const attendance_enum_1 = require("../../../enums/attendance.enum");
class AttendanceRequest {
}
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], AttendanceRequest.prototype, "fechaAsistencia", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AttendanceRequest.prototype, "idCurso", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_transformer_1.Type)(() => AttendanceStudentRequest),
    (0, class_validator_1.ValidateNested)({ each: true }),
    __metadata("design:type", Array)
], AttendanceRequest.prototype, "estudiantes", void 0);
exports.AttendanceRequest = AttendanceRequest;
class AttendanceStudentRequest {
}
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AttendanceStudentRequest.prototype, "estudiante", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(attendance_enum_1.AttendanceStatus),
    __metadata("design:type", String)
], AttendanceStudentRequest.prototype, "asistencia", void 0);
exports.AttendanceStudentRequest = AttendanceStudentRequest;
//# sourceMappingURL=attendance.dto.js.map