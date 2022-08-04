/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import Course from '../models/courses.model';
import { MongoRepository } from 'mongtype';
import { CursosRequest } from 'src/core/courses/dto/courses.dto';
import { UsuarioPayload } from 'src/models/usuarioPayload.model';
export declare class CourseRepository extends MongoRepository<typeof Course> {
    createCourse(usuario: UsuarioPayload, cursoRequest: CursosRequest): Promise<import("mongoose").Document<unknown, any, {
        descripcion: string;
        day: import("../enums/courses.enum").DayCourses;
        schedule: {
            startTime: {
                type: StringConstructor;
                required: true;
            };
            endTime: {
                type: StringConstructor;
                required: true;
            };
        }[];
        customer?: typeof import("mongoose").Types.ObjectId;
    }> & {
        descripcion: string;
        day: import("../enums/courses.enum").DayCourses;
        schedule: {
            startTime: {
                type: StringConstructor;
                required: true;
            };
            endTime: {
                type: StringConstructor;
                required: true;
            };
        }[];
        customer?: typeof import("mongoose").Types.ObjectId;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
