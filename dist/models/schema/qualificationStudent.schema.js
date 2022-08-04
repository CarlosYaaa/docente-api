"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QualificationStudentSchema = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
exports.QualificationStudentSchema = new mongoose_1.Schema({
    estudiante: {
        type: mongoose_2.default.Types.ObjectId,
        ref: 'Usuario',
    },
    nota: {
        type: Number,
        required: true,
        default: 0,
    },
    idCalificacion: {
        type: mongoose_2.default.Types.ObjectId,
        ref: 'Qualification',
    }
});
//# sourceMappingURL=qualificationStudent.schema.js.map