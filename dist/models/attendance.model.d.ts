import { Schema } from 'mongoose';
import mongoose from 'mongoose';
export declare const AttedanceSchema: Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
    idCurso: typeof mongoose.Types.ObjectId;
    estudiantes: {
        type: Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
            asistencia: import("../enums/attendance.enum").AttendanceStatus;
            estudiante?: mongoose.Types.ObjectId;
        }>;
    }[];
    fechaAsistencia: Date;
}>;
