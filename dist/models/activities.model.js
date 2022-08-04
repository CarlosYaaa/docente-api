"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivitySchema = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
exports.ActivitySchema = new mongoose_2.Schema({
    nombre: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    idCurso: {
        type: mongoose_1.default.Types.ObjectId,
        ref: 'Course',
        required: true,
    },
    fechaActividad: {
        type: Date,
        required: true,
    },
});
//# sourceMappingURL=activities.model.js.map