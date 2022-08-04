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
import { Attendance } from 'src/interface/attedance.interface';
import { Model } from 'mongoose';
import { Course } from 'src/interface/courses.interface';
import { IUsuario } from 'src/interface/usuario.interface';
import { UsuarioPayload } from 'src/models/usuarioPayload.model';
import { AttendanceRequest, AttendanceStudentRequest } from './dto/attendance.dto';
export declare class AttendanceService {
    private readonly attendanceModel;
    private readonly courseModel;
    private readonly usuarioModel;
    constructor(attendanceModel: Model<Attendance>, courseModel: Model<Course>, usuarioModel: Model<IUsuario>);
    createAttendance(usuario: UsuarioPayload, attendanceRequest: AttendanceRequest): Promise<{
        message: string;
    }>;
    getAllAttendances(idCurso: string): Promise<(import("mongoose").Document<unknown, any, Attendance> & Attendance & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getAttendanceById(idAttendance: string): Promise<import("mongoose").Document<unknown, any, Attendance> & Attendance & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    editAttendanceById(idAttendance: string, attendanceEditRequest: AttendanceStudentRequest): Promise<{
        message: string;
    }>;
}
