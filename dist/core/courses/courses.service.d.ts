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
/// <reference types="mongoose/types/inferschematype" />
import { UsuarioPayload } from 'src/models/usuarioPayload.model';
import { AddStudentRequest, CursosRequest } from './dto/courses.dto';
import { Model } from 'mongoose';
import { Course } from 'src/interface/courses.interface';
import { BusquedaServicioRequest } from 'src/models/dto/busqueda.dto';
import { IUsuario } from 'src/interface/usuario.interface';
export declare class CoursesService {
    private readonly courseModel;
    private readonly usuarioModel;
    constructor(courseModel: Model<Course>, usuarioModel: Model<IUsuario>);
    createCourse(usuario: UsuarioPayload, cursoRequest: CursosRequest): Promise<{
        message: string;
    }>;
    getAllCourse(usuario: UsuarioPayload, query: BusquedaServicioRequest): Promise<(Course & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    addStudent(idStudent: AddStudentRequest, idCourse: string): Promise<{
        message: string;
    }>;
    getAllStudentsForCourse(idCourse: string): Promise<Course & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
