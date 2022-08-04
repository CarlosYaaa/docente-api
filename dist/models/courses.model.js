"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseSchema = void 0;
const mongoose_1 = require("mongoose");
const courses_enum_1 = require("../enums/courses.enum");
const mongoose_2 = require("mongoose");
exports.CourseSchema = new mongoose_2.Schema({
    descripcion: {
        type: String,
        required: true,
    },
    day: {
        type: String,
        enum: [
            courses_enum_1.DayCourses.LUNES,
            courses_enum_1.DayCourses.MARTES,
            courses_enum_1.DayCourses.MIERCOLES,
            courses_enum_1.DayCourses.JUEVES,
            courses_enum_1.DayCourses.VIERNES,
        ],
        required: true,
    },
    schedule: [
        {
            startTime: {
                type: String,
                required: true,
            },
            endTime: {
                type: String,
                required: true,
            },
        },
    ],
    students: [{
            type: mongoose_1.default.Types.ObjectId,
            ref: 'Usuario',
        }],
    user: {
        type: mongoose_1.default.Types.ObjectId,
        ref: 'Usuario',
    },
});
//# sourceMappingURL=courses.model.js.map