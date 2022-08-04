import { AttendanceStudent } from 'src/interface/attedance.interface';
export declare class AttendanceRequest {
    fechaAsistencia: Date;
    idCurso: string;
    estudiantes: AttendanceStudentRequest[];
}
export declare class AttendanceStudentRequest {
    estudiante: string;
    asistencia: string;
}
export interface GetAllAttendanceResponse {
    readonly _id: string;
    readonly fechaAsistencia: Date;
    readonly idCurso: string;
}
export interface GetAttendanceByIdResponse {
    readonly _id: string;
    readonly fechaAsistencia: Date;
    readonly idCurso: string;
    readonly estudiantes: AttendanceStudent[];
}
