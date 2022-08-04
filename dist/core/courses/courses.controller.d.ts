import { BusquedaServicioRequest } from 'src/models/dto/busqueda.dto';
import { RespuestaServidor } from 'src/models/respuestaServidor.model';
import { UsuarioPayload } from 'src/models/usuarioPayload.model';
import { CoursesService } from './courses.service';
import { AddStudentRequest, AllCourseResponse, CursosRequest, getAllStudentsForCourseResponse } from './dto/courses.dto';
export declare class CoursesController {
    private readonly coursesService;
    constructor(coursesService: CoursesService);
    createCourses(usuario: UsuarioPayload, cursoRequest: CursosRequest): Promise<RespuestaServidor>;
    getAllCourse(usuario: UsuarioPayload, query: BusquedaServicioRequest): Promise<AllCourseResponse[]>;
    addStundent(idCourse: string, idStudent: AddStudentRequest): Promise<RespuestaServidor>;
    getAllStudentsForCourse(idCourse: string): Promise<getAllStudentsForCourseResponse>;
}
