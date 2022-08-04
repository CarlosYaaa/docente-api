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
