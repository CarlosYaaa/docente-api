import { Schema } from 'mongoose';
import { AttendanceStatus } from 'src/enums/attendance.enum';

export const AttedanceStudentSchema = new Schema({
    estudiante: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
    },
    asistencia: {
        type: String,
        enum: [
            AttendanceStatus.PRESENTE,
            AttendanceStatus.TARDANZA,
            AttendanceStatus.AUSENTE,
        ],
        required: true,
    }
});