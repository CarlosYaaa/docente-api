"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QualificationSchema = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const qualificationStudent_schema_1 = require("./schema/qualificationStudent.schema");
exports.QualificationSchema = new mongoose_1.Schema({
    descripcion: {
        type: String,
        required: true,
    },
    fechaNota: {
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
            type: qualificationStudent_schema_1.QualificationStudentSchema,
        },
    ],
});
exports.QualificationSchema.pre('save', function (next) {
    this.estudiantes.forEach(estudiante => {
        estudiante["idCalificacion"] = this._id;
    });
    next();
});
//# sourceMappingURL=qualification.model.js.map