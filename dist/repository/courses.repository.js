"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseRepository = void 0;
const courses_model_1 = require("../models/courses.model");
const mongtype_1 = require("mongtype");
class CourseRepository extends mongtype_1.MongoRepository {
    async createCourse(usuario, cursoRequest) {
        const cursoCreado = await courses_model_1.default.create({
            usuario: usuario._id,
            descripcion: cursoRequest.descripcion,
            day: cursoRequest.day,
            schedule: cursoRequest.scheduleHours,
        });
        return cursoCreado;
    }
}
exports.CourseRepository = CourseRepository;
//# sourceMappingURL=courses.repository.js.map