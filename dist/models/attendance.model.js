"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttedanceSchema = void 0;
const mongoose_1 = require("mongoose");
const attendanceStudent_schema_1 = require("./schema/attendanceStudent.schema");
const mongoose_2 = require("mongoose");
exports.AttedanceSchema = new mongoose_1.Schema({
    fechaAsistencia: {
        type: Date,
        required: true,
    },
    idCurso: {
        type: mongoose_2.default.Types.ObjectId,
        ref: 'Course',
        required: true,
    },
    estudiantes: [
        {
            type: attendanceStudent_schema_1.AttedanceStudentSchema,
        },
    ],
});
//# sourceMappingURL=attendance.model.js.map