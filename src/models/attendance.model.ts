import { Schema } from 'mongoose';
import { AttedanceStudentSchema } from './schema/attendanceStudent.schema';
import mongoose from 'mongoose';

export const AttedanceSchema = new Schema({
  fechaAsistencia: {
    type: Date,
    required: true,
  },
  idCurso: {
    type: mongoose.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  estudiantes: [
    {
      type: AttedanceStudentSchema,
    },
  ],
});
