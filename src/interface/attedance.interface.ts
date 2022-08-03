import { AttendanceStatus } from "src/enums/attendance.enum";

export interface Attendance extends Document {
    readonly _id: string;
    readonly fechaAsistencia: Date;
    readonly idCurso: string;
    readonly estudiantes: AttendanceStudent[];
}

export interface AttendanceStudent { 
    readonly estudiante: string;
    readonly asistencia: AttendanceStatus;
}