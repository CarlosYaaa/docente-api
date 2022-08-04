"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttedanceStudentSchema = void 0;
const mongoose_1 = require("mongoose");
const attendance_enum_1 = require("../../enums/attendance.enum");
exports.AttedanceStudentSchema = new mongoose_1.Schema({
    estudiante: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Usuario',
    },
    asistencia: {
        type: String,
        enum: [
            attendance_enum_1.AttendanceStatus.PRESENTE,
            attendance_enum_1.AttendanceStatus.TARDANZA,
            attendance_enum_1.AttendanceStatus.AUSENTE,
        ],
        required: true,
    }
});
//# sourceMappingURL=attendanceStudent.schema.js.map